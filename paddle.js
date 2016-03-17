console.log("paddle.js");
var rects = {};

function Paddle( json ) {
	this.x = json.x;
	this.y = json.y;
	this.width = json.width;
	this.height = json.height;
	this.color = json.color;
	this.id = json.id;

}
