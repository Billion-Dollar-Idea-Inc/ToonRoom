var plus = document.getElementById("plus_sign");
var input = document.getElementById("input");
var submit = document.getElementById("submit");
function revealBox(){
	alert("hello");
	document.getElementById("plus_sign").style.visibility = "hidden";
	document.getElementById("input").style.visibility = "visible";
	document.getElementById("submit").style.visibility = "visible";
}
function back_to_plus(){
	alert("yo");
	document.getElementById("plus_sign").style.visibility = "visible";
	document.getElementById("input").style.visibility = "hidden";
	document.getElementById("submit").style.visibility = "hidden";
}