(function () {
    // 获取元素
    var title = document.getElementById("title");
    var title1 = document.getElementById("title1");
    var title2 = document.getElementById("title2");
    var title3 = document.getElementById("title3");
    var price1 = document.getElementById("money1");
    var price2 = document.getElementById("money2");
    var price3 = document.getElementById("money3");
    var price = document.getElementById("money");
    var picszs = document.getElementById("picszs");
    var shopCar = document.querySelector(".shop-car");
    var sw1 = document.querySelector(".sw1");
    var sw2 = document.querySelector(".sw2");

    // 获取URL
    // 定义一个数组
    var allData = [];
    var arr = location.search.slice(1).split("&");
    var id = "";
    arr.forEach(function (value) {
        if (value.split('=')[0] === "id") {
            id = value.split('=')[1];
        }
    })
    // 根据id 发送ajax 问后台要数据 
    QF.get("../php/getProductInfoById.php", { id }, ({ error, data }) => {
        if (!error) {
            allData = data;
            // console.log(data);
            rende(data);
            
        }
    })

    function rende(data) {
        title.innerHTML = `${data.title}`;
        title1.innerHTML = `${data.title}`;
        title2.innerHTML = `${data.title}`;
        title3.innerHTML = `${data.title}   8GB+128GB 极夜黑`;
        price1.innerHTML = `${data.price}`
        price.innerHTML = `${data.price}`
        price2.innerHTML = `${data.price}`
        price3.innerHTML = `总计：${data.price}`
        shopCar.innerHTML = `<a href="javascript:;"data-id=${data.id}>加入购物车</a>`
        sw1.innerHTML = `
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
        `;
        sw2.innerHTML = `
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
            <div class="swiper-slide" style="background-image:url(${data.src})"></div>
        `;
        swFun();
    }
    // 改变喜欢得颜色
    let like = document.querySelector(".shop-like");
    var num = 2;
    like.onclick = function () {
        if (num === 1) {
            this.style.color = "white";
            num = 2;
        } else {
            this.style.color = "red";
            num = 1;
        }
    }


    // 加入购物车
    // 使用委托模式实现添加购物车点击功能
    // 获取.list元素
    let list = document.querySelector(".shop-car");

    // 添加点击事件
    list.onclick = function (e) {
        var goods_id = e.target.getAttribute('data-id');
        // console.log(goods_id);
        var cart_id = Cookie.getItem("username");
        // console.log(cart_id);
        $.ajax({
            type: "post",
            url: "../php/shopCar.php",
            data: {
                cart_id,
                goods_id,
            },
            dataType: "json",
            success(data) {
                console.log(1);
                if (!data.error) {
                    console.log(data.msg);
                } else {
                    console.log(data.msg);
                }
            }
        });
        window.location = "./shopcar.html";
    }

    function swFun(){
        var galleryTop = new Swiper('.gallery-top', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 10,
            loop: true,
            loopedSlides: 5, //looped slides should be the same   
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }  
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            touchRatio: 0.2,
            loop: true,
            loopedSlides: 5, //looped slides should be the same
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    }
})();