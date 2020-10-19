<?php
    // 购物车添加逻辑：
    // 1 根据用户的id查看用户是否有购物车信息
    // 2 根据商品的id查询商品的信息
    // 3 如果用户有购物车 那么查询出购物车中是否存在该商品
    // 3.1 如果购物车中有这个商品 那么数量+1
    // 3.2 如果购物车中没有这个商品 那么把商品放进入 
    // 4 如果用户没有购物车那么创建一个数组 并把查询到的商品信息放入该数组

$goods_id=$_POST["goods_id"];
$cart_id = $_POST["cart_id"];

 // 连接数据库
 mysql_connect('localhost', "root", "root");
 // 选择数据库
 mysql_select_db("miui.sql");
 // 定义sql语句
$sql = "SELECT * FROM shopcar WHERE goods_id = '$goods_id'";
 // 执行
 $result = mysql_query($sql);
 // 判定返回结果
 if (mysql_num_rows($result)==0) {
    /* 往数据库表中新增一条数据 */
    /* 往数据库表中新增一条数据 */
    $sql = "INSERT INTO shopcar (cart_id , goods_id , num ) VALUES ('$cart_id','$goods_id',1)";
} else {
    /* 更新数据 */
    $sql = "UPDATE `shopcar` SET `num`= `num`+ 1 WHERE `goods_id`='$goods_id'";
}; 

if ($result) {
    echo json_encode(array("error" => 0, "msg" => "添加进入数据库成功"));
} else {
    echo json_encode(array("error" => 1, "msg" => "添加进入数据库失败"));
}
 $res = mysql_query($sql);
?>