var rects;
window.onload = function() {

var out = document.getElementById("js-out");

var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext("2d");

document.addEventListener("keypress", registerKeypress );

console.log( ctx );

rects = [
	new Rectangle( 10, 10, "#FF0000", ctx ),
	new Rectangle( 50, 50, "#0000FF", ctx )
]

for( i = 0; i < rects.length; i++ ) {
	//rects[i].redraw();
	//
	//ctx.fillRect( rects[0].x, rects[0].y, rects[0].width, rects[0].height );
}

rects[0].addThis();
rects[1].addThis();

function registerKeypress( e ) {
	// e.keyCode
	// 106
	// 107
	console.log( e.keyCode );
	switch( e.keyCode ) {
		case 104:
			rects[0].moveRight( -3 );
			break;
		case 106:
			rects[0].moveDown( 3 );
			break;
		case 107:
			rects[0].moveDown( -3 );
			break;
		case 108:
			rects[0].moveRight( 3 );
			break;
		}
}
}




function output( message ) {
	out.innerHTML += message;
}

function Rectangle( x, y, color, canvas ) {
	this.x = x;
	this.y = y;
	this.width = 30;
	this.height = 30;
	this.color = color;
	this.canvas = canvas;

	this.moveDown = function(length) {
		this.clearThis();
		this.y += length;
		this.addThis();
	}

	this.moveRight = function( length ) {
		this.clearThis();
		this.x += length;
		this.addThis();
	}

	this.clearThis = function() {
		canvas.clearRect( this.x, this.y, this.width, this.height );
	}

	this.addThis = function() {
		canvas.fillStyle = this.color;
		//canvas.fillRect( this.x, this.y, this.width, this.height );
		canvas.fillRect( this.x, this.y, this.width, this.height );
	}

}

