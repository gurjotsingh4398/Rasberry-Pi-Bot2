//const PythonShell = require("python-shell");

const pythonOptions = {
  mode: "text"
  // pythonPath: '/usr/bin/python',
  // scriptPath: '/home/pi/Robot4x4Raspberry/'
};

module.exports = socket => {
  // var robot = initController();

  socket.on("connection", user => {
    console.log("connected server");
    user.on("arrow", state => {
      //robot.send(state + "\n"); //sending to python file the state of robot
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

  process.on("SIGINT", function() {
    robot.send("close");
    robot.end(0);
  });
};

// function initController() {
//   var pyshell = new PythonShell("robot.py", pythonOptions);

//   pyshell.on("message", function(message) {
//     console.log("[ROBOT] Message: " + message);
//   });

//   pyshell.on("error", function(err) {
//     console.log("[ROBOT] Not possible to communicate with the Robot.\n" + err);
//   });

//   return pyshell;
// }
