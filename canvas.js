console.log("canvas.js");
var canvas;
window.onload = function() {
	var cvs = document.getElementById('myCanvas')
	canvas = cvs.getContext("2d");
}

function drawRectangle( rectangle ) {
	canvas.fillStyle = rectangle.color;
	canvas.fillRect( rectangle.x, rectangle.y, rectangle.width, rectangle.height );
}
function removeRectangle( rectangle ) {
	canvas.clearRect( rectangle.x, rectangle.y, rectangle.width, rectangle.height );
}


document.addEventListener("keypress", function registerKeypress( e ) {
	console.log( e.keyCode );
	var paddle = rects[ownId];
	var x = paddle.x;
	var y = paddle.y;

	switch( e.keyCode ) {
		case 104:
			x -= 3;
			break;
		case 106:
			y += 3;
			break;
		case 107:
			y -= 3;
			break;
		case 108:
			x += 3;
			break;
	}
	// informs the server that this move is to be made,
	// this in turns infroms all the clients that this move should be carried out 
	sendMessage( JSON.stringify({
		"type": "paddle-move",
		"data": {
			"x": x,
			"y": y,
			"id": paddle.id,
		}
	}) );
});
