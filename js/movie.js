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
	
	
	/*banner*/
	$(window).on('load resize', function(){
	bannerresize();
	vbannerresize();
	});
	
	var swiper = new Swiper('.swiper-container', {
	
	
	cssMode: true,
	mousewheel: false,
	speed: 3000,
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
	delay: 4000,
	disableOnInteraction: true,
	},
	pagination: {
	el: '.swiper-pagination',
	clickable: true,
	},
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},
	
});
	
});


function bannerresize(){ //depends on your needs to change the ratio 偵測寬高調整圖片，使比例一致
	$fw = $("#s_pic").width();
	$fh = $fw/800*300; //800*300橫式圖片大小
	$("#s_pic").height($fh);
	$("#m1 img").height($fh);
};

function vbannerresize(){ //depends on your needs to change the ratio
	$vw = $("#v_pic").width();
	$vh = $vw/246*303; //246*303直式圖片大小
	$("#v_pic").height($vh);
	$("#m2 img").height($vh);
}

