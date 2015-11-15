var link;
function revealBox(){
	document.getElementById("plus_sign").style.visibility = "hidden";
	document.getElementById("input").style.visibility = "visible";
	document.getElementById("submit").style.visibility = "visible";
}
function back_to_plus(){
	link = document.getElementById('input').value;
	//alert(link);
	document.getElementById("plus_sign").style.visibility = "visible";
	document.getElementById("input").style.visibility = "hidden";
	document.getElementById("submit").style.visibility = "hidden";
	update_video()
}
function update_video(){
	var id = link.substring(32);
	var iframe = document.createElement("iframe");
    iframe.setAttribute("src",
          "https://www.youtube.com/embed/" + id 
        + "?rel=0&amp;autoplay=1&amp;showin­fo=0&amp;controls=0&amp;HD=1;iv_load_policy=3");
    
    iframe.style.width  = 400;
    iframe.style.height = 300;
	document.body.appendChild(iframe)
}
