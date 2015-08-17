// JavaScript Document
$(function(){

//自适应 宽度   class="auto-width" ,列块宽度 216+20+15=251px
	// $num <3 then =3; $num>10 then=10 
	$(window).on('resize',function(){
		var $num=Math.floor( ($(window).width())  / 251);
		$num= $num<3 && 3 || $num>10 && 10 || $num; 
		$('.auto-width').width( $num*255-13 );
	}).trigger('resize');
	
	
/************   head  头部  ********************/
	$("#menu").on("mouseover",function(){
		if(! $(this).hasClass("menu-click") ) 
			$(this).addClass("menu-click");
	}).on("mouseleave",function(){
		$(this).removeClass("menu-click");
	});
	
/***************  搜索提交 ******************/
$("#q-search .icon-search-wrap").click(function(){
	if( $.trim( $("#quick-search").val() ) ){
		$("#q-search").submit();
	}
});

/***************  弹出链接  *****************/
$('.pop-button').on('mouseover',function(){
	if( $(this).has('.pop-em').length == 0 )
		$(this).append('<i class="pop-ev pop-i"></i><a class="pop-ev pop-em" href="'+$(this).attr('pop-url')+'">'+$(this).attr('pop-text')+'</a>');
	}).on('mouseleave',function(){
		$(this).children('.pop-ev').remove();
});
	
				
/**********   js 触发 ***********************/
	$('.up-down').on('click',function(){
		$(this).toggleClass('click-up-down');
		$(this).next('.up-down-slide').slideToggle();
	});
/**********  检查是否登录 ************/
$('.check-login').on('click',function(){
		if( !u.uid ) {
			alert('请先登录!');
			return false;
		}
});	
	
	/************ 2014-9-20 **********/
$('.a-wx').on('mouseover',function(){
		$('.wx-code').show();
	}).on('mouseleave',function(){
		$('.wx-code').hide();
});
$('.search-toggle').click(function(){
	$(this).remove();
	$('.search-wrap').show();
});

});// end jquery



/****** 多次触发检查函数  ********/
function checkHover(e, target) {  
    if (getEvent(e).type == "mouseover") {  
        return !contains(target, getEvent(e).relatedTarget  
                || getEvent(e).fromElement)  
                && !((getEvent(e).relatedTarget || getEvent(e).fromElement) === target);  
    } else {  
        return !contains(target, getEvent(e).relatedTarget  
                || getEvent(e).toElement)  
                && !((getEvent(e).relatedTarget || getEvent(e).toElement) === target);  
    }  
}  
  
function contains(parentNode, childNode) {  
    if (parentNode.contains) {  
        return parentNode != childNode && parentNode.contains(childNode);  
    } else {  
        return !!(parentNode.compareDocumentPosition(childNode) & 16);  
    }  
}    
function getEvent(e) {  
    return e || window.event;  
} 