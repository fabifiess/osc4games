// tested with vvvv, TouchOSC

var dgram = require("dgram"); // UDP
var udp = dgram.createSocket("udp4");
var osc = require('osc-min'); // OSC
var ipaddress = "localhost"; // e.g. "localhost" or "10.110.5.67"
var outport = 8000; // data to Unity3d: 8000, to TouchOSC: 9000


console.log("sending messages to " + ipaddress + ":" + outport);

// Send a bunch of args every two seconds;

var sendInterval = function() {
    var buf;
    buf = osc.toBuffer({
                           address: "/1/fader1",
                           args: [
                               {
                                   value: 0.1,
                                   type: "float"
                               }
                           ]
                       });
    return udp.send(buf, 0, buf.length, outport, ipaddress);
};

setInterval(sendInterval, 2000);