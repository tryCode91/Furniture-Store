<?php

class SQLite {
    
    private $pdo;

    protected function connect(){

        if($this->pdo == null){
            try {
                $this->pdo = new PDO("sqlite:".__DIR__."/database/users.db");
                $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                print "Error!: " . $e->getMessage() . "<br>";
                die();
            }
        }
        return $this->pdo;
    }
}


