$(function(){
	var indexHistory=$.cookie("mySkinIndex");
	if(indexHistory!=null)
	{
		loadSkin(indexHistory);
	}
$("#skin li").click(function(){
	var index=$(this).index();
	loadSkin(index);
	$.cookie("mySkinIndex",index,{path:'/',expires:10});
});
     function loadSkin(index)
     {
     	$("#skin li").eq(index).addClass("selected").siblings().removeClass("selected");
	    $("#cssfile").attr("href","styles/skin/skin"+index+".css");
     }
});
