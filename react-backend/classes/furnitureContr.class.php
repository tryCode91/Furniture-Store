<?php

class FurnitureContr extends Furniture {

    private $furnitureType;

    public function __construct($furnitureType)
    {
        $this->furnitureType = $furnitureType;
    }

    public function showFurniture(){

        $this->getFurniture($this->furnitureType);
    }
}