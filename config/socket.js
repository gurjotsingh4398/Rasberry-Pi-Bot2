//const controls = require("./controls");

let path = [];

module.exports = socket => {
  socket.on("connection", user => {
    console.log("connected server");
    user.on("arrow", state => {
      if (state.state == "stop") {
        socket.emit("actualState", state.state); // broadcasting to every user
        //controls.stop();
        //console.log("stopped");
        path.push({
          direction: state.direction,
          time: state.time
        });
        //console.log(path);
      } else {
        let str = "";
        if (state == "up") {
          str = "Moving Forward";
          //console.log("forwad called");
          //controls.forward();
          //console.log("forward done");
        }
        if (state == "left") {
          str = "Moving Left";
          //controls.left();
        }
        if (state == "right") {
          str = "Moving Right";
          //controls.right();
        }
        if (state == "down") {
          str = "Moving Backward";
          //controls.backward();
        }
        socket.emit("actualState", str); // broadcasting to every user
        //console.log("all done");
      }
    });
  });
};
