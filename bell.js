function runOnTimes(cb, t) {
	document.getElementById("dank").innerHTML = "Program started!";
    (function loop() {
 
        if (t(10, 0) || t(10, 10) === true || t(11, 10) === true || t(13, 0) === true || t(14, 0) === true || t(15, 5) === true || t(11, 0) === true || t(12, 0) === true || t(13, 45) === true || t(14, 45) === true || t(15, 50) === true || t(15, 0) === true || t(17, 15) === true || t(12, 50) === true ){
            cb(); 
        }
        now = new Date();                  // allow for time passing
        var delay = 60000 - (now % 60000); // exact ms to next minute interval
        setTimeout(loop, delay);
    })();
}

function getTime(h, m) {
	var d = new Date();
	if(d.getHours() === h && d.getMinutes() === m){
		return true;
	}
	return false;
}

function playBell() {
	console.log("playing music..."); 
	var d = new Date();
	document.getElementById("dank").innerHTML = "Program last run at " + d.getHours() + ":" + d.getMinutes(); 
	var audio = new Audio('bell.mp3');
	audio.play();
}

runOnTimes(playBell, getTime);

