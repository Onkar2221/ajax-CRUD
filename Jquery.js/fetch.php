<?php
include('db.php');

$sql = "SELECT * FROM `crud ajax`";

$result = mysqli_query($conn, $sql);
 
print_r($result)







    ?>