<?php

$sql = "INSERT INTO pipper.pip (default, 'textpip', 'userpip', 'timepip')
VALUES (default, 'Doe', 'user', 'time')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>