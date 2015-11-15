var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var vidArray = [];
var history = [];

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady(id) {
	if (id) {
		if (player) {
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
		if(vidArray.length != 0){
			var newID = dequeue();
			player.stopVideo;
			player.loadVideoById(newID);
		}
	}
}

function stopVideo() {
	player.stopVideo();
}

function add_to_history(title){
	
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

//entrance
function back_to_plus(){
	var link = document.getElementById('input').value;
	document.getElementById('input').value = "";
	document.getElementById('plus_sign').style.visibility = "visible";
	document.getElementById('input').style.visibility = "hidden";
	export_link(link);
}

function update_video(id){
	//enqueue(id);
	video = document.getElementById('video');
    onYouTubeIframeAPIReady(id)
}
function enqueue(id){
	vidArray.push(id);
}

function export_link(link){
	//link is gloabl and will be touched here
	//stuff sent to python land
	var id = link.substring(32);
	console.log(id);
	httpOut("http://localhost:5000/addsong/" + room + "/" + id);
}

function dequeue(){
	var current = vidArray.shift();
    return current;
}

//Print table of queue
function print_table(){
	console.log(vidArray);
	var myTable = "";
	myTable = "<table><tr><td style='width: 100px; color: white;'>Next Song</td></tr>";
	myTable+="<tr><td style='width: 100px;                   '>---------------</td></tr>";
	
	for (var i=0; i<vidArray.length; i++) {
    	myTable+="<tr><td style='width: 100px; text-align: right;'>" + vidArray[i]/*INSERT TITLES HERE*/ + "</td></tr>";
    }

	myTable+="</table>";
	document.getElementById('tablePrint').innerHTML = myTable;
}

function httpOut(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var response = xmlHttp.responseText;
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var response = xmlHttp.responseText;
	console.log(response);
	response = JSON.parse(response);
	for( var i = 0; i < response.length; i++){
		if(vidArray.indexOf(response[i]) < 0){
			vidArray.push(response[i]);
		}
	}	
}

setTimeout(httpGet("http://localhost:5000/queue/" + room), 1500);


