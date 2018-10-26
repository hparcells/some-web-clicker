var deleteSaveDialog = document.getElementById("deleteSaveDialog");

function saveGame() {
    console.log("Saving...");

    // Clicks
    localStorage.setItem("clicks", clicks);

    // Upgrades
    localStorage.setItem("perClickLevel", perClickLevel);
    localStorage.setItem("clickBombLevel", clickBombLevel);
    localStorage.setItem("clickFactoryLevel", clickFactoryLevel);
    localStorage.setItem("clickMinerLevel", clickMinerLevel);
    localStorage.setItem("autoClickerLevel", autoClickerLevel);

    // Stats
    localStorage.setItem("highestClicks", highestClicks);
    localStorage.setItem("totalClicks", totalClicks);
    localStorage.setItem("upgradesBought", upgradesBought)

    console.log("Saved!");
    console.log(localStorage);
}

function loadGame() {
    if(typeof(localStorage.clicks) === "undefined") {
        console.log("No saved data, not loading data.");
        return;
    }

    console.log("Found save data, loading...");

    // Clicks
    clicks = Number(localStorage.clicks);
    clickCount.innerText = `Clicks: ${clicks}`;

    // Upgrades

    // Stats
    highestClicks = Number(localStorage.highestClicks);
    totalClicks = Number(localStorage.totalClicks);
    upgradesBought = Number(localStorage.upgradesBought);

    console.log("Save data loaded!");
}

function deleteSave() {
    deleteSaveDialog.showModal();

    document.getElementById("yesDelete").addEventListener('click', function() {
        console.log("Deleting save...");
        localStorage.clear();
        console.log("Save deleted, reloading...");
        location.reload();
    });

    document.getElementById("noDelete").addEventListener('click', function() {
        deleteSaveDialog.close();
    });
}