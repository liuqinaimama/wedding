$(function(){
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(header){
            $(header).replaceAll("footer")
            $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head")
        }
    })
})
