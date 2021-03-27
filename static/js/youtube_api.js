var player1, player2;

var youtubeId1 = ["EDtKd32jVbo", "EDtKd32jVbo", "EDtKd32jVbo"];
var youtubeId2 = ["HRH-dvClp5A", "ISJdQ4e1Wzo"];

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var video2_isplay = false;
var video2_readyPlay = false;

function onYouTubePlayerAPIReady() {
	player1 = new YT.Player("sec2_vide_1", {
		height: '100%',
		width: '100%',
		videoId: youtubeId1[0],
		playerVars: {'controls':1,'autohide':0,'rel':0,'wmode':'opaque','html5':1,'showinfo':0, 'playsinline':1},
		events: {
			'onReady': onPlayerReady1,
			'onStateChange': onPlayerStateChange1
		}
	});
    player2 = new YT.Player("player2", {
		height: '100%',
		width: '100%',
		videoId: youtubeId2[0],
		playerVars: {'controls':1,'autohide':0,'rel':0,'wmode':'opaque','html5':1,'showinfo':0, 'playsinline':1},
		events: {
			'onReady': onPlayerReady2,
			'onStateChange': onPlayerStateChange2
		}
	});
}

function onPlayerReady1(event) {
	event.target.setPlaybackQuality('hd720');     
}
function onPlayerReady2(event) {
	event.target.setPlaybackQuality('hd720');
    video2_readyPlay = true;        
}

function onPlayerStateChange1(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        // player2.pauseVideo();
    }	
}
function onPlayerStateChange2(event) {	
	if (event.data == YT.PlayerState.PLAYING) {
        video2_isplay = true;
        // player1.pauseVideo();
    } else {
        video2_isplay = false;
    }
	if(event.data == YT.PlayerState.ENDED) {
        video2_isplay = false;
	}
}

$(function(){
    // //영상탭메뉴
    // $(".video2_area .video_thumb a").on("click", function(){   
    //     if(!video2_readyPlay) return false;   
    //     $(this).each(function(){
    //         var idx = $(this).parent().index();  
    //         if(!$(this).hasClass("on")){
    //             player2.cueVideoById(youtubeId2[idx]);                
    //             player2.playVideo(); 
    //         } else {
    //             if(!video2_isplay) player2.playVideo();
    //         }            
    //     });   
    //     $(".video2_area .video_thumb a").removeClass("on");
    //     $(this).addClass("on");             
    //     $(".video2_area .poster").hide();
    // });

    // //영상커버버튼
    // $(".poster").on("click", function(){
    //     if($(this).parent().hasClass('video1_area')) {
    //         player1.playVideo();  
    //     } else {
    //         player2.playVideo(); 
    //     }
    //     $(this).hide();              
    // }); 
});









