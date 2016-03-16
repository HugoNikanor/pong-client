window.onload = function() {
	var canvas = document.getElementById('myCanvas')
	var ctx = canvas.getContext("2d");

	rects[0] = new Rectangle( 10, 10, "#FF0000", ctx );
	rects[0].redraw();
}


document.addEventListener("keypress", function registerKeypress( e ) {
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
	sendMessage( JSON.stringify( {
		"x": rects[0].x,
		"y": rects[0].y
	} ) );
});
