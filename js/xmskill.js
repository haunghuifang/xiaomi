$(function() {
    // 小米闪购
    // 一个变量记录一页的条数
    var dataCount = 4;
    // 记录下标索引
    var index = 0;
    aj();

    function aj() {
        $.ajax({
            type: "post",
            url: "../php/seckll.php",
            success(data) {
                let count = JSON.parse(data);
                let countData = count.data;
                secKill(countData);
            }
        });
    }
    // 渲染数据
    function secKill(data) {
        var data = data.slice(index * dataCount, index * dataCount + dataCount);
        let merchandise = data.map(function(ele) {
            return `
                <li>
                    <a href="../html/milletKill.html"  style="text-decoration: none;">
                        <div class="current">
                            <div class="pic">
                                <img src="${ele.src}" alt="">
                            </div>
                            <p>${ele.title}</p>
                            <span>${ele.desc}</span>
                            <i>${ele.price1}</i><del>${ele.price2}</del>
                        </div>
                    </a>
                </li>
            `
        }).join("");
        let html = `<ul>${merchandise}</ul>`;
        $(".commodity").html(html)
    }


    // 点击左按钮
    $(".jtz").on("click", function() {
            if (index >= 4) {
                index = 4;
            }
            index++;
            console.log(index);
            aj();
        });
        // 点击右按钮
        // console.log( $(".jty"));
    $(".jty").on("click", function() {
        if (index <= 0) {
            index = 0;
        }
        index--;
        aj();
    });
    // 定时器
    setInterval(function () {
        if (index >= 4) {
            index = 0
        }
        index++;
        aj();
    }, 5000);

})