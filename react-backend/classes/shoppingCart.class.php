<?php

class ShoppingCart extends SQLite
{
    //this and getUserCartRows is used in detail
    protected function addCart($choosenProduct, $userId, $quantity)
    {
        if (!empty($choosenProduct["id"]) && !empty($userId) && !empty($choosenProduct["type"])) {
            $furniture_id = $choosenProduct["id"];
            $type = $choosenProduct["type"];
            try {
                //check if there is rows
                $stmt = $this->connect()->prepare("SELECT count(*) as count FROM db_cart WHERE furniture_id = ? AND user_id = ?");

                if (!$stmt->execute([$furniture_id, $userId])) {
                    $stmt = null;
                    echo "STATEMENT FAILED On Row 16";
                    exit();
                }

                $rows = $stmt->fetchAll();
                $row = $rows[0]["count"];

                // if there is no rows insert into db
                if ($row === 0) {
                    $stmt = null;
                    $stmt = $this->connect()->prepare("INSERT INTO DB_cart(user_id, furniture_id, type, quantity) values (?, ?, ?, ?)");
                    if (!$stmt->execute([$userId, $furniture_id, $type, $quantity])) {
                        $stmt = null;
                        echo "STATEMENT FAILED! On Row 29";
                        exit();
                    }
                } else {
                    // if there is rows update quantity +1
                    $stmt = null;
                    $stmt = $this->connect()->prepare("update DB_cart set quantity = quantity + 1 WHERE furniture_id = ? AND user_id  = ?");

                    if (!$stmt->execute([$furniture_id, $userId])) {
                        $stmt = null;
                        echo "STATEMENT FAILED! On Row 39";
                        exit();
                    }
                }
            } catch (PDOException $e) {
                print "Im gonna have a great life!" . $e;
            }
        }
    }

    protected function getUserCart($userId)
    {
        if (!empty($userId)) {
            try {
                $stmt = $this->connect()->prepare("SELECT count(*) as count FROM DB_cart WHERE user_id = ?");

                if (!$stmt->execute([$userId])) {
                    $stmt = null;
                    echo json_encode("Statement Failed");
                    exit();
                }

                $rows = $stmt->fetchAll();
                $row = $rows[0]["count"];

                if ($row === 0) {
                    $stmt = null;
                    echo json_encode("0");
                    exit();
                }
                $stmt = null;
                $stmt = $this->connect()->prepare("SELECT furniture_id FROM DB_cart WHERE user_id = ?");
                if (!$stmt->execute([$userId])) {
                    $stmt = null;
                    echo json_encode("Statement Failed");
                    exit();
                }

                $ids = $stmt->fetchAll(PDO::FETCH_COLUMN);
                $quantAndFurniture = array();
                $inQuery = implode(',', array_fill(0, count($ids), '?'));
                $stmt = null;
                $stmt = $this->connect()->prepare("SELECT * FROM DB_furniture WHERE `id` IN ($inQuery)");
                $quant = $this->connect()->prepare("SELECT quantity, furniture_id from DB_cart WHERE `furniture_id` IN ($inQuery)");
                foreach ($ids as $k => $id) {
                    $stmt->bindValue(($k + 1), $id);
                    $quant->bindValue(($k + 1), $id);
                    $stmt->execute();
                    $quant->execute();
                }
                $furniture = $stmt->fetchAll();
                $quantity = $quant->fetchAll();
                $quantAndFurniture["furniture"] = $furniture;
                $quantAndFurniture["quantity"] = $quantity;

                for ($i=0; $i < count($furniture); $i++) { 
                    for ($k=0; $k <count($quantity) ; $k++) { 
                        if($furniture[$i]["id"] == $quantity[$k]["furniture_id"]){
                            $furniture[$i]["quantity"] = $quantity[$k]["quantity"];
                        }
                    }
                }
                print json_encode($furniture);
               
            } catch (PDOException $e) {
                print "Error: ->" . $e;
            }
        }
    }

    protected function deleteFromCart($userId)
    {
        $productId = $userId;
        if (!empty($productId)) {
            try {
                $stmt = $this->connect()->prepare("Delete FROM db_cart where furniture_id = ?");

                if (!$stmt->execute([$productId])) {
                    echo json_encode("Failure");
                }

                echo json_encode("Success");
            } catch (PDOException $e) {
                print "Error: ->" . $e;
            }
        }
    }
}
