function revealBox(){
	if(document.getElementById('plus_sign').value != "Submit"){

		document.getElementById('plus_sign').value = "Submit";
		document.getElementById('input').style.visibility = "visible";
	}
	else{
		if(document.getElementById('plus_sign').value == "Submit"){
		document.getElementById('plus_sign').value = "+";
		back_to_plus();
		}
	}	
}
function back_to_plus(){
	var link = document.getElementById('input').value;
	
	change_video('pvNPORFXpc');

	document.getElementById('input').value = "";
	document.getElementById('plus_sign').style.visibility = "visible";
	document.getElementById('input').style.visibility = "hidden";
}

function change_video(id){
	console.log("here");

	player = new YT.Player('player', {
		width: 400,
		height: 300,
		videoId: id,
		events: {
			'onPlayerReady': onPlayerReady,
			'onPlayerStateChange' : onPlayerStateChange
		}
	});
}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady(){
	id = 'rVeMiVU77wo';

	player = new YT.Player('player', {
		width: 400,
		height: 300,
		videoId: id,
		events: {
			'onPlayerReady': onPlayerReady,
			'onPlayerStateChange' : onPlayerStateChange
		}
	});
}
var done = false;
function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
}
function stopVideo() {
        player.stopVideo();
}
