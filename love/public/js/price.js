$(function(){
  $("#btn1").click(function(e){
    var aid = e.target.dataset.aid
    $.ajax({
      url:"http://127.0.0.1:3000/bb",
      type:"get",
      data:{aid},
      //返回结果的类型:
      //dataType:"json",//——自动将json字符串执行JSON.parse()，转为js中的数组和对象，可直接使用
      success:function(products_1){
        console.log(products_1)
        var html=""
        for(var d of products_1){
          html+= `<div class="col-md-4 col-sm-12 my_m-b">
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
         var rows = document.getElementById("rows")
         // console.log(rows)
         rows.innerHTML = html 
       
      }
    })
  })
   
  // $.ajax({
  //   url:"http://127.0.0.1:3000/login",
  //   type:"get",
  //   //data:,
  //   //返回结果的类型:
  //   //dataType:"json",//——自动将json字符串执行JSON.parse()，转为js中的数组和对象，可直接使用
  //   success:function(products_1){
  //     console.log(products_1)
  //   }
  // })
  $("#btn").click(function(){
    $.ajax({
      url:"http://127.0.0.1:3000/aa",
      type:"get",
      //data:,
      //返回结果的类型:
      dataType:"json",//——自动将json字符串执行JSON.parse()，转为js中的数组和对象，可直接使用
      success:function(products_1){
        console.log(products_1)
        var html=""
        for(var d of products_1.slice(0,21)){
        html+= `<div class="col-md-4 col-sm-12 my_m-b">
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
        var rows = document.getElementById("rows")
        // console.log(rows)
        rows.innerHTML = html 
      }
    })
  })
  $("#btn").click()
   
})