$(document).ready(function(){
	var h = $(window).height();

	$(".header-content").addClass('header-content--animated');
	$(".header-content__title").addClass('header-content__title--visible');
	$(".header-content__desc").addClass('header-content__desc--visible');
	$(".header-content__link").addClass('header-content__link--visible');
	$(".header-content__but").addClass('header-content__but--visible');

	$(".header-top__nav").addClass('header-top__nav--visible');
	$(".header-top__social").addClass('header-top__social--visible');

	$(".header-bottom__location").addClass('header-bottom__location--visible');
	$(".header-bottom__dont").addClass('header-bottom__dont--visible');

	function load () {
		$(".loading").addClass('loading--stop');
	}

	setTimeout(load, 600);

	$(".header-top").addClass('header-top--visible');
	$(".header-bottom").addClass('header-bottom--visible');
	
	// $(window).scroll(function(){
	// 	if ( ($(this).scrollTop()+h) >= $("#ex2").offset().top) {
	// 		$("#ex2 .post").css({visibility:"visible"});
	// 		$("#ex2 .post").eq(0).addClass('animated bounceInLeft');
	// 		$("#ex2 .post").eq(1).addClass('animated bounceInRight');
	// 	} 
	// 	if ( ($(this).scrollTop()+h) >= $("#ex3").offset().top) {
	// 		$("#ex3 .post").css({visibility:"visible"});
	// 		$("#ex3 .post").eq(0).addClass('animated bounceInLeft');
	// 		$("#ex3 .post").eq(1).addClass('animated bounceInRight');
	// 	} 
	// 	if ( ($(this).scrollTop()+h) >= $("#ex4").offset().top) {
	// 		$("#ex4 .post").css({visibility:"visible"});
	// 		$("#ex4 .post").addClass('animated zoomIn');
	// 	} 
		
	// 	if ( $(this).scrollTop() == 0 ) {
	// 		$("#ex2 .post, #ex3 .post, #ex4 .post").each(function(){
	// 			if ( $(this).hasClass('last') ) {
	// 				$(this).removeClass().addClass('post last');
	// 			} else {
	// 				$(this).removeClass().addClass('post');
	// 			}
	// 			$(this).css({visibility:"hidden"});
	// 		});
	// 	}
	// });
});