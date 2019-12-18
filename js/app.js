var seconds = 0;
var mins; 
var minutes = 0;
var interval;
var secondsDisplay = 0;
var pausepressed = false; 
var shortPressed = false;
var longPressed = false; 

function pomodoro(mins) {
    seconds = mins * 60 || 0;

    interval = setInterval(function() {
        seconds++;
        secondsDisplay++;
        document.getElementById("timer").innerHTML = secondsDisplay;
        document.getElementById('minutes').innerHTML = minutes;

        // count seconds display up and reset at 60 seconds 
        if (secondsDisplay == 60){
            secondsDisplay = 0;

        }
        // if seconds is equal to 25minutes (in seconds)
        if(seconds == 1500){
            // play alarm sound 
            var audio = new Audio('alarm.wav');
            audio.play();
            // stop timer 
            seconds = mins * 60 || 0;
            document.getElementById("timer").innerHTML = seconds;
            clearInterval(interval); 

        }
        // trigger for short timer
        if (seconds == 300 && shortPressed == true) {
            shortPressed = false;
            // play alarm sound 
            var audio = new Audio('alarm.wav');
            audio.play();
            // stop timer 
            seconds = mins * 60 || 0;
            document.getElementById("timer").innerHTML = seconds;
            clearInterval(interval); 
        }   
        // trigger for long timer
        if (seconds == 600 && longPressed == true) {
            longPressed = false;
            // play alarm sound 
            var audio = new Audio('alarm.wav');
            audio.play();
            // stop timer 
            seconds = mins * 60 || 0;
            document.getElementById("timer").innerHTML = seconds;
            clearInterval(interval); 
        }

        // if seconds equals 60 display a minute counter 
        if (seconds == 60) {
            minutes++;
            document.getElementById('minutes').innerHTML = minutes;
        }
    }, 1000)
}

// if start button is clicked start the timer function
document.getElementById('start').onclick = function() {
    pomodoro();
}

// if pause button has been pressed 
document.getElementById('pause').onclick = function() {
    pausepressed == true;
    clearInterval(interval);  
    console.log("pause button pressed");
}

// if reset button is pressed
document.getElementById('reset').onclick = function() {
    seconds = mins * 60 || 0;
    document.getElementById("timer").innerHTML = seconds;
    clearInterval(interval); 
    console.log("reset button pressed");
}

// if short break button is pressed 
document.getElementById('shortbreak').onclick = function() {
    shortPressed = true;
    pomodoro();
}