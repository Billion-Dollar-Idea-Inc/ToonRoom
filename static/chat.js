var link;
var iframe;
var video;
var vidArray = [];
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
	update_video()
	document.getElementById('input').value = "";
	document.getElementById('plus_sign').style.visibility = "visible";
	document.getElementById('input').style.visibility = "hidden";
}
function update_video(){
	var id = link.substring(32);
	iframe = document.createElement("iframe");
	video = document.getElementById('video');
    iframe.setAttribute("src",
          "https://www.youtube.com/embed/" + id 
        + "?rel=0&amp;autoplay=1&amp;showin­fo=0&amp;controls=0&amp;HD=1;iv_load_policy=3");
    alert(id);
    vidArray.push(id);
    alert(vidArray);
    iframe.style.width  = 600;
    iframe.style.height = 400;
	video.appendChild(iframe);
}