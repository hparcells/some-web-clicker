var clicks = 0;
var perClick = 1;

var clickCount = document.getElementById("clickCount");

document.getElementById("clicker").addEventListener("click", function() {
    clicks += perClick;
    clickCount.innerText = `Clicks: ${clicks}`;
    
    totalClicks++;
    if(clicks > highestClicks) {
        highestClicks = clicks;
    }

    playSound("click");
});
