var clicker = document.getElementById("clicker");
var perClickCard = document.getElementById("perClickCard");
var perClickCardTitle = document.getElementById("perClickCardTitle");
var perClickCardPrice = document.getElementById("perClickCardPrice");

var perClickLevel = 0;

var perClickLevelData = [
    {level: 1, price: 50, perClick: 2},
    {level: 2, price: 200, perClick: 3},
    {level: 3, price: 500, perClick: 5},
    {level: 4, price: 1000, perClick: 7},
    {level: 5, price: 2000, perClick: 10},
    {level: 6, price: 2500, perClick: 15},
    {level: 7, price: 5000, perClick: 20},
    {level: 8, price: 7500, perClick: 25},
    {level: 9, price: 10000, perClick: 50},
    {level: 10, price: 15000, perClick: 75},
    {level: 11, price: 25000, perClick: 100}
];

function buyPerClick() {
    if(clicks >= perClickLevelData[perClickLevel].price) {
        clicks -= perClickLevelData[perClickLevel].price;
        clickCount.innerText = `Clicks: ${clicks}`;

        perClick = perClickLevelData[perClickLevel].perClick;
        clicker.innerText = "+" + perClick + " Clicks";

        perClickLevel++;
        
        if(perClickLevel >= perClickLevelData.length) {
            perClickCard.style.display = "none";
        }else {
            var nextPerClickLevel = perClickLevel + 1;
            var nextPerClickPrice = perClickLevelData[perClickLevel].price;

            perClickCardTitle.innerText = "Per Click (Lvl. " + nextPerClickLevel + ")";
            perClickCardPrice.innerText = "Buy (" + nextPerClickPrice + " Clicks)"
        }

        console.log(`Bought Upgrade: Per Click, Level: ${perClickLevel}`);
    }else {
        var data = {
            message: "Not enough clicks!",
            timeout: 2000
        };
        snackbar.MaterialSnackbar.showSnackbar(data);
    }
}
