<?php
//Logout uses the same controller and class as Login.
include "../classes/SQLite.class.php";
include "../classes/login.class.php";
include "../classes/loginContr.class.php";
//logout user and return response true/false
if(isset($_POST["Pressed"])){
    $userId = $_POST["userId"];
    $response = array();
    session_start();
    $_SESSION = array();
    session_unset();
    session_destroy();
    $dummydata1 = "";
    $logout = new LoginContr($userId, $dummydata1);
    $logout->logoutUser();
    print json_encode("Session Backend Destroyed And Shopping Cart Deleted From Database.");

}

