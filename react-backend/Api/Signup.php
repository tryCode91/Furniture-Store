<?php
include "../classes/sqlite.class.php";
include "../classes/signup.class.php";
include "../classes/SignupContr.class.php";
//fetch data from user

if($_SERVER["REQUEST_METHOD"] === "POST"){
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $pwd = trim($_POST["pwd"]);
    $pwdRepeat = trim($_POST["pwdRepeat"]);
    
    $signup = new SignupContr($name, $email, $pwd, $pwdRepeat);
    $signup->signupUser();

    $message = array();
    $message["success"] = "User Was Created!";
    print json_encode($message);
}
