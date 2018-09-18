module.exports = socket => {
  socket.on("connection", user => {
    console.log("connected server");
    user.on("arrow", state => {
      // robot.send(state + '\n');  sending to python file the state of robot
      if (state == "stop") {
        socket.emit("actualState", state); // broadcasting to every user
      } else {
        let str = "";
        if (state == "up") {
          str = "Moving Forward";
        }
        if (state == "left") {
          str = "Moving Left";
        }
        if (state == "right") {
          str = "Moving Right";
        }
        if (state == "down") {
          str = "Moving Backward";
        }
        socket.emit("actualState", str); // broadcasting to every user
      }
    });
  });
};
