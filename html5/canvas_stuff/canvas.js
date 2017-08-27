
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var board = canvas.getContext('2d');

for(var i=0; i < 1; i++){
	var x = Math.random()*window.innerWidth;
	var y = Math.random()*window.innerHeight;


	board.beginPath();
	board.arc(x,y,30,0,Math.PI*2,false);
	board.strokeStyle = "#333";
	board.stroke();
}

