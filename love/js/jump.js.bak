(function(){
  return wanghe ={
	  //login 只在 注册页面 使用
    login : function(elem,url){
      //elem 要获取到的用户名的值  
      //url  点完注册后要跳转到的地址
	 // 如果elem的标签是input
		if(elem.localName=="input"){
		// 获取 input 元素的值
		  elem=elem.value
		}
		//将获取到的值,在页面持续期间保存在变量 uname 中
		sessionStorage.setItem("uname",elem)
		//并将页面跳转到 url 页面
		location.href=url
    },
    index : function(elem,elem2,url,url2){
		//elem 是登录标签的元素
		//elem2 是注册标签的元素
		//url 是登录页面的url
		//url2 是注册页面的url
      var uname = sessionStorage.getItem("uname") //从 uname 中获取到值
	  //如果uname 不为空
      if(uname){
		// 将登录 元素的内容修改为 欢迎回来 uname
        elem.innerHTML=`<span> 欢迎回来： </span><span> ${uname} </span>` 
		// 将注册 元素的内容修改为 退出 并附一个id 以备点击事件
        elem2.innerHTML=`<a id='ff' href=""> 退出 </a>`
      }else{
		//如果为空 元素内容不变
        elem.innerHTML=`<a href=${url}>登录</a>`
        elem2.innerHTML=`<a id='elem' href="${url2}"> 注册 </a>`
      }
      //获取ff元素
      var ff=document.getElementById("ff")
	  // 如果找到了ff
      if(ff){
		// 创建点击事件
        ff.onclick= function (e){
		  // 阻止默认事件  防止页面执行跳转
          e.preventDefault();
		  // 清除 uname 元素
          sessionStorage.removeItem("uname");
		  // 将 元素内容改为 登录注册
          elem.innerHTML=`<a href=${url}>登录</a>`
          elem2.innerHTML=`<a id='elem' href="${url2}"> 注册 </a>`
        }
      }
    }
  }
})()

