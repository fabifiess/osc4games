// tested with vvvv, TouchOSC, Unity3d

var osc = require('osc-min');
var udp = require("dgram");
var inport = 9000; // data coming from Unity: 9000, from TouchOSC: 8000

console.log("OSC listener running at http://localhost:" + inport);

// A simple OSC printer;

var sock = udp.createSocket("udp4", function (msg) {
    var error, error1;
    try {
        return console.log(osc.fromBuffer(msg));
    }
    catch (error1) {
        error = error1;
        return console.log("invalid OSC packet");
    }
});

sock.bind(inport);

// logs e. g.
//{
//    address: '/1/fader1',
//    args: [{
//        type: 'float',
//        value: 0.7665270566940308
//    }],
//    oscType:'message'
//}

