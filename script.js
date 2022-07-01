var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var message = document.querySelector("#msg");

function changeColor() {
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	css.classList.add('addPad');
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);

function CopyToClipboard(id){
	var r = document.createRange();
	r.selectNode(document.getElementById(id));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
	message.classList.add('show');
	setTimeout(function(){
		message.classList.remove('show');
	}, 1200);
}