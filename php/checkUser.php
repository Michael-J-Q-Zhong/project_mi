<?php
    header('content-type:text/html;charset=utf-8');
    $phoneNumber = $_GET['phonenumber'];

    $conn = mysqli_connect('localhost','root','root','project_mi');
    $sqlStr = "select phonenumber from usermessage where phonenumber='{$phoneNumber}'";
    $result = mysqli_query($conn,$sqlStr);
    mysqli_close($conn);

    $arr = mysqli_fetch_all($result,MYSQL_ASSOC);

    if(count($arr) == 1){
        echo '1';
    }else{
        echo '0';
    }

?>