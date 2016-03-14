$(function(){
	//官网下载
	$('.downloaded').on('touchend',function(){
		$(this).addClass('active');
		$('.dialog_bg').fadeIn();
		$('.dialog').fadeIn();
		noTouchMove();
	})
	//关闭
	$('.close').on('touchend',function(){
		$('.downloaded').removeClass('active');
		$('.dialog_bg').fadeOut();
		$('.dialog').fadeOut();
		touchMove();
	})
	//戒指点击
	$('.clicked').on('touchend',function(){
		$('.dialog_bg').fadeIn();
		$('.dialog').fadeIn();
		noTouchMove();
	})
	//视频下载
	$('.video').on('touchend',function(){
		$('.dialog_bg').fadeIn();
		$('.videoplayer').fadeIn();
		$('.videoplayer').append('<video id="video1" x-webkit-airplay="true" width="100%" height="100%" preload="none" src="http://v.wot.kongzhong.com/bg1.mp4" webkit-playsinline=""></video>');
		var video=document.getElementById('video1');
		noTouchMove();
	})
	//预约
	$('.yuyue').on('touchend',function(){
		$('.dialog_bg').fadeIn();
		$('.page').fadeIn();
		touchMove();
	})
	//预约关闭
	$('.closet').on('touchend',function(){
		$('.dialog_bg').fadeOut();
		$('.page').fadeOut();
		noTouchMove();
	})
	function noTouchMove(){
		$('body').bind("touchmove",function(e){
			e.preventDefault();
			e.stopPropagation();
		},false);
	}
	function touchMove(){
		$('body').unbind('touchmove');
	}
	//第三页任务切换
	$('.btn>ul>li').on('touchend',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var n = $(this).index();	
		$('.desc_left>p').html(dataAry[n].desc);
		$('.desc_right .name').html('姓名：'+dataAry[n].name);
		$('.desc_right .hangji').html('航级：'+dataAry[n].hangji);
		$('.desc_right .shengyou').html('声优：'+dataAry[n].shengyou);
		$('.bg3').css('background-image','url(images/'+dataAry[n].bg+')');
		$('.desc_right>audio').attr('src',dataAry[n].audios);
	})
})

