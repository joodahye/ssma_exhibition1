$(document).ready(function(){

    /*메뉴(햄버거클릭)*/
    $("#head button").click(function(){
        
        $("#menu").stop().animate({right: 0}, 1200,function(){
            if($("#menu").css("right")== "0"){
                $("#menu button span").html("menu");
            }else{
                $("#menu button span").html("close");
            }
					});
					
					
          
						$("#menu button").click(function(){
						$("#menu").stop().animate({right:-400},1200,function(){
            if($("#menu").css("right")== "-200"){
                $("#menu button span").html("close");
            }else{
                $("#menu button span").html("menu");
						}
					});  
       
			});
	});
	

	/*메뉴안의 목록클릭*/
	$("#navTop li a").click(function(){
		$("#insideNav").stop().slideToggle();
	});
	
			/*메뉴안의 목록클릭*/
			$(".w1>a").click(function(){
				//$("this").css("z-index","-1");
				$(".w1>ul").stop().slideToggle();
				//$(".w1 ul li a").css("z-index","100");
			});
			$(".w1 ul li").click(function(){
				$(this).css("font-weight","bold");
			});
			
			$(".w2 a").click(function(){
				$(".w2>ul").stop().slideToggle();
			});
			
			$(".w2 ul li").click(function(){
				$(this).css("font-weight","bold");
				
			});
		
			
			
	
		
});//끝


