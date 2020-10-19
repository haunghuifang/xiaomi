<?php
    // 获取前端传递过来的信息
    $phone = $_POST["phone"];
    $password = $_POST["password"];

    // 连接数据库
    mysql_connect('localhost', "root", "root");
    // 选择数据库
    mysql_select_db("miui.sql");
    // 定义sql语句
    $sql = "INSERT INTO user( phone , password )  VALUES('$phone' ,'$password')";
    // 执行
    $result = mysql_query($sql);
    // 判定返回结果
    if ($result) {
        echo json_encode(array("error" => 0, "msg" => "注册成功"));
    } else {
        echo json_encode(array("error" => 1, "msg" => "注册失败"));
    }
 
?>