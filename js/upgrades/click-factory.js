var clickFactoryCard = document.getElementById("clickFactoryCard");
var clickFactoryCardTitle = document.getElementById("clickFactoryCardTitle");
var clickFactoryCardPrice = document.getElementById("clickFactoryCardPrice");
var clickFactorySpacer = document.getElementById("clickFactorySpacer");

var clickFactoryLevel = 0;
var clickFactoryInterval;

var clickFactoryLevelData = [
    {level: 1, price: 1000, perTwentySeconds: 500},
    {level: 2, price: 2000, perTwentySeconds: 1000},
    {level: 3, price: 3000, perTwentySeconds: 1500},
    {level: 4, price: 5000, perTwentySeconds: 2000},
    {level: 5, price: 8000, perTwentySeconds: 2500}
];

function buyClickFactory() {
    if(clicks >= clickFactoryLevelData[clickFactoryLevel].price) {
        clicks -= clickFactoryLevelData[clickFactoryLevel].price;
        clickCount.innerText = `Clicks: ${clicks}`;

        clearInterval(clickFactoryInterval);
        var clickFactoryNewPerTwentySeconds = clickFactoryLevelData[clickFactoryLevel].perTwentySeconds;
        clickFactoryInterval = setInterval(function() {
            clicks += clickFactoryNewPerTwentySeconds;
            clickCount.innerText = `Clicks: ${clicks}`;
        }, 20000);

        clickFactoryLevel++;

        if(clickFactoryLevel >= clickFactoryLevelData.length) {
            clickFactoryCard.style.display = "none";
            clickFactorySpacer.style.display = "none";
        }else {
            var nextClickFactoryLevel = clickFactoryLevel + 1;
            var nextClickFactoryPrice = clickFactoryLevelData[clickFactoryLevel].price;

            clickFactoryCardTitle.innerText = "Click Factory (Lvl. " + nextClickFactoryLevel + ")";
            clickFactoryCardPrice.innerText = "Buy (" + nextClickFactoryPrice  + " Clicks)";
        }

        upgradesBought++;
        
        playSound("buy");
        console.log(`Bought Upgrade: Click Factory, Level: ${clickFactoryLevel}.`);
    }else {
        var data = {
            message: "Not enough clicks!",
            timeout: 2000
        };
        snackbar.MaterialSnackbar.showSnackbar(data);
    }
}

function loadClickFactory() {
    if(clickFactoryLevel === 0) {
        return;
    }

    var index = clickFactoryLevel - 1;
    var clickFactoryNewPerTwentySeconds = clickFactoryLevelData[index].perTwentySeconds;
    clickFactoryInterval = setInterval(function() {
        clicks += clickFactoryNewPerTwentySeconds;
        clickCount.innerText = `Clicks: ${clicks}`;
    }, 20000);

    if(clickFactoryLevel >= clickFactoryLevelData.length) {
        clickFactoryCard.style.display = "none";
        clickFactorySpacer.style.display = "none";
    }else {
        var nextClickFactoryLevel = clickFactoryLevel + 1;
        var nextClickFactoryPrice = clickFactoryLevelData[clickFactoryLevel].price;

        clickFactoryCardTitle.innerText = "Click Factory (Lvl. " + nextClickFactoryLevel + ")";
        clickFactoryCardPrice.innerText = "Buy (" + nextClickFactoryPrice  + " Clicks)";
    }
}
