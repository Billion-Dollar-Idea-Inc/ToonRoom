var link;
var iframe;
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
	alert(link);
	update_video()
	document.getElementById('input').value = "";
	document.getElementById('plus_sign').style.visibility = "visible";
	document.getElementById('input').style.visibility = "hidden";
	alert("reached");
}
function update_video(){
	var id = link.substring(32);
	iframe = document.createElement("iframe");
    iframe.setAttribute("src",
          "https://www.youtube.com/embed/" + id 
        + "?rel=0&amp;autoplay=1&amp;showin­fo=0&amp;controls=0&amp;HD=1;iv_load_policy=3");
    iframe.style.width  = 400;
    iframe.style.height = 300;
	document.body.appendChild(iframe);
}