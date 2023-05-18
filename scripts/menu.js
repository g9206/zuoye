$(function(){
	$(".nav li").hover(function(){
			$(this).find(".parentNav").show();
			
		},function(){
			
			$(this).find(".parentNav").hide();
			
		});
});
