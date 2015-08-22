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
	// var csInfoH = $('.course-info').height();
	$(".course-info").hover(function(){
		
		// alert(csInfoH);
		// $('.course-info').css({"height":"auto"});
		$(this).children('.cs-info-img').find('img').addClass('change-big');
		$(this).children('.cs-info-img').children('.play-icon').stop().fadeIn(200);
		$(this).children('.course-introduce').css({
			"height":"auto",
			"-webkit-transition": "height 0.2s ease",
			"transition": "height 0.2s ease"
		});
		$(this).children('.course-relative').find('.course-teacher').stop().fadeOut().siblings('.course-stds').stop().slideDown(200);
		$(this).children('.course-relative').find('.choose-more').stop().slideDown(200);
	},function(){
		// $('.course-info').css({"height":+ csInfoH +"px"});
		$(this).children('.cs-info-img').find('img').removeClass('change-big');
		$(this).children('.cs-info-img').children('.play-icon').stop().fadeOut(200);
		$(this).children('.course-introduce').css({
			"height":+ csIntroH + "px",
			"-webkit-transition": "height .2s ease",
			"transition": "height .2s ease"
		});
		$(this).children('.course-relative').find('.course-teacher').stop().slideDown(200).siblings('.course-stds').stop().fadeOut();
		$(this).children('.course-relative').find('.choose-more').stop().slideUp(200);
	});
	
	//菜单切换
	
	function newBorder(newLine){
		newLine = $('<div class="new-border"></div>');
	}
	$('.course-type li').hover(function(L){
		var thisLiId = $('#course-item' + $(this).index()+ 1);
		
	});

});