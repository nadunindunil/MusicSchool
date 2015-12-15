<?php

    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "g19";

    $con = new mysqli($host,$user,$pass,$db);

    if ($con->connect_error) {
         die("Connection failed: " . $con->connect_error);
    }

    $return_arr = array();

        $fetch = $con->query("SELECT * FROM student");

        while ($row = $fetch->fetch_assoc()) {
            $row_array['ID'] = $row['ID'];
            $row_array['name'] = $row['name'];
            $row_array['dob'] = $row['DOB'];

            array_push($return_arr,$row_array);
        }

    $con->close();

    echo json_encode($return_arr);