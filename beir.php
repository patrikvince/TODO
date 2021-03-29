<?php

$todo = $_POST['todo']; 
$_datum = $_POST['datum'];
$allpot = false;

$tablaNeve = "todo";
$oszlopok = "(todo, datum, allapot)";
$ertekek = "(\"$todo\", 'datum', $allpot\)";

$mySql->ujRekord($tablaNeve, $oszlopok, $ertekek);

echo json_encode($_POST);

