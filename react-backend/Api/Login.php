<?php
include "../classes/sqlite.class.php";
include "../classes/login.class.php";
include "../classes/loginContr.class.php";
//fetch data from react input
if(isset($_POST["name"]) && isset($_POST["pwd"])){
    $name = trim($_POST["name"]);
    $pwd = trim($_POST["pwd"]);
    
    $login = new LoginContr($name, $pwd);
    $login->loginUser($name);

    $message = array();
    $message["success"] = "User Is Logged In";
    $message["userId"] = $_SESSION["userId"];
    $message["user_name"] = $_SESSION["user_name"];
    print json_encode($message);
}

