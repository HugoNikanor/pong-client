var rects = [];

function Rectangle( x, y, color, cv ) {
	this.x = x;
	this.y = y;
	this.width = 30;
	this.height = 30;
	this.color = color;
	this.cv = cv;

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
	
	this.redraw = function() {
		this.clearThis();
		this.addThis();
	}

	this.clearThis = function() {
		cv.clearRect( this.x, this.y, this.width, this.height );
	}

	this.addThis = function() {
		cv.fillStyle = this.color;
		cv.fillRect( this.x, this.y, this.width, this.height );
		//cv.fillStyle = "#000000";
		//cv.strokeRect( this.x, this.y, this.width, this.height ); 
	}
}
