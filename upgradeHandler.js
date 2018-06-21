function upgradeHandler() {
  //Two Per Click
  $("#two_per_upgrade").click(function (ele) {
    if (clicks >= 50) {
      $("#two_per").hide()
      $("#five_per").show()

      clicks -= 50;
      perClick = 2;
      
      buy(); 
      $("#clicker_text").html(`${clicks}`);
    }else{
      return;
    }
  });

  //Five Per Click
  $("#five_per_upgrade").click(function (ele) {
    if (clicks >= 200) {
      $("#five_per").hide();
      $("#seven_per").show();
      $("#auto_1").show();

      clicks -= 200;
      perClick = 5;
      
      buy();
      $("#clicker_text").html(`${clicks}`);
    }else{
      return;
    }
  });

  //Seven Per Click
  $("#seven_per_upgrade").click(function (ele) {
    if (clicks >= 500) {
      $("#seven_per").hide();
      $("#ten_per").show();
      $("#click_bomb_1").show();

      clicks -= 500;
      perClick = 7;
      
      buy();
      $("#clicker_text").html(`${clicks}`);
    }else{
      return;
    }
  });

  //Ten Per Click
  $("#ten_per_upgrade").click(function (ele) {
    if (clicks >= 2000) {
      $("#ten_per").hide();

      clicks -= 2000;
      perClick = 10;
      
      buy();
      $("#clicker_text").html(`${clicks}`);
    }else{
      return;
    }
  });

  //Auto Clicker: Tier 1
  $("#auto_1").click(function (ele) {
    if (clicks >= 700) {
      $("#auto_1").hide();
      $("#auto_2").show();

      clicks -= 700;
      autoclicker();
      
      buy();
      $("#clicker_text").html(`${clicks}`);
      $("#auto_stat").html(`Auto Clicker Tier 1: ~5 Clicks per Second`);
    }else{
      return;
    }
  });

  //Auto Clicker: Tier 2
  $("#auto_2").click(function (ele) {
    if (clicks >= 1200) {
      $("#auto_2").hide();

      clicks -= 1200;
      inc += 2;

      buy();
      $("#clicker_text").html(`${clicks}`);
      $("#auto_stat").html(`Auto Clicker Tier 2: ~10 Clicks per Second`);
    }else{
      return;
    }
  });

  //Auto Clicker: Tier 999
  $("#auto_999").click(function (ele) {
    if (clicks >= 1000000) {
      $("#auto_999").hide();

      clicks -= 1000000;
      inc = 9999999;

      buy();
      $("#clicker_text").html(`${clicks}`);
      $("#auto_stat").html(`Auto Clicker Tier 999: Too Many Clicks per Second`);
    }else{
      return;
    }
  });

  //Click Bomb: Tier 1
  $("#click_bomb_1").click(function (ele) {
    if (clicks >= 666) {
      $("#click_bomb_1").hide();
      $("#click_bomb_2").show();
      $("#click_factory_1").show();

      clicks -= 666;
      clickBomb();
      
      buy();
      $("#clicker_text").html(`${clicks}`);
      $("#bomb_stat").html(`Click Bomb Tier 1: 100 Clicks Every 10 Seconds`);
    }else{
      return;
    }
  });

  //Click Bomb: Tier 2
  $("#click_bomb_2").click(function (ele) {
    if (clicks >= 2000) {
      $("#click_bomb_2").hide();

      clicks -= 2000;
      bombInc += 100
      
      buy();
      $("#clicker_text").html(`${clicks}`);
      $("#bomb_stat").html(`Click Bomb Tier 2: 200 Clicks Every 10 Seconds`);
    }else{
      return;
    }
  });

  //Click Factory: Tier 1
  $("#click_factory_1").click(function (ele) {
    if (clicks >= 1000) {
      $("#click_factory_1").hide();

      clicks -= 1000;
      clickFactory();
      
      buy();
      $("#clicker_text").html(`${clicks}`);
      $("#factory_stat").html(`Click Factory Tier 1: 10 Clicks Every 5 Seconds`);
    }else{
      return;
    }
  });
}
