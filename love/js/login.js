$(function(){ 
  //1.发送ajax请求
  var phone;
  var pwd;
  var pyz;
  var wyz;

  
  $("#phone").blur(function(){
    phone = $(this).val()
    var reg=/^1[3-9]\d{9}$/
    if(!reg.test(phone)){
      $("#info").html("请输入合法手机号").addClass("info_e")
      pyz=0
    }else{
      $("#info").removeClass("info_e")
      pyz=1
    }
    console.log(pyz)
  }).keyup(function(e){
    if(e.keyCode===13){
      $("#aaa1").click()
    }
  })
  
  $("#pwd").blur(function(){
    pwd = $(this).val()
    var reg=/^\w{6,18}$/
    if(!reg.test(pwd)){
      $("#info").html("请输入6~18个字符以内的字母、数字或下划线的组合").addClass("info_e")
      wyz=0
    }else{
      $("#info").removeClass("info_e")
      wyz=1
    }
    console.log(wyz)
  }).keyup(function(e){
    if(e.keyCode===13){
      $("#aaa1").click()
    }
  })
  $("#aaa1").click(function(){
    console.log("密码:"+wyz)
    console.log("手机号"+pyz)
    if(wyz==1&&pyz==1){
      $.ajax({
        url:"http://127.0.0.1:3000/login",
        type:"get",
        data:{
          phone,
          pwd
        },
        //返回结果类型：
        dataType:"json",//自动将JSON字符串执行JSON.parse(),转为js中的数组和对象,可以直接使用,
        success: function(res) {
          console.log(res.data[0].name)
          var name = res.data[0].name
          if(res.code==1){
            
            sessionStorage.setItem("uname",name)
            location.href="http://127.0.0.1:3000/product.html"
            console.log(123);
            //location.href="http://127.0.0.1:3000/product.html";
          }else{
            alert("用户名或密码有误")
          }
        }
      })
    }else{
      $("#info").html("手机号或密码格式有误或未填写").addClass("info_e")
    }
  })
})