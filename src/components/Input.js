const SerialPort = require("serialport");
const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiter: "\r\n"
});

const http = require('http')
const fs = require('fs')

const index = fs.readFileSync('index.html')

console.log('initialize')

let port = new SerialPort("/dev/ttyACM0",{
    baudRate:9600,
    dataBits:8,
    parity:'none',
    stopBits:1,
    flowControl:false
});

port.pipe(parser);

let app = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"})
    res.end(index)
})

let io = require("socket.io")(app);
io.on('connection', function(data){
    console.log("NodeJS is listening")
})

parser.on('data',function(data){
    console.log(data)
    io.emit('data', data)
})

app.listen(3001)