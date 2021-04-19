<?php

require_once './MySqlDB.php';

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $mySql = new MySqlDB();
    $id = $_GET['id'];
    $mySql->torol("todo", "ID=" . $id);
}
