<?php
    header('content-type:text/html;charset=utf-8');

    $userOrphone = $_POST['userphone'];
    $password = $_POST['password'];

    $conn = mysqli_connect('localhost','root','root','project_mi');
    $sqlStr = "select * from usermessage where (phonenumber='{$userOrphone}' or username='{$userOrphone}') and userpass='{$password}'";
    $result = mysqli_query($conn,$sqlStr);
    mysqli_close($conn);

    $arr = mysqli_fetch_all($result,MYSQL_ASSOC);
    if(count($arr) == '1'){
        echo '1';
    }else {
        echo '0';
    }

?>