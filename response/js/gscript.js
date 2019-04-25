// JavaScript Document


//Loading::::::::::::::::::::::::::::::::
function loading(){
	$(".entire").css("display","block")	
	$(".preloader img").fadeOut({duration:400,easing:'easeOutQuad',queue:false})
	setTimeout(function(){
	$(".preloader h1").fadeOut({duration:400,easing:'easeOutQuad',queue:false})
	$(".preloader h1").animate({marginTop:'20px'},{duration:400,easing:'easeOutQuad',queue:false})}
	,500)
	setTimeout(function(){
	$(".preloader p").delay(2200).fadeOut({duration:400,easing:'easeOutQuad',queue:false})
	$(".preloader p").animate({marginTop:'110px'},{duration:400,easing:'easeOutQuad',queue:false})}
	,1000)
	
	setTimeout(function(){	
	$(".preloader").animate({height:'0px'},{duration:1000,easing:'easeOutQuad',queue:false})}
	,800)
	
	setTimeout(function(){
	$(".preloader").css("display","none")}
	,1800)

}

   var preloadc = 1000+800
  
$(window).load(function() {
		
		
		$(".logo").css("display","none")
		$("header nav").css("display","none")
		$(".bg-1").css("display","none")
		$(".testimonials").css("display","none")
		$(".testimonials").css("margin-top","20px")
		
		
		
	

		$(".bg-1").css("display","block")
		$(".testimonials").css("display","block")
		$(".testimonials").css("margin-top","0px")
		$(".bg-1").css("margin-left","-84px")

 
		$(".bg-1").css("display","none")
		$(".testimonials").css("display","none")
		$(".testimonials").css("margin-top","20px")
		setTimeout(function(){
		$(".logo").animate({marginTop:'15px'},{duration:400,easing:'easeOutQuad',queue:false})
		$(".logo").fadeIn({duration:400,easing:'easeOutQuad',queue:false})
		},preloadc+500)
		setTimeout(function(){
		
		$("header nav").fadeIn({duration:400,easing:'easeOutQuad',queue:false})
		},preloadc+800)
		
		setTimeout(function(){
		$(".bg-1").animate({marginLeft:'0px'},{duration:400,easing:'easeOutQuad',queue:false})
		$(".bg-1").fadeIn({duration:400,easing:'easeOutQuad',queue:false})
		},preloadc+800)
		
		setTimeout(function(){
		$(".testimonials").animate({marginTop:'0px'},{duration:400,easing:'easeOutQuad',queue:false})
		$(".testimonials").fadeIn({duration:400,easing:'easeOutQuad',queue:false})
		},preloadc+1200)





	
	});
	
	



