<?php
    // 连接数据库
    mysql_connect('localhost', "root", "root");
    // 选择数据库
    mysql_select_db("miui.sql");
    $id = $_POST["id"];
    // 删除
    $clearSql = "TRUNCATE table `shopcar`";
    mysql_query($clearSql);
    echo json_encode(array("error" => 0, "msg" => "删除成功"));
?>