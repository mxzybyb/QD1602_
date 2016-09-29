$(function(){
	ajax("get","anta.json","",function(data){
		var arr = JSON.parse(data)._data;
		for(var i = 0; i < arr.length; i++){
			var aLi = $("<li>");
			aLi.html(arr[i].title);
			aLi.appendTo($("#header1 ul"));
			aLi.css("width","76px").css("margin-top","12px").css("text-align","center").css("height","36px").css("color","#fff");	
        }
			$("#list li:eq(1)").hover(function(){
				$("#div1").css("display", "block");
			},function(){
				$("#div1").css("display", "none");
			});
			$("<h1 class = 'img'> <img  src ='../images/pb_92.jpg'></h1>").appendTo($("#div1"));  
            $("#div1").css("z-index","1").css("padding-top","16px");
         
			var arr1 = JSON.parse(data)._data1;
			for(var i=0 ; i < arr1.length;i++){
		       var li = $("<div>");
		       var span = $("<span class = 'span'></span>");
		       span.html(arr1[i].des);
		       var p = $("<p class = 'p'></p>")
		       p.html(arr1[i].title);
		       p.appendTo(li);
		       span.appendTo(li);	      
		       li.appendTo($("#div1"));
              
               $("#div1 h1").css("width","195px").css("height","310px").css("border-right","1px solid #f1f1f1");
               $("#div1 span:eq(4)").css("color","red");
				
               }
 			$("#list li:eq(2)").hover(function(){
			$("#div2").css("display", "block");
			},function(){
				$("#div2").css("display", "none");
			});
  				 $("#div2").css("z-index","1")
             $("<h2 class = 'img1'> <img src = '../images/lanqiu1 (2).jpg'></h2>").appendTo($("#div2")); 
              $("#div2").css("z-index","1")
             	var arr2 = JSON.parse(data)._data2;
             	for(var i=0;i < arr2.length;i++){
             		var li1 = $("<div>");
             		var span1 = $("<span class = 'span1'></span>");
             		span1.html(arr2[i].des);
             		var p1 = $("<p class = 'p1'></p>")
             		p1.html(arr2[i].title);
             		p1.appendTo(li1);
             		span1.appendTo(li1);
             		li1.appendTo($("#div2"));
              $("#div2").css("padding-top","16px");
                 $("#div2 span:eq(4)").css("color","red");
             	 $("#div2 h2").css("width","195px").css("height","310px").css("border-right","1px solid #f1f1f1");

             	}


              $("#list  li:eq(3)").hover(function(){
              $("#div3").css("display","block"); 

              },function(){

              	$("#div3").css("display","none");
			  });
              	 $("#div3").css("z-index","1")
              $("<h3 class = 'img2'> <img src = '../images/zq_92.jpg'</h3>").appendTo($("#div3"));
              var arr3 = JSON.parse(data)._data3;
              for(var i=0;i < arr3.length;i++){
              	var li2 = $("<div>");
              	var span2 = $("<span class = 'span2'></span>");
              	span2.html(arr3[i].des);
              	var p2 = $("<p class = 'p2'></p>")
              	p2.html(arr3[i].title);
              	p2.appendTo(li2);
              	span2.appendTo(li2);
              	li2.appendTo($("#div3"));
              	 $("#div3").css("padding-top","16px");
              	$("#div3 span:eq(5)").css("color","red").css("display","inline-block").css("margin-top","8px");
              	$("#div3 span:eq(4)").css("display","inline-block").css("margin-top","8px");
              	$("#div3 h3").css("width","195px").css("height","310px").css("border-right","1px solid #f1f1f1");
              }



			$("#list li:eq(4)").hover(function(){
				$("#div4").css("display", "block");
			},function(){
				$("#div4").css("display", "none");
			});
			$("<h4 class = 'img3'> <img  src ='../images/sz_83.jpg'></h4>").appendTo($("#div4"));  
			 $("#div4").css("z-index","1")
			var arr4 = JSON.parse(data)._data1;
			for(var i=0 ; i < arr4.length;i++){
		       var li3 = $("<div>");
		       var span3 = $("<span class = 'span3'></span>");
		       span3.html(arr4[i].des);
		       var p3 = $("<p class = 'p3'></p>")
		       p3.html(arr4[i].title);
		       p3.appendTo(li3);
		       span3.appendTo(li3);	      
		       li3.appendTo($("#div4"));
              $("#div4").css("padding-top","16px");
               $("#div4 h4").css("width","195px").css("height","310px").css("border-right","1px solid #f1f1f1");
               $("#div4 span:eq(4)").css("color","red");
           }
				


             $("#list li:eq(5)").hover(function(){
				$("#div5").css("display", "block");
			},function(){
				$("#div5").css("display", "none");
			});
              $("#div5").css("z-index","1")
            $("<h5 class = 'img4'> <img  src ='../images/hw_92.jpg'></h5>").appendTo($("#div5"));  
            var arr5 = JSON.parse(data)._data5;
			for(var i=0 ; i < arr5.length;i++){
		       var li4 = $("<div>");
		       var span4 = $("<span class = 'span4'></span>");
		       span4.html(arr5[i].des);
		       var p4 = $("<p class = 'p4'></p>")
		       p4.html(arr5[i].title);
		       p4.appendTo(li4);
		       span4.appendTo(li4);	      
		       li4.appendTo($("#div5"));
		         $("#div5").css("padding-top","16px");         
               $("#div5 h5").css("width","195px").css("height","310px").css("border-right","1px solid #f1f1f1");
               $("#div5 span:eq(4)").css("color","red");
           }




            $("#list li:eq(6)").hover(function(){
			$("#div6").css("display", "block");
			},function(){
				$("#div6").css("display", "none");
			});
             $("#div6").css("z-index","1")
            $("<h6 class = 'img5'> <img  src ='../images/xx_92 (2).jpg'></h6>").appendTo($("#div6"));
             $("#div6").css("padding-top","16px");  
            var arr6 = JSON.parse(data)._data6;
		    for(var i=0 ; i < arr6.length;i++){
		       var li5 = $("<div>");
		      
		       
		       var p5 = $("<p class = 'p5'></p>")
		       p5.html(arr6[i].title);
		       p5.appendTo(li5);
		            
		       li5.appendTo($("#div6"));
		   
		        


			

		        $("#pp0").find(".p5").css("font-weight","normal").css("display","inline").css("margin-top","4px").css("margin-right","4px").css("margin-bottom","4px");
		        $("#pp1").find(".p5").css("font-weight","normal").css("display","inline").css("margin-right","4px").css("color","#454545");
		        

		        $("#pp2").find(".p5").css("font-weight","normal").css("display","inline").css("color","#454545");
                $("#pp2").css("display","inline-block").css("width","360px");
		        $("#pp3").find(".p5").css("font-weight","normal").css("display","inline").css("margin-top","4px").css("margin-right","4px").css("margin-bottom","4px").css("float","left").css("width","27px");
		        $("#pp3").css("display","inline")
		        $("#pp4").find(".p5").css("font-weight","normal").css("display","inline").css("position","relative").css("left","257px").css("position","relative").css("top","-254px").css("")
		        $("#pp4").css("width","32px").css("height","17px");
		        $("#pp5").find(".p5").css("font-weight","normal").css("display","inline").css("position","relative").css("top","-14px").css("position","relative").css("left","63px")
		        $("#pp5").css("margin-top","10px").css("display","inline");
		        $("#pp6").find(".p5").css("font-weight","normal").css("display","inline").css("position","relative").css("left","235px").css("top","-185px")
		        $("#pp6").css("width","31px").css("height","20px")
		        $("#pp7").find(".p5").css("font-weight","normal").css("display","inline").css("position","relative").css("left","254px").css("top","-185px")
		        $("#pp7").css("width","46px").css("height","24px");
		        $("#pp8").find(".p5").css("font-weight","normal").css("display","inline").css("position","relative").css("left","303px").css("top","-185px")
		        $("#pp8").css("width","36px").css("height","18px")
		        $("#pp9").find(".p5").css("display","inline").css("font-weight","normal").css("color","#c6c6c6").css("position","relative").css("left","235px").css("top","-158px")
		        $("#pp9").css("width","27px").css("height","18px")
 				$("#pp10").find(".p5").css("font-weight","normal").css("display","inline").css("position","relative").css("left","253px").css("top","-158px")
 				$("#pp10").css("width","30px").css("height","20px")
 				$("#pp13").find(".p5").css("font-weight","normal").css("display","inline").css("position","relative").css("left","331px").css("top","-105px")
 				$("#pp13").css("width","99px").css("height","19px")
 				$("#pp12").find(".p5").css("font-weight","normal").css("display","inline").css("position","relative").css("left","237px").css("top","-105px")
 				$("#pp12").css("width","93px").css("height","19px")
 				$("#pp11").find(".p5").css("font-weight","normal").css("display","inline").css("position","relative").css("left","292px").css("top","-158px")
 				$("#pp11").css("width","38px").css("height","19px")
 				$("#pp14").find(".p5").css("display","inline").css("position","relative").css("left","238px").css("top","-125px")
 				$("#pp14").css("width","67px").css("height","20px");
 				$("#pp15").find(".p5").css("font-weight","normal").css("display","inline").css("position","relative").css("left","251px").css("top","-21px")
 				$("#pp15").css("width","105px").css("height","21px").css("display","inline")
                $("#pp17").css("width","67px").css("height","19px")
                $("#pp17").find(".p5").css("display","inline").css("position","relative").css("left","237px").css("top","-80px")
 				
		       var p5 = $("<p class = 'p5'></p>")
		       if( i == 1){
                li5.css("color","#c6c6c6").css("display","inline");
                li5.attr("id","pp0");
		       }
		       if ( i == 2){
		       	li5.attr("id","pp1").css("display","inline");
		       }
		       if( i == 3){
		       	li5.attr("id","pp2").css("display","inline");
		       }
		       if (i == 4){
 				li5.css("color","#c6c6c6").attr("id","pp3");

		       }
		       if (i == 5){
		       	 li5.attr("id","pp4");
		       }
		       if ( i == 6 ){
		       	li5.attr("id","pp5");
		       }
		       if (i == 8){
		       	li5.attr("id","pp6").css("color","#c6c6c6");
		       }
		       if(i == 9){
		       	li5.attr("id","pp7").css("font-weight","bolder");
		       }
		       if ( i == 10){
		       	li5.attr("id","pp8")
		       }
		       if (i == 11){
		       	li5.attr("id","pp9");
		       }
		       if (i == 12){
		       	li5.attr("id","pp10");
		       }
		       if(i == 13){
		       	li5.attr("id","pp11")
		       }
		       if (i == 15){
		       	li5.attr("id","pp12")
		       }
		       if (i == 14){
		       	li5.attr("id","pp14");
		       }
		       if(i == 16){
		       	li5.attr("id","pp13")
		       }
		       if(i == 17){
		       	li5.attr("id","pp17");
		       }
		       if(i == 18){
		       	li5.attr("id","pp15").css("display","none");
		       }
		      
		       
		      
		  
		   
		   $("#div6 h6").css("width","195px").css("height","310px").css("border-right","1px solid #f1f1f1");
                $("#div6 span:eq(11)").css("color","red");
                $("#div6 span:eq(12)").css("color","red");

 } 
            
            $("#pl5").css("position","relative");
 			$("#pl5 .span5").css("position","absolute").css("top","50px").css("left",0);
 			



 			$("#list li:eq(7)").hover(function(){
			$("#div7").css("display", "block");
			},function(){
				$("#div7").css("display", "none");
			});
			 $("<div class = 'img6'> <img  src ='../images/pj_92.jpg'></div>").appendTo($("#div7"));
			  $("#div7").css("z-index","1")
			 var arr7 = JSON.parse(data)._data7;
		      for(var i=0 ; i < arr7.length;i++){
		       var li6 = $("<div>");
		       var span5 = $("<span class = 'span5'></span>");
		       span5.html(arr7[i].des);
		       var p6 = $("<p class = 'p6'></p>")
		       p6.html(arr7[i].title);
		       p6.appendTo(li6);
		       span5.appendTo(li6);	      
		       li6.appendTo($("#div7"));
		        $("#div7").css("padding-top","16px");
		       if( i == 4){
		       	li6.attr("id","pl5").css("display","block")
		       	$("<p class = 'child'>儿童新品 &nbsp &nbsp 配件新品</p>").appendTo($("#pl5 .p6"));
		       	$(".child").css("font-weight","normal").css("margin-right","6px");
		       }
		       if( i == 5){
		       	li6.attr("id","pl6").css("display","block")
		       	$("<p class = 'child1'>领券满258减30 满399减50！</p>").appendTo($("#pl6 .p6"));
		       	$(".child1").css("font-weight","normal").css("color","red")
		       }
             
               $("#div7 td").css("width","195px").css("height","310px").css("border-right","1px solid #f1f1f1");
               $("#div7 span:eq(5)").css("color","red");
           }
				
         $("#list li:eq(8)").hover(function(){
			$("#div8").css("display", "block");
			},function(){
				$("#div8").css("display", "none");
			});
			 $("<td class = 'img7'> <img  src ='../images/et_731.jpg'></td>").appendTo($("#div8"));  
			  $("#div8").css("z-index","1")
			   $("#div8").css("padding-top","16px");
			 var arr8 = JSON.parse(data)._data8;
		      for(var i=0 ; i < arr8.length;i++){
		       var li7 = $("<div>");
		       var span6 = $("<span class = 'span6'></span>");
		       span6.html(arr8[i].des);
		       var p7 = $("<p class = 'p7'></p>")
		       p7.html(arr8[i].title);
		       p7.appendTo(li7);
		       span6.appendTo(li7);	      
		       li7.appendTo($("#div8"));

		       if(i == 0){
		       	li7.attr("id","pi").css("display","block")
		       	$("<p class = 'child'>男童鞋 &nbsp &nbsp 女童鞋</p>").appendTo($("#pi .p7"));
		       	$(".child").css("font-weight","normal").css("color","#c6c6c6")
		       }
		       if(i == 1){
		       	li7.attr("id","pi1").css("display","block")
		       	$("<p class = 'child2'>男童装 &nbsp &nbsp 女童装</p>").appendTo($("#pi1 .p7"));
		       	$(".child2").css("font-weight","normal").css("color","#c6c6c6")
		       }
		       if (i == 3){
		       		li7.attr("id","pi2").css("display","block")
		       	$("<p class = 'child3'>新品推荐 &nbsp &nbsp 小童系列 &nbsp &nbsp足球系列</p>").appendTo($("#pi2 .p7"));
		       	$(".child3").css("font-weight","normal").css("color","#c6c6c6")
		       }
		       if(i == 4){
		       	li7.attr("id","pi3").css("display","block")
		       	$("<p class = 'child4'>领券满258减30 满399减50！</p>").appendTo($("#pi3 .p7"));
		       	$(".child4").css("font-weight","normal").css("color","#c6c6c6").css("color","red");
		       }
		       	

			   $("#div8 td").css("width","195px").css("height","310px").css("border-right","1px solid #f1f1f1");
               $("#div8 span:eq(5)").css("color","red");

           }

});


});
   

