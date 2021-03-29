<?php

require './MySqlDB.php';

$mySql = new MySqlDB();


$teendok = array();
$result = $mySql->lekerdez("todo");


if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {

        $teendok[] = $row;
    }
    echo json_encode($teendok);
} else {
    echo "0 results";
}


