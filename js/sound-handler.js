function playSound(sound) {
    if(innerWidth >= 840) {
        switch(sound) {
            case("defaultClick"): {
                new Audio(`./sounds/click-sounds/${sound}.mp3`).play();
            }
            break;
            case("buy"): {
                new Audio(`./sounds/${sound}.mp3`).play();
            }
            break;
            default: {
                var data = {
                    message: `Sound "${sound}" Not Found!`,
                    timeout: 2000
                };
                snackbar.MaterialSnackbar.showSnackbar(data);
            }
        }
    }
}
