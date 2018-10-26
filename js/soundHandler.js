var clickSound = new Audio("./sounds/click.mp3");
var buySound = new Audio("./sounds/buy.mp3");

function playSound(sound) {
    if(innerWidth >= 840) {
        new Audio(`./sounds/${sound}.mp3`).play();
    }
}
