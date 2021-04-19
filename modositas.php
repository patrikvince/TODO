<?php


include_once './MySqlDB.php';
echo 'haho';
$mySql = new MySqlDB();

$id = $_GET['id'];

$tablaNeve = "todo";
$ujErtekek = "allapot = 1";
$where  = "ID = $id";
$mySql->frissit($tablaNeve, $ujErtekek, $where);

