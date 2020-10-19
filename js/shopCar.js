$(function () {
    // 发送ajax请求展示商品信息
    aja();
    function aja() {
        num = 0;
        money = 0;
        count = 0;
        var cart_id=Cookie.getItem("username");
        console.log(cart_id);
        $.ajax({
            type: "get",
            url: "../php/guanlian.php",
            dataType: "json",
            data:{
                cart_id
            },
            success(data) {
                var data = data.data;
                rende(data);
                getSum();
                // console.log(data)
            }
        })
    }

    function rende(data) {
        let commodity = data.map((ele) => {
            return `
            <div class="goods clearfix" gata-id="${ele.goods_id}">
                <input type="checkbox" name="" class="select">
                <div class="goodsImg">
                    <img src="${ele.src}" alt="">
                </div>
                <div class="myGoodsId">
                    <p>${ele.title} 黑色</p>
                </div>
                <div class="myGoodsPrice">
                    <p>${(ele.price).slice(0, -2)}</p>
                </div>
                <div class="addAndRemove">
                    <p class="remove">-</p>
                    <p class="num">${ele.num}</p>
                    <p class="add">+</p>
                </div>
                <div class="subtotal">
                    <p>${(ele.price).slice(0, -2) * (ele.num)}元</p>
                </div>
                <div class="Del">
                    <!-- <i class="iconfont icon-shanchu"></i> -->
                    <a >&times;</a>
                </div>
            </div>
            `
        }).join("");
        $(".myGoods").html(commodity);
    }

    // 删除数据
    $(".myGoods").on("click", ".Del", function () {
        let id = $(this).parents(".goods").attr("gata-id")
        $.ajax({
            type: "post",
            url: "../php/delShopCar.php",
            data: {
                id
            },
            success: (data) => {
                $(this).parents(".goods").remove()
            }
        })
    })
    // 添加数量
    $(".myGoods").on("click", ".add", function () {
        let id = $(this).parents(".goods").attr("gata-id")
        $.ajax({
            type: "post",
            url: "../php/addShopCar.php",
            data: {
                id
            },
            success: (data) => {
                aja();
            }
        })
    })

    // 减少数量
    //  当前产品数量
    $(".myGoods").on("click", ".remove", function () {
        let id = $(this).parents(".goods").attr("gata-id")
        $.ajax({
            type: "post",
            url: "../php/removeShopCar.php",
            data: {
                id
            },
            success: (data) => {
                console.log(data);
                var num = $(".num").text(num);
                num++;
                if (num <= 1) {
                    num = 1;
                    $(".num").text(num)
                }
                aja();

            }
        })
    })





    // 计算总数量和总额模块
    // 计算总件数
    var count = 0;
    // 计算总价格
    var money = 0;
    // 计算总选中的数量
    var num = 0;
    function getSum() {
        $(".selected").text(num)
        $(".num").each(function (i, ele) {
            count += parseInt($(ele).text());
        })
        $(".goods_count").text(count);
    }
    // 全选框设置
    $("#checkAll").on("change", function () {
        num = 0;
        money=0;
        $(".select,#checkAll").prop("checked", $(this).prop("checked"))
        if ($(this).prop("checked")) {
            // 计算总和
            $(".num").each(function (i, ele) {
                num += parseInt($(ele).text());
            })
            $(".subtotal p").each(function (i, ele) {
                console.log(555);
                money += parseInt($(ele).text());
            })
            $(".selected").text(num);
            $(".total span").text(money);
        } else {
            $(".selected").text(0);
            $(".total span").text(0);
        }
    })
    // 单选框设置
    $(".myGoods").on("change", ".select", function () {
        // num = 0;
        if ($(".select:checked").length === $(".select").length) {
            $("#checkAll").prop("checked", true)

        } else {
            $("#checkAll").prop("checked", false)
        }
        if ($(this).prop("checked")) {
            num += +$(this).siblings(".addAndRemove").find('.num').text()
            money += +($(this).siblings(".subtotal").find('p').text()).slice(0, -1)
        } else {
            num -= +$(this).siblings(".addAndRemove").find('.num').text()
            money -= +($(this).siblings(".subtotal").find('p').text()).slice(0, -1)
        }
        $(".selected").text(num)
        $(".total span").text(money.toFixed(2))
    })


    // 点击去结算
    $(".Settlement_Btn").click(function () {
        $.ajax({
            type: "post",
            url: "../php/clearShopCar.php",
            success: (data) => {
                aja();
                alert("您以成功购买所有您所需商品，欢迎下次光临");
                $(".total span").text(0);
            }
        })
    })
})