/*====================header========================*/


/*=====================img1==================*/

$(function(){

 var abtn11 = $(".blow177 ol").find("li");
 /*alert(abtn11.length);*/
 var iNow11 = 0;
  abtn11.click(function(){
  	$(".img166").css("display","block");
    iNow11 = $(this).index();
    tab();
 
   })
  function tab(){
		
	return $(".img166").eq(iNow11).css("display","block");
   
}




$(".input12").click(function(){
	$(".input_44").css("display","none");
	$(".input_33").css("display","block");
})
$(".input_11").click(function(){
	$(".input_33").css("display","none");
	$(".input_44").css("display","block");
})


//  var abtn12 = $(".input");
//  /*alert(abtn11.length);*/

//   abtn12.click(function(){
//   	$(".input4").css("display","none");
//     iNow12 = $(this).index();
//     tab1();
 
//    })
//   function tab1(){
		
// 	return $(".input3").eq(iNow12).css("display","block");
   
// }




//  var abtn13 = $(".input1");
//    /*alert(abtn13.length);*/
//  var iNow13 = 0;
//   abtn13.click(function(){
//   	$(".input3").css("display","none");
//     iNow13 = $(this).index();
//     tab33();
 
//    })
//   function tab33(){
		
// 	return $(".input4").eq(iNow13).css("display","block");
   
// }





		var oS_box=document.getElementById('s_box');
		var oS_position=oS_box.children[2];
		var oS_mark=oS_box.children[0];
		var oB_box=document.getElementById('b_box');
		var oB_box_all=document.getElementById('b_box_all')
		oS_mark.onmouseover=function(){
			oS_position.style.display='block';
			oB_box.style.display='block';

		}
		oS_mark.onmouseout=function(){
			oS_position.style.display='none';
			oB_box.style.display='none';
		}

		oS_mark.onmousemove=function(event){
			var evt=event||window.event;

			var left=evt.offsetX-oS_position.offsetWidth/2;
			//console.log(left)
			
			if(left<0){
				left=0;
			}else if(left>oS_box.offsetWidth-oS_position.offsetWidth){
				left=oS_box.offsetWidth-oS_position.offsetWidth
			}
			//console.log(left)
			oS_position.style.left=left+'px';


			var top=evt.offsetY-oS_position.offsetHeight/2;
			if(top<0){
				top=0;
			}else if(top>oS_box.offsetHeight-oS_position.offsetHeight){
				top=oS_box.offsetHeight-oS_position.offsetHeight
			}
			//console.log(top)
			oS_position.style.top=top+'px';

			//移动的比例  把X值和Y值换算成比例;

			var proportionX=left/(oS_box.offsetWidth-oS_position.offsetWidth);
			var proportionY=top/(oS_box.offsetHeight-oS_position.offsetHeight);

			console.log(proportionX+':'+proportionY)

			//利用比例去算出大小不同的元素的偏移距离；

			oB_box_all.style.left=-proportionX*(oB_box_all.offsetWidth-oB_box.offsetWidth)+'px';

			oB_box_all.style.top=-proportionY*(oB_box_all.offsetHeight-oB_box.offsetHeight)+'px';

		}


		
	



});
   














/*=====================img1==================*/








