$(function(){
    $(".search").click(function(){
        var input=$(".text").val();
        $.ajax({
            type:"post",
            url:"../php/search.php",
            data:`title=${input}`,
            dataType:"json",
            success(data){
                Cookie.setItem("messages", JSON.stringify(data.data), 7);
                location.href ="search.html";
                
            }
        })
    })


})