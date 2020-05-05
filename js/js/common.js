$(document).ready(function(){


	$('input, textarea').placeholder();


	$('.js_scroll').click(function(){
		$("html, body").animate({
			scrollTop: $(".main_form").offset().top - 10}, {
				duration: 1000,
				easing: "swing"
			});
		return false;
	});


	//SLICK SLIDER
    $('.slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToScroll: 1,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,

	});


	

	$(".slick-arrow--prev").on("click", function () {
		$('.slider').slick('slickPrev');
	});

	$(".slick-arrow--next").on("click", function () {
		$('.slider').slick('slickNext');
	});


	$(".vk-slider").slick({
		dots: true,
		arrows: true,
		infinite: true,

		speed: 300,
		slidesToScroll: 2,
		slidesToShow: 2,
		// autoplay: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 1,
					autoplay: false,
					autoplaySpeed: 5000,
					arrows: true,
					centerMode: true,
					variableWidth: true,
					dots: true
				}
			},
		]
	});



	




	
});
