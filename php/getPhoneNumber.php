<?php
    header('content-type:text/html;charset=utf-8');
    $username = $_GET['username'];
    $conn = mysqli_connect('localhost','root','root','project_mi');
    $sqlStr = "select phonenumber from usermessage where phonenumber='".$username."' or username='".$username."'";
    $result = mysqli_query($conn,$sqlStr); 
    
    $arr = mysqli_fetch_row($result);
    
    echo implode($arr);
    mysqli_close($conn);
    
?>