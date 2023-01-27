<?php

class Signup extends SQLite
{
    protected function checkUserExist($name)
    {
        $message = array();
        $stmt = $this->connect()->prepare("SELECT count(*) as count FROM DB_user where user_name = ?");
        $stmt->execute([$name]);

        $row = $stmt->fetchAll();
        $numRows = $row[0]["count"];
        
        //if username already exist in database
        if($numRows > 0){
            $stmt = null;
            $message["error"] = "User Already Exist!";
            print json_encode($message);
            exit();
        }
    }

    //check email exist
    protected function checkEmailExist($email)
    {
        $message = array();
        $stmt = $this->connect()->prepare("SELECT user_email FROM DB_user where user_email = ?");

        if (!$stmt->execute([$email])) {
            $stmt = null;
            $message["error"] = "Select Statement Failed!";
            print json_encode($message);
            exit();
        }

        $stmt->fetchAll();
        if ($stmt->rowCount() > 0) {
            $stmt = null;
            return true;
        }else{
            return false;
        }
    }
    
    protected function insertUser($name, $email, $pwd)
    {
            $stmt = $this->connect()->prepare("INSERT INTO DB_user(user_name, user_email, user_pwd) VALUES( ? , ? , ? )");
            $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
            //check if statement executes without error
            if (!$stmt->execute([$name, $email, $hashedPwd])) {
                $stmt = null;
                $message["error"] = "Insert Statement Failed!";
                print json_encode($message);
                exit();
            }
    }
}
