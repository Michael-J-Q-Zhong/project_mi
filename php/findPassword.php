<?php
    header('content-type:text/html;charset=utf-8');
    $phonenumber = $_GET['phonenumber'];
    $username = $_GET['username'];

    $conn = mysqli_connect('localhost','root','root','project_mi');
    $sqlStr = "select userpass from usermessage where phonenumber='".$phonenumber."' and username='".$username."'";
    $result = mysqli_query($conn,$sqlStr);

    $arr = mysqli_fetch_row($result);
    if(count($arr) == '1'){
        echo implode($arr);
    }else{
        echo '0';
    }
    mysqli_close($conn);
?>