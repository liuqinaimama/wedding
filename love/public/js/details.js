var $ulImgs=$("#preview ul");
var $mImg=$("#preview>div>img");
var $lgDiv=$("#div-lg");
var $btnRight=$ulImgs.parent().next();
var $btnLeft=$ulImgs.parent().prev();

var moved=0;
// $btnRight.click(function(){
//   if($btnRight.is(":not(.disabled)")){
//   moved++;
//   $ulImgs.css("margin-left",-78*moved);
//   if(moved==li.length-4){
//       $btnRight.addClass("disabled");//就禁用
//   }
//   $btnLeft.removeClass("disabled");
//   }
// })
$btnLeft.click(function(){
  if($btnLeft.is(":not(.disabled)")){
  moved--;
  $ulImgs.css("margin-left",-78*moved);
  if(moved==0){
      $btnLeft.addClass("disabled");//就禁用
  }
  $btnRight.removeClass("disabled");
  }
})

  //3. 鼠标进入每张小图片，更换中图片和大图片
  //利用冒泡，将鼠标进入事件绑定在父元素<ul>上，只有当进入<ul>下的<img>时，才允许触发事件
$ulImgs.on("mouseenter","img",function(){
  //获得当前进入的img
  var $img=$(this);
  //设置mImg的src和lgDid的background-image
  //从当前img身上获得缓存在自定义属性data-md中的中图片路径
  var src=$img.attr("data-md");
  console.log(src)
  //设置mImg元素的src为src
  $mImg.attr({src});
  //从当前img身上获得缓存在自定义属性data-lg中的大图片路径
  var backgroundImage=
  `url(${$img.attr("data-lg")})`
  console.log(backgroundImage)
  //设置大图片div的背景图片为大图片路径
  $lgDiv.css({backgroundImage});
  console.log(2)
})

//4. 鼠标进入中图片，显示遮罩层并跟随鼠标移动
var $mask=$("#mask")//半透明黄色遮罩层
var $smask=$("#super-mask")//全透明同位置等大小的上层保护层div，保护下层的mImg和mask

//当鼠标进出上层保护层div时，让遮罩层mask和大图片lgdiv切换显示隐藏
$smask.hover(function(){
	$mask.toggleClass("d-none")
	$lgDiv.toggleClass("d-none")
  //设置大图片div的背景图片为大图片路径
  $lgDiv.css({backgroundImage});
})
//当鼠标在supermask上移动时，修改mask的位置
$smask.mousemove(function(e){
  //mask的left和top始终等于鼠标距离事件所在的上层div边缘的就离，减，mask大小的一半。因为鼠标始终在mask的中心点
	
  var left=e.offsetX-88;
  var top=e.offsetY-88;
  //防止mask的left和top从上，下，左，右四个方向超出去。如果超出，就拉回来。
  if(left<0) left=0; 
  else if(left>176) left=176;
  if(top<0) top=0; 
  else if(top>89) top=89;
  //实时设置mask的位置为计算好的left和top位置
  $mask.css({top,left})
      //根据mask的位置，修改lgDiv的背景图片位置。
      //因为大图片大小是中图片的16/7倍，所以，大图片背景移动的距离，是mask移动距离的16/7倍。
      //因为大图片背景图片的位置与mask移动的方向相反，所以，两个值都为负数
  $lgDiv.css(
    "background-position",
    `-${left*640/354}px -${top*480/256}px`
  )
})
