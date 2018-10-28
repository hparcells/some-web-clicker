var snackbar = document.getElementById("snackbar");

function buy(upgrade) {
    switch(upgrade) {
        case("perClick"): buyPerClick(); break;
        case("clickBomb"): buyClickBomb(); break;
        case("clickFactory"): buyClickFactory(); break;
        case("clickMiner"): buyClickMiner(); break;
        case("autoClicker"): buyAutoClicker(); break;
        default: {
            var data = {
                message: `Upgrade "${upgrade}" Not Found!`,
                timeout: 2000
            };
            snackbar.MaterialSnackbar.showSnackbar(data);
        }
    }
}
