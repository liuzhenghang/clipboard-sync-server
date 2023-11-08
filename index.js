const WebSocket = require('ws');
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket Server');
});

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        var dataObj = JSON.parse(message);
        if (!dataObj.clientId){
            return
        }
        if (!dataObj.deviceId){
            return
        }
        if (dataObj.connect){
            ws.clientId = dataObj.clientId;
            ws.deviceId = dataObj.deviceId;
            return
        }
        if (!dataObj.time){
            return;
        }
        // 这里可以处理从客户端收到的消息
        // 例如，你可以向所有客户端广播消息
        const sendData = {
            deviceId: dataObj.deviceId,
            time: dataObj.time,
            data: dataObj.data
        }
        wss.clients.forEach((client) => {
            if (client.readyState !== WebSocket.OPEN){
                return
            }
            if (client === ws ) {
                return;
            }
            if (client.clientId !== dataObj.clientId){
                return
            }
            client.send(JSON.stringify(sendData));
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

const port = 8765;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
