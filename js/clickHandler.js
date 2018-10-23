var clicks = 0;
var perClick = 1;

var clickCount = document.getElementById("clickCount");

document.getElementById("clicker").addEventListener("click", function() {
    document.getElementById("clickCount").innerText = `Clicks: ${++clicks}`;
});
