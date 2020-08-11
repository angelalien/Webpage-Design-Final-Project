// JavaScript Document

$(document).ready(function(){
	
	$(window).on('load resize', function(){
	bannerresize();
	vbannerresize();
	});
	
});


function bannerresize(){ //depends on your needs to change the ratio 偵測寬高調整圖片，使比例一致
	$fw = $("#s_pic").width();
	$fh = $fw/800*300; //1600*668橫式圖片大小
	$("#s_pic").height($fh);
	$("#m1 img").height($fh);
};

function vbannerresize(){ //depends on your needs to change the ratio
	$vw = $("#v_pic").width();
	$vh = $vw/900*1111; //900*1111直式圖片大小
	$("#v_pic").height($vh);
	$("#m2 img").height($vh);
}