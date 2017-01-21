
/* handles all initialization and events related to the WebSocket */

var WebSocket = require('ws')

// working WebSockets server.
var WebSocketServer = WebSocket.Server
var port = 3001
var ws = new WebSocketServer({
  port: port
})

console.log(`websockets server started at port ${port}`)
