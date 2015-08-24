$(function(){
	//轮播图
	$('#banner-id').mouseover(function(){
			$('#left-btn').stop().animate({"left":"10px","opacity":"1"},400);
			$('#right-btn').stop().animate({"right":"10px","opacity":"1"},400);
		}).mouseout(function(){
			$('#left-btn').stop().animate({"left":"-40px","opacity":"0"},400);
			$('#right-btn').stop().animate({"right":"-40px","opacity":"0"},400);
		});

	$('.tab-icon li').mouseover(function(){
		$(this).addClass('curr').siblings().removeClass('curr');
	});

	var csIntroH = $('.course-introduce').height();
	var csInfoH = $('.course-info').height();
	$(".course-info").hover(function(){
		
		$(this).children('.cs-info-img').find('img').addClass('change-big');
		$(this).children('.cs-info-img').children('.play-icon').stop().fadeIn(200);
		$(this).children('.course-introduce').css({
			"height":"auto",
			"-webkit-transition": "height .2s ease",
			"transition": "height .2s ease"
		});
		$(this).children('.course-relative').find('.course-teacher').css("display","none").siblings('.course-stds').stop().slideDown(200);
		$(this).children('.course-relative').find('.choose-more').stop().slideDown(200);
	},function(){
		$(this).children('.cs-info-img').find('img').removeClass('change-big');
		$(this).children('.cs-info-img').children('.play-icon').stop().fadeOut(200);
		$(this).children('.course-introduce').css({
			"height":+ csIntroH + "px",
			"-webkit-transition": "height .2s ease",
			"transition": "height .2s ease"
		});
		$(this).children('.course-relative').find('.course-teacher').stop().slideDown(200).siblings('.course-stds').css("display","none");
		$(this).children('.course-relative').find('.choose-more').stop().slideUp(200);
	});
	
	//菜单切换
	$('.course-type li').hover(function(){
		var liIndex = $(this).index();
		var newLine = $('<div class="bordr-line"></div>');
		var newLineLeft = $('.course-type li').eq(0).width();
		var newLineLeftPadding = $('.course-type li');
		// alert(newLineLeft);
		$('.course-type').children('.bordr-line').remove();
		$('.course-type').append(newLine);
		$('.bordr-line').css({
			"left": newLineLeft * liIndex + "px"
		});
		if ($(this).hasClass('course-item-bgc')) {
			$('.bordr-line').css({
				"bottom":"1px",
				"-webkit-transition":"bottom .2s ease",
				"transition":"bottom .2s ease"
			});
			return ;
		}else{
			$(this).addClass('course-item-bgc').siblings().removeClass('course-item-bgc');
			$('.bordr-line').css({
				"bottom":"-10px",
				"-webkit-transition":"bottom .2s ease",
				"transition":"bottom .2s ease"
			});
		}
	});
});