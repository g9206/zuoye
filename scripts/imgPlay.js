
$(function(){
   var curIndex=0;
   var theTimer=null;
   function showImg(){
   	console.log(curIndex);
   	if(curIndex==5)
   	curIndex=0;
   	$("#JS_imgWrap").find("img").eq(curIndex).stop(true,true).fadeIn().siblings().fadeOut();
   	
     $(".last").css("background-color","pink").eq(curIndex).show().css("background-color","lightblue");
   	curIndex++;
   }
      $("#jnImageroll").hover(function(){
      	if(theTimer!=null);
      	clearInterval(theTimer);
      },function(){
      	theTimer=setInterval(showImg,1000);
      	
      });
      theTimer=setInterval(showImg,1000);
      
});


