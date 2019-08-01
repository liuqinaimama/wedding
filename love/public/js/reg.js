$(function(){ 
  //1.发送ajax请求
  var phone;
  var pwd;
  var name;
  var pyz;
  var wyz;
  var nyz;

  
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
  $("#pwd").blur(function(){
    upwd = $(this).val()
    var reg=/^\w{6,18}$/
    if(!reg.test(upwd)){
      $("#info").html("请输入6~18个字符以内的字母、数字或下划线的组合").addClass("info_e")
      wyz=0
    }else{
      $("#info").removeClass("info_e")
      wyz=1
    }
    console.log(wyz)
  }).keyup(function(e){
    if(e.keyCode===13){
      $("#a1").click()
    }
  })
  $("#name").blur(function(){
    name = $(this).val()
    var reg=/^[\u4e00-\u9fa5]{2,10}$/
    if(!reg.test(name)){
      $("#info").html("请输入2~10个汉字").addClass("info_e")
      nyz=0
    }else{
      $("#info").removeClass("info_e")
      nyz=1
    }
    console.log(wyz)
  }).keyup(function(e){
    if(e.keyCode===13){
      $("#a1").click()
    }
  })
  $("#a1").click(function(){
    console.log("密码:"+wyz)
    console.log("手机号"+pyz)
    console.log("名字"+nyz)
    if(wyz==1&&pyz==1&&nyz==1){
      $.ajax({
        url:"http://127.0.0.1:3000/reg",
        type:"get",
        data:{
          phone,
          upwd,
          name
        },
        //返回结果类型：
        dataType:"json",//自动将JSON字符串执行JSON.parse(),转为js中的数组和对象,可以直接使用,
        success: function(res) {
          var name = res.data
          if(res.code==1){
            sessionStorage.setItem("uname",name)
            location.href="http://127.0.0.1:3000/product.html"
            console.log(123);
            //location.href="http://127.0.0.1:3000/product.html";
          }
        }
      })
    }else{
      $("#info").html("手机号或密码或姓名格式有误或未填写").addClass("info_e")
    }
  })
})