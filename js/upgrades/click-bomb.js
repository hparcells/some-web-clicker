var clickBombCard = document.getElementById("clickBombCard");
var clickBombCardTitle = document.getElementById("clickBombCardTitle");
var clickBombCardPrice = document.getElementById("clickBombCardPrice");

var clickBombLevel = 0;
var clickBombInterval;

var clickBombLevelData = [
    {level: 1, price: 100, perFiveSeconds: 15},
    {level: 2, price: 250, perFiveSeconds: 25},
    {level: 3, price: 750, perFiveSeconds: 35},
    {level: 4, price: 1500, perFiveSeconds: 45},
    {level: 4, price: 2500, perFiveSeconds: 55}
];

function buyClickBomb() {
    if(clicks >= clickBombLevelData[clickBombLevel].price) {   
        clicks -= clickBombLevelData[clickBombLevel].price;
        clickCount.innerText = `Clicks: ${clicks}`;
        
        clearInterval(clickBombInterval);
        var clickBombNewPerFiveSeconds = clickBombLevelData[clickBombLevel].perFiveSeconds
        clickBombInterval = setInterval(function() {
            clicks += clickBombNewPerFiveSeconds;
            clickCount.innerText = `Clicks: ${clicks}`;
        }, 5000);
        
        clickBombLevel++;
        
        if(clickBombLevel >= clickBombLevelData.length) {
            clickBombCard.style.display = "none";
        }else {
            var nextClickBombLevel = clickBombLevel + 1;
            var nextclickBombPrice = clickBombLevelData[clickBombLevel].price;

            clickBombCardTitle.innerText = "Click Bomb (Lvl. " + nextClickBombLevel + ")";
            clickBombCardPrice.innerText = "Buy (" + nextclickBombPrice  + " Clicks)"
        }

        console.log(`Bought Upgrade: Click Bomb, Level: ${clickBombLevel}.`);
    }else {
        var data = {
            message: "Not enough clicks!",
            timeout: 2000
        };
        snackbar.MaterialSnackbar.showSnackbar(data);
    }
}
