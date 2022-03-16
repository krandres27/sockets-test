const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({ port: 8082 });

webSocketServer.on('connection', ws => {
  console.log('new client connected');

  ws.on('close', () => {
    console.log('client has been disconnected');
  });
  
  ws.on('message', data => {
    console.log(`client has sent: ${data}`);

    ws.send(data.toString().toUpperCase());
  });
});