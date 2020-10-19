$(function () {
    // var lis = document.querySelectorAll(".ulAll li");
    aj();
    // 鼠标触摸二维码事件
    // 一个变量记录一页的条数
    var dataCount = 6;
    $(".topDown").mouseover(function () {
        $(".ewm").css("display", "block")
    })
    $(".topDown").mouseleave(function () {
        $(".ewm").css("display", "none")
    })
    // 鼠标触摸购物车事件
    $(".shopping").mouseover(function () {
        $(".shopBox").css("display", "block")
    })
    $(".shopping").mouseleave(function () {
        $(".shopBox").css("display", "none")
    })

    // 导航栏

    function aj() {
        $.ajax({
            type: "post",
            url: "../php/top.php",
            success(data) {
                // console.log(data);
                let shop = JSON.parse(data);
                let shopping = shop.data;
                navList(shopping);

            }
        });
    }

    // 记录下标索引
    var index = 0;

    function navList(data) {
        // console.log(2);
        // console.log(index)
        // 从数组中截取一段数据
        var data = data.slice(index * dataCount, index * dataCount + dataCount)
        let html_topLi = data.map((ele) => {
            return `
                <a href="../html/detail.html?id=${ele.title}">
                    <li class="first">
                        <div class="nav_goods_img">
                            <img src=${ele.src} width="160" height="110">
                        </div>
                        <div class="title">${ele.title}</div>
                        <p class="price">${ele.price}</p>
                    </li>
                    </a>`
        }).join("");
        let html_nav = `<ul class="nav_goods_ul">${html_topLi}</ul>`;
        $(".nav-goods-box-sub").html(html_nav);
    }
    /* 添加鼠标移入事件 */
    $(".listAll li").mouseenter(function () {
        $(".nav-goods").css("display", "block");
        $(this).mouseleave(function () {
            $(".nav-goods").css("display", "none")
        });
        $(".nav-goods").mouseenter(function () {
            $(this).css("display", "block");
            $(this).mouseleave(function () {
                $(".nav-goods").css("display", "none");
            })
        });
        aj();
        index = $(this).index();
    });
    $(".serve").on("mouseenter", function () {
        $(".nav-goods").css("display", "none");
    });
    $(".community").on("mouseenter", function () {
        $(".nav-goods").css("display", "none");
    })
    $(".text").focus(function () {
        $(".search-cont").css("borderColor", "#ff6700");
        $(".search").css("borderColor", "#ff6700");
        $(".pull-down").css("display", "block");
    })
    $(".text").blur(function () {
        $(".search-cont").css("borderColor", "#e0e0e0");
        $(".search").css("borderColor", "#e0e0e0");
        $(".pull-down").css("display", "none");
    })
    $(".pull-down li").hover(function () {
        $(".pull-down").css("display", "block");
    })
    $(".pull-down li").click(function () {
        var text = $(this).text()
        $(".text").val(text);
        $.ajax({
            type: "post",
            url: "../php/search.php",
            data: `title=${text}`,
            dataType: "json",
            success(data) {
                Cookie.setItem("messages", JSON.stringify(data.data), 7);
                location.href = "search.html";
            }

        })
    })

    var phoneId = Cookie.getItem("username");
    $.ajax({
        type: "post",
        url: "../php/quantityOfCommodity.php",
        data: {
            phoneId
        },
        success(data) {

            let dataCount = JSON.parse(data);
            // console.log(555, dataCount);
            var Count = dataCount.data;
            $(".count").html(Count.length);
        }
    });

    // 验证账号是否登陆
    var username = Cookie.getItem("username");
    if (username) {
        $(".local").html(username);
        $(".regist").html(`<a style="cursor: pointer;">退出</a>`);
        $(".local").css("color", "#b0b0b0");
        $(".regist").css("color", "#b0b0b0");
        $(".regist").on("click", function () {
            console.log(111);
            Cookie.setItem("username", "", -1);
            // location.href="./register.html";
            location.href = "./logn.html";
        })
    } else {
        $(".local").html(`<a href="logn.html" style="cursor: pointer;"  >登录</a>`);
        // $(".regist").css("display","block")
    }


})