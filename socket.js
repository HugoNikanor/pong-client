//var Socket = new WebSocket( 127.0.0.1 );
//Socket.send( "Hello, World" );



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

function submitForm( form ) {
	var formData  = form.message.value;
	form.message.value = "";
	sendMessage( formData );
};

var ws = new WebSocket("ws:/hugoweb.ga:8080/test");

ws.onopen = function( event ) {
	document.getElementById("chat-area").innerHTML += 'Connected to server<br>';
}

ws.onmessage = function (evt) {
	document.getElementById("chat-area").innerHTML += evt.data + '<br>';
}
