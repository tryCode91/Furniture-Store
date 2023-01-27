<?php

class Furniture extends SQLite
{
    // function that fetches all rows from database for sofa and return a list of items and keys
    protected function getFurniture($furnitureType)
    {
        try {
            $rows = $this->connect()->query('SELECT count(*) as count FROM DB_furniture');
            $row = $rows->fetchAll();
            $numRows = $row[0]['count'];
            
            if(!$rows){
                print "Statement Failed";
                exit();
            }

            if ($numRows === 0) {
                print "No Rows In Table ".$furnitureType;
                exit();
            }

            $row = null;
            $rows = null;

            $stmt = $this->connect()->prepare('SELECT name, title, description, id, price, type from DB_furniture WHERE type = ? order by id');
            $stmt->execute([$furnitureType]);
            $inventory = array();
            $data = $stmt->fetchAll();
            foreach ($data as $key => $value) {
                $inventory[] = array(
                    "name" => $value["name"],
                    "title" => $value["title"],
                    "description" => $value["description"],
                    "price" => $value["price"],
                    "id" => $value["id"],
                    "type"=>$value["type"]
                );
            }
            print_r(json_encode($inventory));
        } catch (PDOException $e) {
            print "Error: " . $e;
        }
    }
}
