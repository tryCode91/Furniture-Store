<?php

include "../classes/SQLite.class.php";
include "../classes/shoppingCart.class.php";
include "../classes/shoppingCartContr.class.php";
    $body = file_get_contents("php://input");
    $data = json_decode($body, true);

    $userId = $data;
    $dummydata1 = "";
    $dummydata2 = "";
    
    $shoppingCart = new ShoppingCartContr($userId,$dummydata1,$dummydata2);
    $shoppingCart->showCart();
    