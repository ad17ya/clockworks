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

function updateValue(key, value) {
    if(value < 0){
        value = 0;
        console.log("Positive numbers only");

    }

    if(key == "seconds"){
        if(value < 0){
            value = "0" + value;
        }

        if(value > 59){
            value = "59";
        }
    }

    $("#" +key).html(value || 0);
    timerObj[key] = value;

    console.log("Min", timerObj.minutes);
    console.log("Sec", timerObj.seconds);
}

//self calling function ()indicate the calling of the functions
(function detectChanges(key) {
    console.log("detect changes");
    let input = "#" + key +"-input";

    $(input).change(function() {
        updateValue(key, $(input).val());
    });

    $(input).keyup(function() {
        updateValue(key, $(input).val());
    });

    return arguments.callee;

})("minutes")("seconds");
