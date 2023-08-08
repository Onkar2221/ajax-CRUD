<?php

include('db.php');
$id = $_POST['id_id']; // get the id from url parameter
//key access

$sql = "DELETE FROM  `crud ajax` WHERE id='$id'";

if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
} else {
    "not deleted";
}

?>