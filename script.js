let timerObj = {
    minutes: 0,
    seconds: 0,
    timerId: 0
}

function soundAlarm() {
    let amount = 3;
    let audio = new Audio("sound.mp3");


    // audio.play();

    function playSound() {
        audio.pause();
        audio.currentTime = 0;
        audio.play();

    }

    for (let i = 0; i < amount;  i++) {
        setTimeout(playSound, 1200 * i);
    }
}
