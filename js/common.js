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
			responsive: 1,
			onLeave: function(index, nextIndex, direction){
				console.log(index);
				if (index == 7) {
					$(".js-date-from").datepicker("hide");
					$(".js-date-to").datepicker("hide");
					$(".js-date-from").blur();
					$(".js-date-to").blur();
				}
			}
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
		return false;
	});
	$(".js-slider-next").on("click", function(){
		$(this).parents(".slider").find(".js-slider").slick("slickNext");
		return false;
	});
	$(".js-file").on("click", function(){
		$(this).parent().find("input").trigger("click");
		return false;
	});
	var configPresent = {
		dots: true,
		rows: 2,
		slidesPerRow: 4,
		arrows: false
	}
	$(".js-slider-present").slick(configPresent);
	$(".js-present-prev").on("click", function(){
		$(".js-slider-present").slick("slickPrev");
		return false;
	});
	$(".js-present-next").on("click", function(){
		$(".js-slider-present").slick("slickNext");
		return false;
	});

	$(".js-date-from" ).datepicker({
	      defaultDate: "+1w",
	      changeMonth: true,
	      changeYear: true,
	      numberOfMonths: 1,
	      dateFormat: "dd.mm.yy",
	      onClose: function( selectedDate ) {
	        $(".js-date-to").datepicker( "option", "minDate", selectedDate );
	      }
	});
    $(".js-date-to").datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      changeYear: true,
      numberOfMonths: 1,
      dateFormat: "dd.mm.yy",
      onClose: function( selectedDate ) {
        $(".js-date-from").datepicker( "option", "maxDate", selectedDate );
      }
    });

    $(".input").on("change", function() {
    	if ($(this).val().length > 0) {
    		$(this).addClass("has-value");
    	}
    	else {
			$(this).removeClass("has-value");
    	}
    });
    $(".input").focusout(function() {
    	if ($(this).val().length > 0) {
    		$(this).addClass("has-value");
    	}
    	else {
			$(this).removeClass("has-value");
    	}
    });

});