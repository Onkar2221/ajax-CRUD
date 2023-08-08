<?php

include('db.php');
$id = $_POST['id_id']; // get the id from url parameter

$sql = "SELECT * FROM `crud ajax` Where id='$id'";

$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_assoc($result);


echo json_encode($row); //convert php data into json format ({.....}) here we can see data in string format in "console"





?>