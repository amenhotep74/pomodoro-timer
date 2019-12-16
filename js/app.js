console.log("js loaded!");

// set timer in minutes 
var mins = 1;

// convert minutes to seconds
var secs = mins * 60;


// if short break button is pressed.
document.getElementById('shortbreak').onclick = function(){
    mins = 5;
    secs = mins * 60;
    // Initiate the timer
    setTimeout('Decrement()', 60); // runs the Decrement function every 60 milli seconds
}
// if long break button is clicked
document.getElementById('longbreak').onclick = function(){
    mins = 10;
    secs = mins * 60;
}

// count function triggered when button is clicked
function countDown() {
    setTimeout('Decrement()', 60); // runs the Decrement function every 60 milli seconds
}

function Decrement() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");
    }

    // if pause button is clicked
    document.getElementById('pause').onclick = function(){
        // stop the function looping
        clearTimeout(timerId);
    }

    // if reset button is clicked
    document.getElementById('reset').onclick = function(){
        // reset the variables 
        mins = 2;
        secs = mins * 60;
        // stop the function looping
    }

    // if less than a minute remaining 
    // Display only seconds value
    if (seconds < 59){
        seconds.value = secs;
    }
    // display both minutes and seconds 
    // get minutes and get seconds is used to 
    // get minutes and seconds 
    else {
        minutes.value = getminutes();
        seconds.value = getseconds();
    }
    // if seconds becomes zero, 
    // then page alert 
    if (mins < 0) {
        var alarm = document.getElementById('myAudio');
        alarm.play();
        minutes.value = 0;
        seconds.value = 0;

    }
    // if seconds > 0 then seconds is decremented 
    else {
        secs--;
        var timerId = setTimeout('Decrement()', 1000); // calls the Decrement function every 1000 ms
    }
}

function getminutes() {
    // minutes is seconds divded by 60, rounded down
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds(){
    // take minutes remaining (as seconds) away 
    // from total seconds remaining
    return secs - Math.round(mins * 60);
}
