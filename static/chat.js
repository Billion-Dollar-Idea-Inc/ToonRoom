function revealBox(){
	document.getElementById("plus_sign").style.visibility = "hidden";
	document.getElementById("input").style.visibility = "visible";
	document.getElementById("submit").style.visibility = "visible";
}
function back_to_plus(){
	var Guess = document.getElementById('input').value;
	alert(Guess);
	document.getElementById("plus_sign").style.visibility = "visible";
	document.getElementById("input").style.visibility = "hidden";
	document.getElementById("submit").style.visibility = "hidden";
}