$(function(){
    $.ajax({
        url:"title.html",
        type:"get",
        success:function(header){
            $(header).replaceAll("header")
            $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head")
            var lg = document.getElementById("lg")
            // console.log(lg)
            var zc = document.getElementById("zc")
            // console.log(zc)
			//使用wanghe.index
            wanghe.index(lg,zc,"http://127.0.0.1:3000/login.html","http://127.0.0.1:3000/reg.html")
        }
    })
})
