let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay(){

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerText =
        `${h}:${m}:${s}`;
}

function stopwatch(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

function startTimer(){

    if(timer !== null) return;

    timer = setInterval(stopwatch,1000);
}

function pauseTimer(){

    clearInterval(timer);

    timer = null;

    addLap();
}

function resetTimer(){

    clearInterval(timer);

    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    document.getElementById("lapList").innerHTML = "";
}

function addLap(){

    const lapTime =
        document.getElementById("display").innerText;

    const lapItem = document.createElement("div");

    lapItem.classList.add("lap-item");

    lapItem.innerText = lapTime;

    document.getElementById("lapList")
        .appendChild(lapItem);
}