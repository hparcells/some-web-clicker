var statsDialog = document.getElementById("statsDialog");
var highestClicksText = document.getElementById("highestClicks");
var totalClicksText = document.getElementById("totalClicks");
var upgradesBoughtText = document.getElementById("upgradesBought");

var highestClicks = 0;
var totalClicks = 0;
var upgradesBought = 0;

function showStats() {
    highestClicksText.innerText = "Highest Amount of Clicks: " + highestClicks;
    totalClicksText.innerText = "Total Mouse Clicks: " + totalClicks;
    upgradesBoughtText.innerText = "Upgrades Bought: " + upgradesBought;

    statsDialog.style.display = "block";

    document.getElementById("statsOkay").addEventListener("click", function() {
        statsDialog.style.display = "none";
    });
}
