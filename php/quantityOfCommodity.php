<?php
    $id = $_POST['phoneId'];
    // 连接数据库
    mysql_connect('localhost', "root", "root");
    // 选择数据库
    mysql_select_db("miui.sql");
    // 定义sql语句
    $sql = "SELECT * FROM shopcar WHERE cart_id = '$id'";
    // 执行
    $result = mysql_query($sql);
    // 把数据从结果集中抽取出来 放入数组 再返回给前端
    $arr = array();
    while($row = mysql_fetch_array($result)) {
        array_push($arr, $row);
    }
    echo json_encode(array("error" => 0, "data" => $arr));
   
?>