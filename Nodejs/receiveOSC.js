// tested with vvvv, TouchOSC, Unity3d

var osc = require('osc-min');
var udp = require("dgram");
var inport = 9000; // data coming from Unity: 9000, from TouchOSC: 8000

console.log("OSC listener running at http://localhost:" + inport);

// A simple OSC printer;

udp.createSocket("udp4", function (msg) {
    try {
        console.log(osc.fromBuffer(msg)); // entire OSC package
        osc.fromBuffer(msg).args[0].value; // extracted value
    }
    catch (error) {
        console.log("invalid OSC packet");
    }
}).bind(inport);



// logs e. g.
//{
//    address: '/1/fader4',
//    args: [{
//        type: 'float',
//        value: 0.7665270566940308
//    }],
//    oscType:'message'
//}
//
//for 2 values (e.g. adjusting projection mapping)
//{
//    address: '/3/xy',
//        args: [
//            {type: 'float', value: 0.5277954936027527},
//            {type: 'float', value: 0.5474267601966858}
//        ],
//        oscType:'message'
//}



// Template for evaluating address and value

//var fader01 = "/1/fader1";
//var fader04 = "/1/fader4";
//var fader05 ="/3/xy";
//
//udp.createSocket("udp4", function (msg) {
//    evaluateOscMessage(osc.fromBuffer(msg));
//}).bind(inport);
//
//
//
//
//function evaluateOscMessage(oscMessage) {
//
//    // if only 1 value is being transmitted
//    if (oscMessage.args.length == 1) {
//        var value1 = oscMessage.args[0].value;
//        // check which fader has been changed
//        if (oscMessage.address == fader01) {
//            doTask01(value1);
//        }
//        else if (oscMessage.address == fader04) {
//            doTask04(value1);
//        }
//    }
//
//    // if 2 value are being transmitted
//    if (oscMessage.args.length == 2) {
//        var value1 = oscMessage.args[0].value;
//        var value2 = oscMessage.args[1].value;
//        // check which UI element has been changed
//        if (oscMessage.address == fader05) {
//            doTask05(value1, value2);
//        }
//    }
//}
//
//
//
//function doTask01(value) {
//    // process the value
//    console.log(value);
//}
//
//function doTask04(value) {
//    // process the value
//    console.log(value);
//}
//
//function doTask05(value1, value2) {
//    // process the value
//    console.log("x: " + value1 + ", y: " + value2);
//}
