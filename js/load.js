window.onload = function() {
    console.log("Loading...");

    loadGame();

    setInterval(function() {
        saveGame();
    }, 60000);

    console.log("Ready!");
};
