function runOnTimes(cb, t) {
	document.getElementById("dank").innerHTML = "Program Started!";
    (function loop() {
 
        if (t(10, 10) === true || t(11, 10) === true || t(13, 0) === true || t(14, 0) === true || t(15, 5) === true || t(11, 0) === true || t(12, 0) === true || t(13, 45) === true || t(14, 45) === true || t(15, 50) === true || t(8, 30) === true) {
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
	var audio = new Audio('bell.mp3');
	audio.play();
}

runOnTimes(playBell, getTime);

