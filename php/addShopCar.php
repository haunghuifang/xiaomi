<?php
    // 连接数据库
    mysql_connect('localhost', "root", "root");
    // 选择数据库
    mysql_select_db("miui.sql");
    $id = $_POST["id"];
    // 添加数量
    $plusSql = "UPDATE `shopcar` SET `num`= `num`+ 1 WHERE `goods_id`=$id";
    mysql_query($plusSql);
    echo json_encode(array("error" => 0, "msg" => "增加成功"));
?>