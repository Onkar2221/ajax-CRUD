<?php
include('db.php');

// print_r($_POST);   // In console data in Array Format 

$id = $_POST['id'];
// Only Below Three take first
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];


// Here when we are start Update function then and then we can add (ON DUPLICATE KEY) & ($id = $_POST['id'];)


$sql = "INSERT INTO  `crud ajax`(id ,name, email, password) values('$id','$name','$email','$password') ON Duplicate key update name='$name', email='$email', password='$password'";

// if ($conn->query($sql) == TRUE) {
//     echo "Data Inserted successfully.";
// } else {
//     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
// }

$result = mysqli_query($conn, $sql);
if ($result) {
    echo "Successfully Added";
} else {
    echo "Not Added";
}
?>