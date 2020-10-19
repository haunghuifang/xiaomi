$(function () {
    // 手机
    // 一个变量记录一页的条数
    var dataCount = 8;
    // 记录下标索引
    var index = 0;
    $.ajax({
        type: "post",
        url: "../php/phone.php",
        success(data) {
            let count = JSON.parse(data);
            let countData = count.data;
            phone(countData);
        }
    });
    // 渲染数据
    function phone(data) {
        var data = data.slice(index * dataCount, index * dataCount + dataCount);
        let phonedise = data.map(function (ele) {
            return `
            <li>
            <a href="../html/detail.html?id=${ele.title}" style="text-decoration: none;">
                <div class="phoneProductsPic">
                    <img src="${ele.src}" alt="">
                </div>
                <h3>${ele.title}</h3>
                <span>${ele.title}</span>
                <p>${ele.price}</p>
            </a>
        </li>
            `
        }).join("");
        $(".products").html(phonedise)
    }

    // 家电

    // // 一个变量记录一页的条数
    // var datapage = 8;
    // 页数
    var num = 1;
    aja();
    function aja() {
        $.ajax({
            type: "post",
            url: "../php/pageData.php",
            success(data) {
                let count = JSON.parse(data);
                let countData = count.data;
                // console.log(countData);
                appliances(countData);
                intellect(countData);
                speaker(countData);
                accessor(countData);
                ambitus(countData);
            }
        });
    }

    // 渲染数据
    function appliances(data) {
        // console.log(data);
        var data = data.slice(num * dataCount, num * dataCount + dataCount);
        let homeAudio = data.map(function (ele) {
            return `
            <li>
            <a href="../html/detail.html?id=${ele.title}" style="text-decoration: none;">
                <div class="audioPic">
                    <img src="${ele.src}" alt="">
                </div>
                <h3>${ele.title}</h3>
                <span>${ele.title}</span>
                <p>${ele.price}</p>
            </a>
        </li>
        `
        }).join("");
        $(".homeAudio").html(homeAudio)
    }

    $(".hot li").hover(function () {
        if ($(this).index() === 1) {
            $(this).addClass("active").siblings().removeClass("active")
            num = 2;
        } else if (($(this).index() === 0)) {
            num = 1;
            $(this).addClass("active").siblings().removeClass("active")
        }
        aja();
    })

    // 智能

    var num1 = 2;
    // aja();
    // 渲染数据
    function intellect(data) {
        // console.log(data);
        var data = data.slice(num1 * dataCount, num1 * dataCount + dataCount);
        let intellect = data.map(function (ele) {
            return `
            <li>
            <a href="../html/detail.html?id=${ele.title}" style="text-decoration: none;">
                <div class="audioPic">
                    <img src="${ele.src}" alt="">
                </div>
                <h3>${ele.title}</h3>
                <span>${ele.title}</span>
                <p>${ele.price}</p>
            </a>
        </li>
        `
        }).join("");
        $(".intellect").html(intellect)
    }

    $(".trip li").hover(function () {
        if ($(this).index() === 1) {
            $(this).addClass("active").siblings().removeClass("active")
            num1 = 3;
        } else if (($(this).index() === 0)) {
            num1 = 2;
            $(this).addClass("active").siblings().removeClass("active")
        } else if (($(this).index() === 2)) {
            num1 = 4;
            $(this).addClass("active").siblings().removeClass("active")
        }
        aja();
    })



    // 搭配

    var num2 = 3;
    // 渲染数据
    function speaker(data) {
        // console.log(data);
        var data = data.slice(num2 * dataCount, num2 * dataCount + dataCount);
        let headset = data.map(function (ele) {
            return `
            <li>
            <a href="../html/detail.html?id=${ele.title}" style="text-decoration: none;">
                <div class="audioPic">
                    <img src="${ele.src}" alt="">
                </div>
                <h3>${ele.title}</h3>
                <span>${ele.title}</span>
                <p>${ele.price}</p>
            </a>
        </li>
        `
        }).join("");
        $(".headset").html(headset)
    }

    $(".loudspeaker li").hover(function () {
        if ($(this).index() === 1) {
            $(this).addClass("active").siblings().removeClass("active")
            num2 = 4;
        } else if (($(this).index() === 0)) {
            num2 = 3;
            $(this).addClass("active").siblings().removeClass("active")
        }
        aja();
    })

    // 配件
    var num3 = 0;
    // 渲染数据
    function accessor(data) {
        // console.log(data);
        var data = data.slice(num3 * dataCount, num3 * dataCount + dataCount);
        let match = data.map(function (ele) {
            return `
            <li>
            <a href="../html/detail.html?id=${ele.title}" style="text-decoration: none;">
                <div class="audioPic">
                    <img src="${ele.src}" alt="">
                </div>
                <h3>${ele.title}</h3>
                <span>${ele.title}</span>
                <p>${ele.price}</p>
            </a>
        </li>
        `
        }).join("");
        $(".match").html(match)
    }

    $(".accessories li").hover(function () {
        if ($(this).index() === 1) {
            $(this).addClass("active").siblings().removeClass("active")
            num3 = 1;
        } else if (($(this).index() === 0)) {
            num3 = 0;
            $(this).addClass("active").siblings().removeClass("active")
        }
        aja();
    })


    // 周边
    var num4 = 4;
    // 渲染数据
    function ambitus(data) {
        // console.log(data);
        var data = data.slice(num4 * dataCount, num4 * dataCount + dataCount);
        let rim = data.map(function (ele) {
            return `
              <li>
              <a href="../html/detail.html?id=${ele.title}" style="text-decoration: none;">
                  <div class="audioPic">
                      <img src="${ele.src}" alt="">
                  </div>
                  <h3>${ele.title}</h3>
                  <span>${ele.title}</span>
                  <p>${ele.price}</p>
              </a>
          </li>
          `
        }).join("");
        $(".rim").html(rim)
    }

    $(".ambitus li").hover(function () {
        if ($(this).index() === 1) {
            $(this).addClass("active").siblings().removeClass("active")
            num4 = 5;
        } else if (($(this).index() === 0)) {
            num4 = 4;
            $(this).addClass("active").siblings().removeClass("active")
        }
        aja();
    })

    //   侧边导航栏图片显示
    $(".side .tuPic").mouseleave(function () {
        $(".app").css("display", "none")
    })
    $(".side .tuPic").mouseenter(function () {
        $(".app").css("display", "block")
    });

    $(window).on("scroll", function () {
        // 获取页面的卷动值 获取页面高度 获取视口高度 并计算
        var scrollTop = $(window).scrollTop();
        var xm = $(".xm").offset().top;
        if (scrollTop >= xm) {
            $(".returnTop").css("display", "block")
        } else {
            $(".returnTop").css("display", "none")
        }
    })
    // 返回顶部
    $(".returnTop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500);
    })

})
