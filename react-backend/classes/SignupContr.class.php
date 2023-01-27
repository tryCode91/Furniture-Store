<?php


class SignupContr extends Signup
{
    private $name;
    private $email;
    private $pwd;
    private $pwdRepeat;

    public function __construct($name, $email, $pwd, $pwdRepeat)
    {
        $this->name = $name;
        $this->email = $email;
        $this->pwd = $pwd;
        $this->pwdRepeat = $pwdRepeat;
    }

    public function signupUser()
    {

        $message = array();

        if ($this->checkInput() == true) {
            $message["error"] = "Please Fill In All Fields!";
            print json_encode($message);
            exit();
        }

        if ($this->checkName() == true) {
            $message["error"] = "Name can only contain Letters and no White-Space!";
            print json_encode($message);
            exit();
        }

        if ($this->checkEmail() == true) {
            $message["error"] = "Invalid Email Address!";
            print json_encode($message);
            exit();
        }

        if ($this->checkPwd() == true) {
            $message["error"] = "Passwords Does Not Match!";
            print json_encode($message);
            exit();
        }

        if ($this->validatePwd() == true) {
            $message["error"] = "Password has to be minimum eight characters, include a letter, number and special character";
            print json_encode($message);
            exit();
        }

        if ($this->checkEmailExist($this->email) == true) {
            $message["error"] = "Email Already Exist!";
            print json_encode($message);
            exit();
        }


        //check if user exist in database.
        $this->checkUserExist($this->name);

        $this->insertUser($this->name, $this->email, $this->pwd);
    }

    private function checkInput()
    {
        if (empty($this->name) || empty($this->pwd)) {
            return true;
        } else {
            return false;
        }
    }

    private function checkPwd()
    {
        if ($this->pwd === $this->pwdRepeat) {
            return false;
        } else {
            return true;
        }
    }

    private function checkEmail()
    {
        if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            return true;
        } else {
            return false;
        }
    }

    private function checkName()
    {
        if (!preg_match("/[a-zA-Z]/m", $this->name)) {
            return true;
        } else {
            return false;
        }
    }

    private function validatePwd()
    {
        if (!preg_match("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/", $this->pwd)) {
            return true;
        } else {
            return false;
        }
    }
}
