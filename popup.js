document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("status").innerHTML = chrome.extension.getBackgroundPage().document.getElementById("dank").innerHTML;
});