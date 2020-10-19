$(() => {
    // 定义每页多少个数据
    var countData = 9;
    // 定义当前页码
    var pageData = 1;
    // 总共页数
    var num = 0;
    // 定义一个数组
    var allData = [];
    aja();
    function aja() {
        $.ajax({
            type: "get",
            url: "../php/pageData.php",
            dataType: "json",
            success(tabData) {
                /* 商品选项卡 */
                allData = tabData.data;
                // console.log(allData);
                num = Math.ceil(allData.length / 9);
                render(allData);
                page(pageData);
            }
        })
    }

    function render(data) {
        var data = data.slice(pageData * countData, pageData * countData + countData);
        let oLi = data.map(function (ele) {
            return `
                    <li>
                <a href="../html/detail.html?id=${ele.title}" style="text-decoration: none;">
                    <div class="showImg">
                        <img src=${ele.src} alt="">
                    </div>
                    <div class="showMsg">
                        <h3>${ele.title}</h3>
                        <p>${ele.title}</p>
                        <span>${ele.price}</span>
                        <i>查看</i>
                    </div>
                </a>
            </li>
                `
        }).join("");
        $(".demo").html(oLi);
    }

    // 分页器

    function page(pageData) {
        let str = `<li>
        <a aria-label="Previous">
            <span class='leftBtn' aria-hidden="true">&laquo;</span>
        </a>
    </li>`
        // 判断但前页
        if (pageData <= num) {
            for (var i = 0; i < num; i++) {
                str += `<li><a class='num'>${i + 1}</a></li>`;
            }
        } else {
            var end = pageData + 4 > num ? num : pageData + 4;
            for (var i = pageData - 6; i < end; i++) {
                str += `<li><a class='num'>${i + 1}</a></li>`;
            }
        }
        str += ` <li>
        <a  aria-label="Next">
            <span class='rightBtn' aria-hidden="true">&raquo;</span>
        </a>
    </li>`
        $(".pagination").html(str);
    }

    // 添加点击事件
    $(".pagination").on("click", ".leftBtn", function () {
        console.log(77);
        pageData--;
        // 边界判定
        if (pageData < 0) {
            pageData = 0;
            return;
        }
        // 截取数据
        var data = allData.slice(pageData * countData, pageData * countData + countData);
        // 渲染数据
        // console.log(pageData , countData, pageData , countData , countData);
        render(data);
        page(pageData);
        aja();
    })
    $(".pagination").on("click", ".rightBtn", function () {
        console.log(66);
        pageData++;
        // 判定边界
        if (pageData > num) {
            pageData = num;
            return;
        }
        // 截取数据
        var data = allData.slice(pageData * countData, pageData * countData + countData);
        // 渲染数据
        render(data);
        page(pageData);
        aja();
    })

    $(".pagination").on("click", ".num", function () {
        console.log(55);
        if (pageData === $(this).text() - 1) {
            return;
        }
        // 当前页变为 点击的按钮的页数 -1
        pageData = $(this).text() - 1;
        // 截取数据
        var data = allData.slice(pageData * countData, pageData * countData + countData);
        // 渲染数据
        render(data);
        page(pageData);
        aja();
    })
    $(".seckillList ul li").click(function(){
        // console.log($(this));
        $(this).addClass("active").siblings().removeClass("active");
    })
})