var clickFactoryCard = document.getElementById("clickFactoryCard");
var clickFactoryCardTitle = document.getElementById("clickFactoryCardTitle");
var clickFactoryCardPrice = document.getElementById("clickFactoryCardPrice");

var clickFactoryLevel = 0;
var clickFactoryInterval;

var clickFactoryLevelData = [
    {level: 1, price: 1000, perTwentySeconds: 1000},
    {level: 2, price: 2000, perTwentySeconds: 1500},
    {level: 3, price: 3000, perTwentySeconds: 2000},
    {level: 4, price: 5000, perTwentySeconds: 3000},
    {level: 5, price: 8000, perTwentySeconds: 5000}
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
        }else {
            var nextClickFactoryLevel = clickFactoryLevel + 1;
            var nextclickFactoryPrice = clickFactoryLevelData[clickFactoryLevel].price;

            clickFactoryCardTitle.innerText = "Click Factory (Lvl. " + nextClickFactoryLevel + ")";
            clickFactoryCardPrice.innerText = "Buy (" + nextclickFactoryPrice  + " Clicks)"
        }

        console.log(`Bought Upgrade: Click Factory, Level: ${clickFactoryLevel}.`);
    }else {
        var data = {
            message: "Not enough clicks!",
            timeout: 2000
        };
        snackbar.MaterialSnackbar.showSnackbar(data);
    }
}
