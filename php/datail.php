<?php
    // 获取前端传递过来的信息
    $cart_id = $_POST["username"];
    $goods_id = $_POST["goods_id"];
    $num = $_POST["num"];

    // 连接数据库
    mysql_connect('localhost', "root", "root");
    // 选择数据库
    mysql_select_db("miui.sql");
    // 定义sql语句
    $sql = "INSERT INTO shopcar( cart_id , goods_id, num )  VALUES('$cart_id' ,'$goods_id', '$num')";
    // 执行
    $result = mysql_query($sql);
    // 判定返回结果
    if ($result) {
        echo json_encode(array("error" => 0, "msg" => "成功加入购物车"));
    } else {
        echo json_encode(array("error" => 1, "msg" => "加入购物车失败"));
    }
 
?>