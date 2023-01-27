<?php

class Login extends SQLite
{
    protected function getUser($name, $pwd)
    {
        $message = array();
        $stmt = $this->connect()->prepare("SELECT count(*) as count FROM DB_user where user_name = ? OR user_email = ?");

        if (!$stmt->execute([$name, $pwd])) {
            $stmt = null;
            $message["error"] = "Count Row Statment Failed";
            print json_encode($message);
            exit();
        }

        $row = $stmt->fetchAll();
        $numRows = $row[0]['count'];

        if (!$row) {
            $message["error"] = "Statement Failed"; 
            exit();
        }

        if ($numRows === 0) {
            $message["error"] = "No User With This Name Exists";
            exit();
        }

        $row = null;
        $stmt = null;
        $stmt = $this->connect()->prepare("SELECT user_id, user_name, user_email, user_pwd FROM DB_user where user_name = ? OR user_email = ?");
        if (!$stmt->execute([$name, $pwd])) {
            $stmt = null;
            $message["error"] = "Select User Statement Failed";
            print json_encode($message);
            exit();
        }
        $user = $stmt->fetchAll();
        //check pwd
        
        $verifyPwd = password_verify($pwd, $user[0]["user_pwd"]);
        if (!$verifyPwd) {
            //login user
            $message["error"] = "Incorrect Password";
            print json_encode($message);
            exit();
        } else {
            session_start();
            $_SESSION["userId"] = $user[0]["user_id"];
            $_SESSION["user_name"] = $user[0]["user_name"];
        }
    }

    protected function deleteCartFromDatabase($userId)
    {
        $stmt = $this->connect()->prepare("DELETE FROM DB_cart WHERE user_id = ?");

        if (!$stmt->execute([$userId])) {
            $stmt = null;
            print "Statement Failed";
            exit();
        }
    }
}
