$(()=>{
    let password_lock = false;
    // 验证手机号
    $(".phone-num").blur(function () {
        let num = /^1[3-9]\d{9}$/;
        if ($(this).val().trim().length === 0) {
            $(".tips").html("请输入手机号码").addClass("tipsColor");
        } else if (num.test($(this).val().trim()) === false) {
            $(".tips").html("手机号码格式错误").addClass("tipsColor");
        } else if (num.test($(this).val().trim())) {
            $(".tips").html("");
        }
        $.ajax({
            type:"post",
            url:"../php/checkPhone.php",
            data:`phone=${$(".phone-num").val()}`,
            dataType:"json",
            success(data){
                if (!data.error) {
                    $(".tips").html("");
                } else {
                    $(".tips").html("号码已存在请重新输入").addClass("tipsColor");
                }
            }
        })
    })
    // 验证密码
    $(".password").blur(function () {
        let mima = /^[0-9A-Za-z]{8,16}$/;
        if ($(this).val().trim().length === 0) {
            $(".tipsPassword").html("请输入密码").addClass("tipsPasswordColor");
        } else if (mima.test($(this).val().trim()) === false) {
            $(".tipsPassword").html("密码格式错误").addClass("tipsPasswordColor");
        } else if (mima.test($(this).val().trim())) {
            $(".tipsPassword").html("");
        }
    })
    // 验证两次密码是否正确
    $(".passwordRe").blur(function () {
        let mima = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if ($(this).val().trim().length === 0) {
            $(".tipsPasswordRe").html("请输入密码").addClass("tipsPasswordColor");
        } else if (mima.test($(this).val().trim()) === false) {
            $(".tipsPasswordRe").html("密码格式错误").addClass("tipsPasswordColor");
        } else if (mima.test($(this).val().trim())) {
            $(".tipsPasswordRe").html("");
        }
        if ($(".password").val() === $(".passwordRe").val()) {
            password_lock = true;
        } else {
            password_lock = false;
            return;
        }
    })
   
    $(".register").click(function(){
        if (!(password_lock)) {
            return;
        }
        $.ajax({
            type: "post",
            url: "../php/register.php",
            data: `phone=${$(".phone-num").val()}&password=${$(".password").val()}`,
            dataType: "json",
            success(data) {
                if (!data.error) {
                    location.href = "./logn.html";
                } else {
                    alert(data.msg)
                }
            }
        })
    })
})