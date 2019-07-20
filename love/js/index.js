/*专门支持index.html页面中所有功能的js文件*/
//当页面加载完成后，自动执行:
$(function(){
  //1. 发送ajax请求
  $.ajax({
    url:"http://127.0.0.1:3000/",
    type:"get",
    //data:,
    //返回结果的类型:
    dataType:"json",//——自动将json字符串执行JSON.parse()，转为js中的数组和对象，可直接使用
    success:function(products){
      console.log(products)
			var html="";
      //遍历products中最后三个商品: 
      for(var a of products){
        html+=`<a class="col-md-4 col-sm-12 my_m-b text-secondary" href="#">
        <div class="card my_img2">
            <div class="card-body p-0">
                <img class="w-100" src="${a.pic}" alt=""/>
                <p class="pl-3 pt-3 m-0">${a.title}</p>
                <p class="mt-1 pl-3">${a.adds}</p>
            </div>
        </div>
    </a>`
      }
      var aA=document.getElementById("a_for")
      aA.innerHTML=html
    }
  })
  $.ajax({
    url:"http://127.0.0.1:3000/aa",
    type:"get",
    //data:,
    //返回结果的类型:
    dataType:"json",//——自动将json字符串执行JSON.parse()，转为js中的数组和对象，可直接使用
    success:function(products_1){
      console.log(products_1)
      var html=""
      for(var d of products_1.slice(0,12)){
        html+=`<div class="col-md-4 col-sm-12 my_m-b">
        <div class="card">
            <div class="card-body p-0 modal-open">
                <img class="w-100 my_img" src="${d.pic}" alt=""/>
                <p class=" border-bottom p-3"><a class="text-dark" href="#">${d.title}</a></p>
                <div class="row">
                    <div class="col-7">
                        <p class="mt-1 my_pink pl-3">¥${d.price}起</p>
                    </div>
                    <div class="col-3 p-0">
                        <p class="mt-1">已售：${d.sold}</p>
                    </div>
                    <div class="col-2 p-0">
                        <a class="btn btn-sm btn-pink" href="#">预定</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
      }
      var divD=document.getElementById("div_for")
      console.log(divD)
      divD.innerHTML=html+`<div class="m-auto pb-3">
      <a class="btn btn-my_a d-block" href="">查 看 更 多</a>
  </div>`
      var html=""
      for(var df of products_1.slice(21,29)){

        html+=`<div class="col-md-4 col-sm-12 my_m-b">
        <div class="card">
            <div class="card-body p-0 modal-open">
                <img class="w-100 my_img" src="${df.pic}" alt=""/>
                <p class=" border-bottom p-3"><a class="text-dark" href="#">${df.title}</a></p>
                <div class="row">
                    <div class="col-7">
                        <p class="mt-1 my_pink pl-3">¥${df.price}起</p>
                    </div>
                    <div class="col-3 p-0">
                        <p class="mt-1">已售：${df.sold}</p>
                    </div>
                    <div class="col-2 p-0">
                        <a class="btn btn-sm btn-pink" href="#">预定</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
      }
      var divF=document.getElementById("divFor")
      divF.innerHTML=html+`<div class="col-md-4 col-sm-12">
      </div>
      <div class="m-auto pb-3">
          <a class="btn btn-my_a d-block" href="">查 看 更 多</a>
      </div>`
    }
  })
})