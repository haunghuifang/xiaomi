window.onload = function () {
    // 倒计时
    var hour = document.querySelector('.hour'); //小时的黑色盒子
    var minute = document.querySelector('.minute'); //分钟的黑色盒子
    var second = document.querySelector('.second'); //秒钟的黑色盒子
    var inputTime = +new Date('2020-12-20 16:00:00'); //返回的是用户输入时间的毫秒数
    // 2、开启定时器
    countDown(); //我们先调用一次这个函数，防止刷新页面有空白
    //开启定时器
    setInterval(countDown, 1000);

    function countDown() {
        var nowTime = +new Date(); //返回当前时间的总毫秒数
        var times = (inputTime - nowTime) / 1000; //times是剩余时间的总毫秒数
        var h = parseInt(times / 60 / 60 % 24); //时
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h; //把剩余的小时  小时黑色盒子
        var m = parseInt(times / 60 % 60); //分
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m; //把剩余的分钟  分钟黑色盒子
        var s = parseInt(times % 60); //当前秒
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;
    }
}