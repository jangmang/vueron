var player1, player2;

var youtubeId1 = ["EDtKd32jVbo", "EDtKd32jVbo", "EDtKd32jVbo"];
var youtubeId2 = ["EDtKd32jVbo", "EDtKd32jVbo", "EDtKd32jVbo"];

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
    player2 = new YT.Player("sec3_vide_1", {
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
}

function onPlayerStateChange1(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        player2.pauseVideo();
    }	
}
function onPlayerStateChange2(event) {	
	if (event.data == YT.PlayerState.PLAYING) {
        player1.pauseVideo();
    } 
}









