head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	var fpage = $('.desktop .js-fullpage');

	function initFullPage() {
		fpage.fullpage({
			anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10', 'section11'],
			sectionSelector: '.js-section',
			controlArrows: false,
			verticalCentered: false,
			fixedElements: '.js-header',
			responsive: 1
		});
	}
	if (fpage.length && $(window).height() >= 950 && $(window).width() >= 1200) {
		initFullPage();
	}

	$(window).resize(function(){
		if (fpage.length && $(window).height() >= 950 && $(window).width() >= 1200) {
			initFullPage();
		}
		if (fpage.length && $(window).height() < 950 && $(window).width() < 1200) {
			fpage.fullpage.destroy('all');
		}
	});	
	var config = {
		slideToShow: 1,
		dots: true,
		arrows: false
	}
	$('.js-slider').on('init', function(slick) {
		  setTimeout(function(){
		  	$('.js-slider').addClass("is-ready");
		  },200);
	});
	$(".js-slider").slick(config);
	$(".js-slider-prev").on("click", function(){
		$(this).parents(".slider").find(".js-slider").slick("slickPrev");
	});
	$(".js-slider-next").on("click", function(){
		$(this).parents(".slider").find(".js-slider").slick("slickNext");
	});
});