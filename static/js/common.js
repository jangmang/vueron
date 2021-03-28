$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#gnb, #indicator',
		anchors: ['menu1_1', 'menu1_2', 'menu2', 'menu3', 'menu4', 'menu5'],
		scrollOverflow: true,
		autoScrolling: true,
        // loopHorizontal: false,
		onLeave: function(index, nextIndex, direction){
			// section1_2 메뉴활성화
			if(nextIndex == 2){ 
				$("#gnb li").eq(0).find("a").addClass("on");			
				$("#indicator li").eq(0).find("a").addClass("on");			
			} else {
				$("#gnb li").eq(0).find("a").removeClass("on");		
				$("#indicator li").eq(0).find("a").removeClass("on");		
			}

			// sec2 view2
			if($(".sec2").hasClass("view2")){
				setTimeout(function(){
					$(".sec2").removeClass("view2");
				},500);
			}
		}
	});
	
	// 	$(".btn_contact").on("click", function(){
	//  	$.fn.fullpage.moveTo(6);
	// 	});

	// sec1_1 
	$(".sec1_1 .btn_more").on("click", function(){
		$.fn.fullpage.moveTo(2);
	});

	// sec2
	$(".sec2 .banner_area li a").on("click", function(){
		$(".sec2").addClass("view2");
	});
	$('.sec2_slider').slick({
		arrows: true,
		infinite: false,	
	});
	$('.sec2_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		player1.cueVideoById(youtubeId1[currentSlide]);
	});	

	// sec3
	$('.sec3_slider').slick({
		arrows: true,
		infinite: false,	
		prevArrow: $(".sec3 .btn_prev"),
        nextArrow: $(".sec3 .btn_next"), 
	});
	$('.sec3_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		player2.cueVideoById(youtubeId2[nextSlide]);
		$(".sec3 .view_menu li a").removeClass("on");
		$(".sec3 .view_menu li").eq(nextSlide).find("a").addClass("on");
	});	
	$(".sec3 .view_menu li a").on("click", function(){
		var idx = $(this).parent().index();
		$(".sec3 .view_menu li a").removeClass("on");
		$(this).addClass("on");
		$('.sec3_slider').slick('slickGoTo', idx);
	});

	// sec4
	$(".sec4 .btn_more").on("click", function(){
		$.fn.fullpage.moveTo(6);
	});

	// partners_banner_slider
	$('.partners_banner_slider').slick({
		arrows: true,
		infinite: false,	
	});
});