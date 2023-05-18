$(function(){
		//当搜索框获得焦点，清空，失去焦点，返回默认值
		$("#inputSearch").focus(function(){
			$(this).addClass("focus");
			if($(this).val()==this.defaultValue)
				$(this).val('');
		} ).blur(function(){
			
			$(this).addClass("focus");
			if($(this).val()=='')
				$(this).val(this.defaultValue);
			
		});
});