<?php

class ShoppingCartContr extends ShoppingCart {

    private $userId;
    private $choosenProduct; //object with key value pairs
    private $quantity;

    public function __construct($userId, $choosenProduct, $quantity)
    {
        $this->userId = $userId;
        $this->choosenProduct = $choosenProduct;
        $this->quantity = $quantity;
    }

    public function insertCart(){
        $this->addCart($this->userId, $this->choosenProduct, $this->quantity);
    }

    public function showCart(){
        $this->getUserCart($this->userId);
    }

    public function deleteProduct(){
        $this->deleteFromCart($this->userId);
    }
}