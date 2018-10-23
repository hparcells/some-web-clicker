var bombCard = document.getElementById("bombCard");
var bombCardTitle = document.getElementById("bombCardTitle");
var bombCardPrice = document.getElementById("bombCardPrice");

var bombLevel = 0;

var bombLevelData = [
    {level: 1, price: 100, perFiveSeconds: 15},
    {level: 2, price: 250, perFiveSeconds: 25}
];

function buyBomb() {
    if(clicks >= bombLevelData[bombLevel].price) {
        console.log("Bought Upgrade: Bomb");
        
        clicks -= bombLevelData[bombLevel].price;
        document.getElementById("clickCount").innerText = `Clicks: ${clicks}`;
        
        var bombNewPerFiveSeconds = bombLevelData[bombLevel].perFiveSeconds
        setInterval(function () {
            clicks += bombNewPerFiveSeconds;
            document.getElementById("clickCount").innerText = `Clicks: ${clicks}`;
        }, 5000);
        
        bombLevel++;
        
        if(bombLevel >= bombLevelData.length) {
            bombCard.style.display = "none";
        }else {
            var nextBombLevel = bombLevel + 1;
            var nextBombPrice = bombLevelData[bombLevel].price;

            bombCardTitle.innerText = "Click Bomb (Lvl. " + nextBombLevel + ")";
            bombCardPrice.innerText = "Buy (" + nextBombPrice + " Clicks)"
        }
    }else {
        var data = {
            message: "Not enough clicks!",
            timeout: 2000
        };
        snackbar.MaterialSnackbar.showSnackbar(data);
    }
}
