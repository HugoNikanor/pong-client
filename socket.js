console.log("socket.js");
function sendMessage(msg){
    // Wait until the state of the socket is not ready and send the message when it is...
    waitForSocketConnection(ws, function(){
        console.log("message sent!!!");
        ws.send(msg);
    });
}

// Make the function wait until the connection is made...
function waitForSocketConnection(socket, callback){
    setTimeout(
        function () {
            if (socket.readyState === 1) {
                console.log("Connection is made")
                if(callback != null){
                    callback();
                }
                return;

            } else {
                console.log("wait for connection...")
                waitForSocketConnection(socket, callback);
            }

        }, 5); // wait 5 milisecond for the connection...
}


var ws = new WebSocket("ws:/hugoweb.ga:8080/rectangle");

ws.onopen = function( event ) {
	console.log("connected");
}

var ownId;

ws.onmessage = function( event ) {
	var msg = JSON.parse(event.data);
	console.log( msg );
	switch( msg.type ) {
		case "own-identifier":
			ownId = msg.data;
			console.log("ownId="+ownId);
			break;
		case "paddle-create":
			rects[msg.data.id] = new Paddle(msg.data);

			console.log( rects );

			drawRectangle( msg.data	);

			break;

		case "paddle-move":
			rect = rects[msg.data.id];
			removeRectangle( rect );

			rect.x = msg.data.x;
			rect.y = msg.data.y;

			drawRectangle( rect );
			break;
	}
}
