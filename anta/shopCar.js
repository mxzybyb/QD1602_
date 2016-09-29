$(function(){

	ajax("get","data.json","",function(data){
		var arr = JSON.parse(data)._data;
		var html = "";
		for (var i = 0; i < arr.length; i++) {
			html += '<li class="goods_item"  ><div class="goods_pic"><img src="' + arr[i].img+'" alt=""></div>超<div class="goods_title"><p>【京东市】奥利奥软点小草莓</p></div><div class="sc"><div class="sc_btn" id="' + arr[i].id+'" >加入购物车</div></div></li>';
					
		}
		$(".img22 ul").html(html);

			$(".img22 ul").on("click", ".sc_btn", function(){
				//购物车数量增加
				var id = this.id;
				//判断是否有过cookie缓存
				var first = $.cookie("goods") == null ? true : false;
				var same = false; //判断是否有相同的商品
				if(first){
					//第一次添加的时候,建立json结构
					$.cookie('goods', '[{id:' + id +',num:1}]');
					$.cookie('first', "false");
				}else{
					var str = $.cookie("goods");
					var arr = eval(str); //eval(str); eval JQ的字符串转对象
					//遍历所有的对象,如果id相同,让该商品的数量递增。
					for(var i in arr){
						if(arr[i].id == id){
							arr[i].num = arr[i].num + 1; //添加数量
							var cookieStr = JSON.stringify(arr);
							$.cookie('goods', cookieStr);
							same = true;
						}
					}

					//如果id不同,添加该商品
					if(!same){
						var obj = {id:id,num:1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr);
					}
				}
			
			});

			$("#shopCar").click(function(){
				var url = "sCar.html"; 
				url = url + "?shopCar=" + $.cookie("goods")
				open(url, "shopCar");
			})

	})














	// $.ajax({
	// 			url: "data.json",
	// 			type: "GET",
	// 			success: function(data){
	// 				var html = "";
	// 				for(var i = 0; i < data.length; i++){
	// 					html += '<li class="goods_item"  ><div class="goods_pic"><img src="' + data[i].img+'" alt=""></div>超<div class="goods_title"><p>【京东市】奥利奥软点小草莓</p></div><div class="sc"><div class="sc_btn" id="' + data[i].id+'" >加入购物车</div></div></li>';
	// 				}
	// 				$(".img22 ul").html(html);
	// 			}
	// 		});
});