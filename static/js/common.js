$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#gnb, #indicator',
		anchors: ['menu1_1', 'menu1_2', 'menu2', 'menu3', 'menu4', 'menu5'],
		scrollOverflow: true,
		autoScrolling: true,
        // loopHorizontal: false,
		onLeave: function(index, nextIndex, direction){
			if(nextIndex == 2){
				$("#gnb li").eq(0).find("a").addClass("on");			
				$("#indicator li").eq(0).find("a").addClass("on");			
			} else {
				$("#gnb li").eq(0).find("a").removeClass("on");		
				$("#indicator li").eq(0).find("a").removeClass("on");		
			}
		}
	});

	// 	$(".btn_contact").on("click", function(){
	//         $.fn.fullpage.moveTo(6);
	// 	});
});