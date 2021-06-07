// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {

    
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const rocket = document.getElementById("rocket");

    let xpos = 0;
    let ypos = 250;
    
    takeoffButton.addEventListener("click", function(){
        let userInput = confirm("Confirm that the shuttle is ready for takeoff");
        if (userInput) {
                document.getElementById("flightStatus").innerText = "Shuttle in flight.";
                document.getElementById("shuttleBackground").style.backgroundImage = "repeating-radial-gradient(purple, blue 20%)";
                document.getElementById("spaceShuttleHeight").innerText = 10000;
            }
        })
    
        landingButton.addEventListener("click", function(){
            alert("The shuttle is landing. Landing gear engaged.");
            document.getElementById("flightStatus").innerText = "The shuttle has landed.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerText = 0;
        })

        missionAbortButton.addEventListener("click", function(){
            let userInput = confirm("Confirm that you want to abort the mission");
            if(userInput) {
                document.getElementById("flightStatus").innerText = "Mission aborted";
                document.getElementById("shuttleBackground").style.backgroundImage = "radial-gradient(red, yellow)";
                document.getElementById("spaceShuttleHeight").innerText = 0;
            }
        })

        upButton.addEventListener("click", function(){
            if (ypos > 0) {
                ypos += -10;
                rocket.style.top = `${ypos}px`;
                spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
                shuttleBackground.style.backgroundImage = "repeating-radial-gradient(purple, blue 20%)";
                flightStatus.innerHTML = "Shuttle in flight.";
            }               
        })        
        
        downButton.addEventListener("click", function(){
            if (ypos < 250) {
                ypos += 10;
                rocket.style.top = `${ypos}px`;
                spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
            }  
        })
        
        leftButton.addEventListener("click", function(){
            if (xpos < (Number(shuttleBackground.offsetWidth) / 2) - 25) {
                xpos += 10;
                rocket.style.right = `${xpos}px`;
            }              
        })
        
        rightButton.addEventListener("click", function() {
            if (xpos > (-(Number(shuttleBackground.offsetWidth) / 2) + 25)) {
                xpos += -10;
                rocket.style.right = `${xpos}px`;
            }
        })

        window.addEventListener("keydown", function(event){
            if (event.defaultPrevented) {
                return;
            }

            switch (event.key) {
                case "Down":
                    if (ypos < 250) {
                        ypos += 10;
                        rocket.style.top = `${ypos}px`;
                        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
                    }        
                case "ArrowDown":
                    if (ypos < 250) {
                        ypos += 10;
                        rocket.style.top = `${ypos}px`;
                        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
                    }                  
                  break;

                case "Up": 
                    if (ypos > 0) {
                        ypos += -10;
                        rocket.style.top = `${ypos}px`;
                        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
                        shuttleBackground.style.backgroundImage = "repeating-radial-gradient(purple, blue 20%)";
                        flightStatus.innerHTML = "Shuttle in flight.";
                    }    
                case "ArrowUp":
                    if (ypos > 0) {
                        ypos += -10;
                        rocket.style.top = `${ypos}px`;
                        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
                        shuttleBackground.style.backgroundImage = "repeating-radial-gradient(purple, blue 20%)";
                        flightStatus.innerHTML = "Shuttle in flight.";
                    }   
                  break;

                case "Left":
                    if (xpos < (Number(shuttleBackground.offsetWidth) / 2) - 25) {
                        xpos += 10;
                        rocket.style.right = `${xpos}px`;
                    }      
                case "ArrowLeft":  
                    if (xpos < (Number(shuttleBackground.offsetWidth) / 2) - 25) {
                        xpos += 10;
                        rocket.style.right = `${xpos}px`;
                    }                  
                  break;

                case "Right": 
                if (xpos < (-(Number(shuttleBackground.offsetWidth) / 2) + 25)) {
                        xpos += -10;
                        rocket.style.right = `${xpos}px`;
                    }     
                case "ArrowRight":
                    if (xpos < 250) {
                        xpos += -10;
                        rocket.style.right = `${xpos}px`;
                    }     
                  break;

                default:
                    return;
                }
        })
        
}

window.addEventListener("load", init)