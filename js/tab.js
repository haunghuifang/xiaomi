$(() => {
    $.ajax({
        type: "get",
        url: "../php/tab-nav.json",
        dataType: "json",
        success(tabData) {
            /* 商品选项卡 */
            let secNav_goods = tabData.map(function(e) {
                let oDiv = e.arr.map(function(Ele1) {
                    let oLi = Ele1.map(function(Ele2) {
                        return `
                            <li class="clearfix">
                                <img src=${Ele2.img} alt="">
                                <span>${Ele2.txt}</span>
                            </li>
                            `
                    }).join("");
                    return `<ul>${oLi}</ul>`
                }).join("");
                return `<div class="subnav_goods_box">${oDiv}</div>`
            }).join("");
            $(".subnav_goods").html(secNav_goods);

            /* 添加鼠标移入移出事件 */
            $(".subnav").mouseenter(function() {
                $(".subnav_goods").css("display", "block");
                $(".subnav_goods").mouseenter(function() {
                    $(this).css("display", "block");
                })
                $(".subnav_goods").mouseleave(function() {
                    $(this).css("display", "none");
                })

            })
            $(".subnav").mouseleave(function() {
                $(".subnav_goods").css("display", "none");
            })
            $(".all-goods").mouseenter(function() {
                $(".subnav").css("display", "block");
            })
            $(".subnav_goods_box").mouseleave(function() {
                $(".all-nav").css("display", "none")
            })
            $(".subnav ul li").mouseenter(function() {
                $(".subnav_goods").css("z-index", "2");
                $(".subnav_goods_box").eq($(this).index()).show().siblings().hide()
            });

            $(".all-goods ").mouseleave(function() {
                $(".subnav_goods").css("z-index", "1");
                $(".subnav_goods_box").removeClass("block");
                $(".subnav_goods_box").hide();
            });
        }
    });


})