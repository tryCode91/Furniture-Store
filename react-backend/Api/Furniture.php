<?php
include "../classes/sqlite.class.php";
include "../classes/furniture.class.php";
include "../classes/furnitureContr.class.php";

if(isset($_POST["furniture"])){
  $furnitureType = $_POST["furniture"];
  
  $furniture = new FurnitureContr($furnitureType);
  $furniture->showFurniture();

}
