var clickSound = new Audio("./sounds/click.mp3");
var buySound = new Audio("./sounds/buy.mp3");

function playSound(sound) {
    switch(sound) {
        case("click"): clickSound.play(); break;
        case("buy"): buySound.play(); break;
        default: {
            var data = {
                message: `Sound "${sound}" Not Found!`,
                timeout: 2000
            };
            snackbar.MaterialSnackbar.showSnackbar(data);
        }
    }
}
