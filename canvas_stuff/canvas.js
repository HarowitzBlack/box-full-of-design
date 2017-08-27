
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

// drawing a new circle
// animate a circle
var x = Math.random();
var velocity = 5;
var rad = 30;
function DrawCircle(){
	if(x >= innerWidth-100 || x - rad < 0){
		velocity = -velocity;
	}
	requestAnimationFrame(DrawCircle);
	board.clearRect(0,0,innerWidth,innerHeight);
	board.beginPath();
	board.arc(x,200,rad,Math.PI*2,false);
	board.strokeStyle = "#333";
	board.stroke();
	x +=velocity;

	
}

DrawCircle();
