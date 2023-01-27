<?php

class LoginContr extends Login {
    private $name;
    private $pwd;

    public function __construct($name, $pwd)
    {
        $this->name = $name;
        $this->pwd = $pwd;
    }

    public function loginUser(){

        $message = array();

        if($this->checkInput() == true){
            $message["error"] = "Please Fill In All Fields";
            print json_encode($message);
            exit();
        }
        
        $this->getUser($this->name, $this->pwd);
    }

    public function logoutUser(){
        $this->deleteCartFromDatabase($this->name);//inparameter userId
    }

    private function checkInput(){
        if(empty($this->name) || empty($this->pwd)){
            return true;
        }else {
            return false;
        }
    }
}