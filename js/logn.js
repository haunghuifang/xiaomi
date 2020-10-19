$(() => {
    /* 给标签添加鼠标划入事件 */
    $(".title li").hover(function () {
        $(this).addClass("titleColor").siblings().removeClass("titleColor")
    })

    // 给鼠标添加点击事件
    $(".title li").click(function () {
        $(this).addClass("titleColorSub").siblings().removeClass("titleColorSub")
        if ($(this).index() == 1) {
            $(".scan").addClass("cur").removeClass("cut");
            $(".message").addClass("cut").removeClass("cur");
            $(".lognSelect").addClass("cut").removeClass("cur");
        } else {
            $(".scan").addClass("cut").removeClass("cur");
            $(".message").addClass("cur").removeClass("cut");
            $(".lognSelect").addClass("cur").removeClass("cut");
        }
    })
    // 点击登录发送ajax请求
    $(".register").click(function(){
        let phoneID=$(".logInID").val();
        let password=$(".password").val();
        $.ajax({
            type:"post",
            url:"../php/login.php",
            data:`phoneID=${phoneID}&password=${password}`,
            dataType: "json",
            success(data){
                /* 登录成功 */
                if(!data.error){
                    Cookie.setItem("username", phoneID, 100000);
                    location.href ="home.html";
                }else{
                    /* 登录失败 */
                    $(".tips").html(data.data).addClass("tipsColor");
                    $(".message input").eq(0).addClass("inputColor")
                }
            }
        })
    })
    setTimeout(function(){
        $("input").click(function(){
            $(".tips").html("");
            $(".message input").eq(0).removeClass("inputColor")
    })
    },500)
    


    

})