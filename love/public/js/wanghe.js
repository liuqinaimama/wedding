(function(){
  return wanghe ={
    login : function(btn,elem,url){
      //btn 触发事件的元素
      //elem 用户名
      //url
      btn.onclick = function(){
        if(elem.localName=="input"){
          elem=elem.value
        }
        sessionStorage.setItem("uname",elem)
        location.href=url
      }
    },
    index : function(elem,elem2,url,url2){
      var uname = sessionStorage.getItem("uname")
      if(uname){
        elem.innerHTML=`<span> 欢迎回来： </span><span> ${uname} </span>` 
        elem2.innerHTML=`<a id='ff' href=""> 退出 </a>`
      }else{
        elem.innerHTML=`<a href=${url}>登录</a>`
        elem2.innerHTML=`<a id='elem' href="${url2}"> 注册 </a>`
      }
      
      var ff=document.getElementById("ff")
      if(ff){
        ff.onclick= function (e){
          e.preventDefault();
          sessionStorage.removeItem("uname");
          elem.innerHTML=`<a href=${url}>登录</a>`
          elem2.innerHTML=`<a id='elem' href="${url2}"> 注册 </a>`
        }
      }
    }
  }
})()
