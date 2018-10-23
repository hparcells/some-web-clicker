var perClickCard = document.getElementById("perClickCard");
var perClickCardTitle = document.getElementById("perClickCardTitle");
var perClickCardPrice = document.getElementById("perClickCardPrice");

var perClickLevel = 0;

var perClickLevelData = [
    {level: 1, price: 50, perClick: 2},
    {level: 2, price: 200, perClick: 3},
    {level: 3, price: 500, perClick: 5}
];

function buyPerClick() {
    if(clicks >= perClickLevelData[perClickLevel].price) {
        clicks -= perClickLevelData[perClickLevel].price;
        clickCount.innerText = `Clicks: ${clicks}`;

        perClick = perClickLevelData[perClickLevel].perClick;

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
