<?php

    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "g19";

    $con = new mysqli($host,$user,$pass,$db)

    if ($con->connection_error){
        die("DB connection failed" . $con->connection_error);


    }

    $sql = "select * from 'students'"

    $qry = $con->query($sql);

    $data = array();

    if($qry->num_row > 0){
        while($row = $qry->fetch_object()){
            $data[] = $row;
        }
    }else{
        $data[] = null;
    }

    $con->close();

    echo json_encode($data);