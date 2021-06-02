// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function (event) {
      
      if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerHTML = "Shuttle in flight."
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML += 10000;

      } else {
        window.alert("You pressed Cancel!");
      }
    });
    let landButton = this.document.getElementById("landing");
    landButton.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    let abortButton = this.document.getElementById("missionAbort");
    abortButton.addEventListener("click", function(event) {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
    
          } else {
            window.alert("You pressed Cancel!");
          }
    });
    let rocketImg = this.document.getElementById("rocket");
    let upButton = this.document.getElementById("up");
    upButton.addEventListener("click", function(event) {
        rocketImg.style.bottom += "10px";
        spaceShuttleHeight.innerHTML += 10000;
    });
    let downButton = this.document.getElementById("down");
    downButton.addEventListener("click", function(event) {
        rocketImg.style.top += "10px";
        spaceShuttleHeight.innerHTML -= 10000;
    });
    let rightButton = this.document.getElementById("right");
    rightButton.addEventListener("click", function(event) {
        rocketImg.style.left += "10px";
    });
    let leftButton = this.document.getElementById("left");
    leftButton.addEventListener("click", function(event) {
        rocketImg.style.right += "10px";
    });
    
 });
