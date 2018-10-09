function saveCookie() {
    localStorage.setItem("clicks", clicks); 
}

function loadCookie() {
    if(typeof(localStorage.clicks) == "undefined") {
        clicks = 0;
    }else{
        clicks = parseInt(localStorage.clicks);
    }
}

function loadClicks() {
    $("#clicker_text").html(`${clicks}`);
}

function invis() {
    $("#five_per").hide();
    $("#seven_per").hide();
    $("#ten_per").hide();
    $("#auto_1").hide();
    $("#auto_2").hide();
    $("#auto_999").hide();
    $("#click_bomb_1").hide();
    $("#click_bomb_2").hide();
    $("#click_factory_1").hide();
}