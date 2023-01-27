<?php
include "../classes/SQLite.class.php";
include "../classes/shoppingCart.class.php";
include "../classes/shoppingCartContr.class.php";

if(isset($_POST["productId"])){
    $productId = $_POST["productId"];
    $dummydata1 = "";
    $dummydata2 = "";
    $delete = new ShoppingCartContr($productId,$dummydata1,$dummydata2);
    $delete->deleteProduct();
}