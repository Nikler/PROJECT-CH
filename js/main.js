$(document).ready(function(){
	var h = $(window).height();

	$('a.footer__up').click(function (event) { 
		event.preventDefault();
     destination = 0;
       $('body,html').animate( { scrollTop: destination }, 700 );
     return false;
   });

	$('a[href^="#"], a[href^="#"]:not(a[href="#"])').click(function (event) { 
		event.preventDefault();
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top+10;
       $('body,html').animate( { scrollTop: destination }, 700 );
     return false;
   });

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
	
	$(window).scroll(function(){
		if ( ($(this).scrollTop()+h) >= ($("#services").offset().top+400) && ($(this).scrollTop()+h) <= ($("#services").offset().top+1099) )  {
			$(".serv-list__item--1").addClass('serv-list__item--1--visible');
			$(".serv-list__item--2").addClass('serv-list__item--2--visible');
			$(".serv-list__item--3").addClass('serv-list__item--3--visible');
		} 
		else {
			$(".serv-list__item--1").removeClass('serv-list__item--1--visible');
			$(".serv-list__item--2").removeClass('serv-list__item--2--visible');
			$(".serv-list__item--3").removeClass('serv-list__item--3--visible');
		}

		if ( ($(this).scrollTop()+h) >= ($("#about").offset().top+400) && ($(this).scrollTop()+h) <= ($("#about").offset().top+1099) )  {
			$(".about-me").addClass('about-me--visible');
		} 
		else {
			$(".about-me").removeClass('about-me--visible');
		}
		if ( ($(this).scrollTop()+h) >= ($("#working").offset().top+300) && ($(this).scrollTop()+h) <= ($("#working").offset().top+1099) )  {
			$(".working__bg").addClass('working__bg--visible');
		} 
		else {
			$(".working__bg").removeClass('working__bg--visible');
		}		
		

		if ( ($(this).scrollTop()+h) >= ($("#features").offset().top+300)  && ($(this).scrollTop()+h) <= ($("#features").offset().top+1099))  {
			$(".features__item--1").addClass('features__item--visible');
			$(".features__item--2").addClass('features__item--visible');
			$(".features__item--3").addClass('features__item--visible');
		} 
		else {
			$(".features__item--1").removeClass('features__item--visible');
			$(".features__item--2").removeClass('features__item--visible');
			$(".features__item--3").removeClass('features__item--visible');
		}	

		if ( ($(this).scrollTop()+h) >= ($("#features").offset().top+780)  && ($(this).scrollTop()+h) <= ($("#features").offset().top+1099))  {
			$(".footer__but").addClass('footer__but--color');
		} 
		else {
			$(".footer__but").removeClass('footer__but--color');
		}

		
		// if ( ($(this).scrollTop()+h) >= $("#ex3").offset().top) {
		// 	$("#ex3 .post").css({visibility:"visible"});
		// 	$("#ex3 .post").eq(0).addClass('animated bounceInLeft');
		// 	$("#ex3 .post").eq(1).addClass('animated bounceInRight');
		// } 
		// if ( ($(this).scrollTop()+h) >= $("#ex4").offset().top) {
		// 	$("#ex4 .post").css({visibility:"visible"});
		// 	$("#ex4 .post").addClass('animated zoomIn');
		// } 
		
		// if ( $(this).scrollTop() == 0 ) {
		// 	$("#ex2 .post, #ex3 .post, #ex4 .post").each(function(){
		// 		if ( $(this).hasClass('last') ) {
		// 			$(this).removeClass().addClass('post last');
		// 		} else {
		// 			$(this).removeClass().addClass('post');
		// 		}
		// 		$(this).css({visibility:"hidden"});
		// 	});
		// }
	});
});

