<?php
    header('content-type:text/html;charset=utf-8');
    $phonenumber = $_POST['phonenumber'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = mysqli_connect('localhost','root','root','project_mi');
    $sqlStr = "insert into usermessage(phonenumber,username,userpass) value ('".$phonenumber."','".$username."','".$password."')";
    $result = mysqli_query($conn,$sqlStr);
    mysqli_close($conn);

    if($result){
        echo '1';
    }else{
        echo '0';
    }
?>