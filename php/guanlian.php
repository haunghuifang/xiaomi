<?php
    $cart_id = $_GET["cart_id"];
    // 连接数据库
    mysql_connect('localhost', "root", "root");
    // 选择数据库
    mysql_select_db("miui.sql");
    // 定义sql语句
    // $sql = "SELECT * FROM  messages";
    $sql = "SELECT shopcar.*,messages.src,messages.title,messages.price FROM shopcar,messages WHERE shopcar.goods_id=messages.id AND cart_id=$cart_id";
    // 执行
    $result = mysql_query($sql);
    // 把数据从结果集中抽取出来 放入数组 再返回给前端
    $arr = array();
    // $data = mysqli_fetch_all(mysqli_query($db, $sql), MYSQLI_ASSOC);
    while($row = mysql_fetch_array($result)) {
        array_push($arr, $row);
    };
    echo json_encode(array("error" => 0, "data" => $arr));
   
?>