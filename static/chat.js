var vidArray = [];
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady(id) {
	if (id) {
		if (player) {
			enqueue(id);
		} else {
			player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: id,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
		}
	}
	if(player && event.data == YT.PlayerState.ENDED){
		var newID = dequeue();
		player.stopVideo;
		player.loadVideoById(newID);
	}
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
	if(player && event.data == YT.PlayerState.ENDED){
		var newID = dequeue();
		player.stopVideo;
		player.loadVideoById(newID);
	}
if(event.data == YT.PlayerState.ENDED){
}
if (event.data == YT.PlayerState.PLAYING && !done) {
  setTimeout(stopVideo, 6000);
  done = true;
}
}

function stopVideo() {
player.stopVideo();
}
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
	link = document.getElementById('input').value;
	document.getElementById('input').value = "";
	document.getElementById('plus_sign').style.visibility = "visible";
	document.getElementById('input').style.visibility = "hidden";
	update_video()
}
function update_video(){
	id = link.substring(32).trim();
	video = document.getElementById('video');
    onYouTubeIframeAPIReady(id)
}
function enqueue(id){
	vidArray.push(id);
}
function dequeue(){
	var current = vidArray.shift();
    return current;
}