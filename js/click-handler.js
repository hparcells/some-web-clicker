var clickCount = document.getElementById("clickCount");

var clicks = 0;
var perClick = 1;
var clickSound = "defaultClick";

document.getElementById("clicker").addEventListener("click", function() {
    clicks += perClick;
    clickCount.innerText = `Clicks: ${clicks}`;
    
    totalClicks++;
    if(clicks > highestClicks) {
        highestClicks = clicks;
    }

    playSound(clickSound);
});
