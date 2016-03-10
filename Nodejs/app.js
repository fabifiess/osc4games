// tested with vvvv, TouchOSC

var dgram = require("dgram"); // UDP
var udp = dgram.createSocket("udp4");
var osc = require('osc-min'); // OSC
var ipaddress = "10.110.5.69"; // e.g. "localhost"
var outport = 9000;


console.log("sending messages to " + ipaddress + ":" + outport);

// Send a bunch of args every two seconds;

var sendHeartbeat = function() {
    var buf;
    buf = osc.toBuffer({
                           address: "/1/fader1",
                           args: [
                               {
                                   value: 0.7,
                                   type: "float"
                               }
                           ]
                       });
    return udp.send(buf, 0, buf.length, outport, ipaddress);
};

setInterval(sendHeartbeat, 2000);