; (function () {
    // 获取cookie中 isLogin 字段 如果能得到 说明 登录过 如果得不到 说明没有登陆过  跳回登录页面
    var cart_id = Cookie.getItem("username");
    // let isLogin = QF.getCookie("isLogin")
    if (!cart_id) {
        alert("请登录")
        setTimeout(function () {
            location.href = "../html/logn.html"
        }, 500)
    }
})();