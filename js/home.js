// JavaScript Document

$(document).ready(function(){
	
	//讓選單正確顯示(不會造成頁面跳動)
	var wh=$(window).width();	
	$(window).on('load','resize',function(){
		if(wh>=768){
			$("nav").show();
		}else{
			$("nav").hide();
		}
	});
	
	$(".menu").click(function(){
		$("nav").slideToggle();
	});
	
	
	
	
	
});