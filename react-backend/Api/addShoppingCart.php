<?php
include "../classes/SQLite.class.php";
include "../classes/shoppingCart.class.php";
include "../classes/shoppingCartContr.class.php";

    $request_body = file_get_contents("php://input");
    $data = json_decode($request_body, true);

    $userId = $data["userId"];
    $choosenItem = $data["choosenItem"];
    $quantity = $data["quantity"];
    $shoppingCart = new ShoppingCartContr($choosenItem,$userId, $quantity);
    $shoppingCart->insertCart();
    echo "Hey! Database updated.";

    //to get all items the user has in shoppingcart do a select statement with userId and to find all items the user has put into cart
    //this axios request will be done on component shoppingCart
    //then render inside a table
    //to get number of items just do a select count(rows) that come up when selecting every item the user with id(5) has
    //a problem can be to find out how many of items but there is probably a solution in SQL to count duplicate elements 
    //example: if the user has 4 rows of item id 4 and 2 rows of item id 1 then a calulation should be made to display quantity of
    //item id 4: quantity: 4
    //item id 2: quanitity 1
    //meaning the user put 4 items of item id 4 and 1 item of item id 2 into the shoppingcart
    //finished



