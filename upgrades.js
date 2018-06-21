let inc = 5;

function autoclicker() {
    clicks += inc / 10;
    clicks = Math.round(10 * clicks) / 10;
    $("#clicker_text").html(`${clicks}`);
    setTimeout(autoclicker, 100);
}

clicks = 0;
bombInc = 100;
timer = 10000;

function clickBomb() {
    clicks += bombInc;
    $("#clicker_text").html(`${clicks}`);
    
    setTimeout(clickBomb, timer);
}

clicks = 0;
inc = 10;
wait = 5000

function clickFactory() {
    clicks += inc;
    $("#clicker_text").html(`${clicks}`);
    
    setTimeout(clickFactory, wait)
}
