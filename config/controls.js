const gpio = require("onoff").Gpio;

var pin17 = new gpio(17, "out");
var pin22 = new gpio(22, "out");

var pin23 = new gpio(23, "out");
var pin24 = new gpio(24, "out");

//TFTF forward
//FTFT reverse

forward = () => {
  console.log("forwad start");
  pin17.write(0, () => {
    // console.log("false on pin 17");
  });
  pin22.write(0, () => {
    //console.log("false on pin 22");
  });

  pin23.write(0, () => {
    //console.log("false on pin 23");
  });
  pin24.write(0, () => {
    //console.log("false on pin 24");
  });
  console.log("forwad end");
};

backward = () => {
  pin17.write(0, () => {
    console.log("false on pin 17");
  });
  pin22.write(0, () => {
    console.log("false on pin 22");
  });

  pin23.write(0, () => {
    console.log("false on pin 23");
  });
  pin24.write(0, () => {
    console.log("false on pin 24");
  });
};

left = () => {
  pin17.write(0, () => {
    console.log("false on pin 17");
  });
  pin22.write(0, () => {
    console.log("false on pin 22");
  });

  pin23.write(0, () => {
    console.log("false on pin 23");
  });
  pin24.write(0, () => {
    console.log("false on pin 24");
  });
};

right = () => {
  pin17.write(0, () => {
    console.log("false on pin 17");
  });
  pin22.write(0, () => {
    console.log("false on pin 22");
  });

  pin23.write(0, () => {
    console.log("false on pin 23");
  });
  pin24.write(0, () => {
    console.log("false on pin 24");
  });
};

stop = () => {
  pin17.write(0, () => {
    console.log("false on pin 17");
  });
  pin22.write(0, () => {
    console.log("false on pin 22");
  });

  pin23.write(0, () => {
    console.log("false on pin 23");
  });
  pin24.write(0, () => {
    console.log("false on pin 24");
  });
};

module.exports = {
  forward: forward,
  backward: backward,
  left: left,
  right: right,
  stop: stop
};
