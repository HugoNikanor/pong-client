console.log("canvas.js");
var canvas;
window.onload = function() {
	var cvs = document.getElementById('myCanvas')
	canvas = cvs.getContext("2d");
	//console.log( canvas );

	//rects[0] = new Rectangle( 10, 10, "#FF0000", ctx );
	//rects[0].redraw();
}

function drawRectangle( rectangle ) {
	//console.log( canvas );
	canvas.fillStyle = rectangle.color;
	canvas.fillRect( rectangle.x, rectangle.y, rectangle.width, rectangle.height );
}
function removeRectangle( rectangle ) {
	canvas.clearRect( rectangle.x, rectangle.y, rectangle.width, rectangle.height );
}


document.addEventListener("keypress", function registerKeypress( e ) {
	// e.keyCode
	// 106
	// 107
	console.log( e.keyCode );
	//var x = rects[0].x;
	//var y = rects[0].y;
	//var paddle = rects[Object.keys(rects)[0]];
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
	sendMessage( JSON.stringify({
		"type": "paddle-move",
		"data": {
			"x": x,
			"y": y,
			"id": paddle.id,
		}
	}) );
});
