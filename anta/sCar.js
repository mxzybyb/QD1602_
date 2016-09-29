$(function(){
	

	function sc_msg(){
		ajax("get","data.json","",function(data){
			var arr = JSON.parse(data)._data;
			var sc_str = $.cookie("goods");
			if(sc_str){
				var sc_obj = eval(sc_str);
				var html = "";
				for(var i sc_obj){
					
				}
			}
		});
	}



})
	


