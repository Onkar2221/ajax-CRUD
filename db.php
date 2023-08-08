<?php
//connect to the database
$servername = "localhost";
$username = "root"; //your username here
$password = ""; // your password here
$dbname = "crud ajax";

//create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// //check if there is any error in connecting with db or not.
// if (!$conn) {
//     die("Connection failed: " . mysqli_error($conn));
// } else {
//     echo "Connected successfully.";
// }
?>