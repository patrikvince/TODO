<?php

require_once './MySqlDB.php';

$todo = $_POST['todo'];
$datum = $_POST['datum'];
$allapot = 0;

if ($todo != "" && $datum != "") {
    $tablaNeve = "todo";
    $oszlopok = "(todo, datum, allapot)";
    $ertekek = "'$todo', '$datum', '$allapot'";

    $mySql = new MySqlDB();
    $mySql->ujRekord($tablaNeve, $oszlopok, $ertekek);
    echo $todo . ", " . $datum . ", " . $allapot;
    echo json_encode($_POST);
}else{
    echo 'Nincs megadva feladat!';
}
