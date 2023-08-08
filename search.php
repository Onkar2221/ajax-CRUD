<?php
include('db.php');

$name = $_POST['name'];
$sql = "SELECT * FROM `crud ajax` WHERE LOWER(`crud ajax`.`name`) LIKE '%$name%'";
// echo $sql;
$result = mysqli_query($conn, $sql);

// print_r($result);


while ($row = mysqli_fetch_assoc($result)) {
    $a[] = $row; //Data save one variable
}


echo json_encode($a); //convert php data into json format ({.....})  . here we can see data in string format in "console" i.e in("...") thats why we can used [json_encode]




?>