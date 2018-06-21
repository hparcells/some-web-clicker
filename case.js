openSpeed = 100;

function getCase() {
    
}

function openCase() {
    if(openSpeed > 2000) {
        getItem();
    }

    var displayFive = Math.floor((Math.random() * 5) + 1);
    var random = Math.floor((Math.random() * 100) + 1);

    switch(displayFive) {
        case 1: {
            console.log("Bomb Click Sound");
        }

        case 2: {
            console.log("Rainbow Click Sound");
        }

        case 3: {
            console.log("Airhorn Click Sound");
        }

        case 4: {
            console.log("Double Clicks");
        }

        case 5: {
            console.log("Triple Clicks");
        }

    }

    openSpeed += 100;
    setTimeout(openCase, openSpeed);
}

function getItem() {
    if(random < 50) {
        if(random > 40) {
            //Airhorn
        }else if(random > 20 && random < 40) {
            //Rainbow Click
        }else{
            //Bomb Click
        }
    }else if(random > 85 && random < 95) {
        //Get Double Clicks
    }else(random > 95) {
        //Get Triple Clicks
    }
}