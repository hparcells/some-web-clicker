var clicks = 0;
var perClick = 1;

function clickHandler() {
  
  $("#clicker_text").html(`${clicks}`);
  
  $("#clicker_button").click(function (ele) {
    if(ranNum(1, 10) == 10) {
      clicks += perClick * 2;
      click();
      
      $("#clicker_text").html(`${clicks}`);
    }else{
      clicks += perClick;
      click();
      
      $("#clicker_text").html(`${clicks}`);
    }
  });
}

function ranNum(min, max) {
  return Math.random() * (max - min) + min;
}
