$(function(){
	$("#jnBrand #jnBrandTab ul >li ").click(function(){
		$(this).addClass("chos").siblings().removeClass("chos");
		var index=$(this).index();
		showTab(index);
	});
	function showTab(index)
	{
		//index 0 1 2 3
		console.log(index);
		var obj=$("#jnBrandList");
		var rollWidth=obj.find("li").outerWidth()*4;
		obj.stop(true,false).animate({left:-rollWidth*index},1000);
	}
});
