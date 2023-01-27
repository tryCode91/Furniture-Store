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
                if($row === 0){
                    $stmt = null;
                    $stmt = $this->connect()->prepare("INSERT INTO DB_cart(user_id, furniture_id, type, quantity) values (?, ?, ?, ?)");
                    if (!$stmt->execute([$userId, $furniture_id, $type, $quantity])) {
                        $stmt = null;
                        echo "STATEMENT FAILED! On Row 29";
                        exit();
                    }
                }else{
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

    protected function getUserCartRows($userId)
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
                    echo "No Rows";
                    exit();
                }
            $stmt = $this->connect()->prepare("SELECT db_cart.id, DB_cart.user_id, DB_cart.furniture_id, DB_cart.type, DB_furniture.name, DB_furniture.price, max(db_cart.quantity) as maxquantity FROM db_cart LEFT JOIN DB_furniture ON DB_cart.furniture_id = DB_furniture.id group by DB_cart.furniture_id");
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
