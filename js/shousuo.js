$(function () {
    var data = JSON.parse(Cookie.getItem("messages"))
    // console.log(data);
    if (data.length === 0) {
        console.log(55);
        $(".list").html( `
        
            <h3>抱歉，没有找到该商品，换个词搜搜吧</h3>
           
            `);
    }else{
        let product = data.map(function (ele) {
            return `
                <div class="listShop">
                <a href="../html/detail.html?id=${ele.title}" >
                <div class="listImg">
                        <img src="${ele.src}" alt="">
                    </div>
                    <h2>${ele.title}</h2>
                    <p>${ele.price}</p>
                    <div class="smallImg">
                        <img src="${ele.src}" alt="">
                    </div>
                    <span>新品</span><span>分期</span>
                    </div>
                    </a>
                    `
        }).join("");
        $(".list").html(product);
    }
   



})