var mapOpen = false;
var coinsOnDay = [2000];
var requiredLesson = true;

var tutorial = true;
var forceLessons = true; //set to false to turn off forcing the lessons before ending day
// yayyyyyyyyy joevin played the game and liked it is he still playing it he was but i was like maybe we should stop (LOL) thats gooddd :)
//var tutorial1 = false;
//var tutorial2 = false;
//var tutorial3 = false; //test this laterhello woah this is so cool
//var tutorial4 = false;hello woah this is so cool
//var tutorial5 = false;hello woah this is so cool
//var tutorialWeather = false;ˆ åµ åˆˆ∆ˆ∆
//var tutorialAnalytics = false;ˆ åµ åˆˆ∆ˆ∆
//var tutorialGraphs = false; åµ åˆˆ∆ˆ∆ˆ
var day40sell = false;

//start
function startGame(){

  var page = document.getElementById("homepage");
  page.style.left = "-100%";
  document.body.style.backgroundColor = "#244944";

  //fix map glitch
  var first = document.getElementById("firstFive");
  var second = document.getElementById("secondFive");
  first.style.left = "-100%";
  second.style.left = "0%";
  first.style.left = "0px";
  second.style.left = "100%";

  for (var i = 2; i <= 10; i++) {
    var lesson = document.getElementById("lesson" + i);
    lesson.style.opacity = "40%";
    lesson.disabled = true;
  }

  drawAnalyticsLine();
  drawAnalyticsPie();
  drawStockGraphs();
  
  //disable end day button HEREEEEEEE LJY
  if (forceLessons){
    //console.log('CHECKPOINT A: disabled; forcelessons = true');
    document.getElementById("endTurnButton").disabled = true;
  }
  else {
    //console.log('CHECKPOINT B: enabled; forcelessons = false');
    document.getElementById("endTurnButton").disabled = false;
  }
  

  //tutorial 1/*
  /*if (tutorial1 == true) {
    var white = document.getElementById("whiteBlock");
    var t1 = document.getElementById('t1');
    white.style.visibility = "visible"; 
      white.style.opacity = "40%";
    setTimeout(() => { 
      t1.style.transitionTimingFunction = "ease-out";
      t1.style.transition = "1.5s";
      t1.style.left = "307.7px";
        setTimeout(() => {
          t1.style.transitionTimingFunction = "ease-in"; 
          t1.style.left = "-200%"; 
          white.style.visibility = "hidden";
        white.style.opacity = "0";
        }, 4000);
    }, 2000);
    document.getElementById("mapButton").disabled = false;
    tutorial1 = false;
  }*/

  //TUTORIAL 1
  if (tutorial == true) {
    var white = document.getElementById("whiteBlock");
    var t1 = document.getElementById('t1');
    white.style.visibility = "visible"; 
    white.style.opacity = "40%";
    //t1.style.transitionTimingFunction = "ease-out";
    t1.style.transitionDelay = "1.5s";
    
    t1.style.opacity = "1";
    t1.style.visibility = "visible";


    document.getElementById("mapButton").style.zIndex = "4";
  }


  //document.getElementById("tutDisable").disabled = "true"; 
  //tutDisable? jojo
}
//stop clouds

function stopClouds() {
  //document.getElementsByClassName("cloudsTitle").style.animationIterationCount = "0";
  //move clouds out of screen
  document.getElementById("cloudT1").classList.remove("cloudsTitle");
  document.getElementById("cloudT2").classList.remove("cloudsTitle");
  document.getElementById("cloudT3").classList.remove("cloudsTitle");
  document.getElementById("cloudT4").classList.remove("cloudsTitle");
  document.getElementById("cloudT5").classList.remove("cloudsTitle");

  document.getElementById("cloudT1").classList.add("cloudsGoAway");
  document.getElementById("cloudT2").classList.add("cloudsGoAway");
  document.getElementById("cloudT3").classList.add("cloudsGoAway");
  document.getElementById("cloudT4").classList.add("cloudsGoAway");
  document.getElementById("cloudT5").classList.add("cloudsGoAway");
}
//default music settings
document.getElementById("backgroundmusic").volume = 0.075;
document.getElementById("backgroundmusic").preload = "auto";


//music button
function muteMusic() {
  if(document.getElementById("backgroundmusic").muted == true){
    document.getElementById("backgroundmusic").muted = false;
    document.getElementById("muteimg").style.visibility = "hidden";
    document.getElementById("muteimg").style.opacity = "0";
    document.getElementById("soundimg").style.visibility = "visible";
    document.getElementById("soundimg").style.opacity = "1";
  } else if(document.getElementById("backgroundmusic").muted == false){
    document.getElementById("backgroundmusic").muted = true;
    document.getElementById("muteimg").style.visibility = "visible";
    document.getElementById("muteimg").style.opacity = "1";
    document.getElementById("soundimg").style.visibility = "hidden";
    document.getElementById("soundimg").style.opacity = "0";
  }
}


//info button
function openInfo() {
  document.getElementById("infoBox").style.visibility = "visible";
  document.getElementById("infoBox").style.opacity = "1";

  document.getElementById("whiteBlock").style.visibility = "visible";
  document.getElementById("whiteBlock").style.opacity = "40%";
}

function closeInfo() {
  document.getElementById("infoBox").style.visibility = "hidden";
  document.getElementById("infoBox").style.opacity = "0";

  document.getElementById("whiteBlock").style.visibility = "hidden";
  document.getElementById("whiteBlock").style.opacity = "0";
}
//to market
function openMarket(){
  var marketBox = document.getElementById("marketContainer");
  marketBox.style.left = "115px";
  moveCloudsAndStuff("in");

  //TUTORIAL 5
  if (tutorial == true) {
    var t4 = document.getElementById('t4');
    t4.style.transitionDelay = "0s";
    t4.style.visibility = "hidden";
    t4.style.opacity = "0";

    document.getElementById("marketButton").style.zIndex = "0";

    var white = document.getElementById("whiteBlock");
    var t5 = document.getElementById('t5');
    white.style.visibility = "visible"; 
    white.style.opacity = "40%";
    //t1.style.transitionTimingFunction = "ease-out";
    t5.style.transitionDelay = "1.5s";
    t5.style.opacity = "1";
    t5.style.visibility = "visible";
    
    
    document.getElementById("treeCard2").style.zIndex = "4";
  }
  
  checkTrees();

  if(tutorial){
    document.getElementById("treePriceBox2").className = "disabledPriceBox";
  }

  /*
    var backButt = backButtons[i];
    backButt.onclick = function(event) {
    var card = this.parentElement.parentElement;
    card.style.transform = "none";

    var treeNum;
    if(this.id.length == 13){
      treeNum = parseInt(this.id.charAt(4));
    } else {
      treeNum = parseInt(this.id.substring(4,6));
    }

    var frontContentID = "treeCardFront" + treeNum;
    document.getElementById(frontContentID).style.opacity = "1";
    document.getElementById(frontContentID).style.visibility = "visible";
  }
  */
  
  /*
  if (tutorial4 == true) {
    var white = document.getElementById("whiteBlock");
    var t4 = document.getElementById('t4');
    t4.style.opacity = "0";
    t4.style.visibility = "hidden";

    white.style.transitionDelay = "0s";
    white.style.visibility = "visible";
    white.style.opacity = "40%";

    setTimeout(() => { 
      t4.style.transition = "0.5s";
      t4.style.opacity = "1";
      t4.style.visibility = "visible";
        setTimeout(() => {
          white.style.transitionDelay = "0s";
          t4.style.transitionTimingFunction = "ease-in"; 
          t4.style.opacity ="0";
          t4.style.visibility = "hidden";
          white.style.visibility = "hidden";
          white.style.opacity = "0";
        }, 4000);
    }, 2000);
    tutorial4 = false;
  }*/
}

//back to homescreen from market
document.getElementById("backButtonMarket").onclick = function(event) {
  var marketBox = document.getElementById("marketContainer");
  marketBox.style.left = "-100%";
  moveCloudsAndStuff("out");

  var cards = document.getElementsByClassName("treeCardInner");
  for(var i = 0; i < 24; i++){
    cards[i].style.transform = "none";
    var treeFrontID = "treeCardFront" + (i+1);
    document.getElementById(treeFrontID).style.opacity = "1";
    document.getElementById(treeFrontID).style.visibility = "visible";
  }

  /*
  if (tutorialWeather == true) {
    var white = document.getElementById("whiteBlock");
    var tw = document.getElementById('tw');
    tw.style.opacity = "0";
    tw.style.visibility = "hidden";

    white.style.transitionDelay = "1s";
    white.style.visibility = "visible";
    white.style.opacity = "40%";

    setTimeout(() => { 
      tw.style.transition = "0.5s";
      tw.style.opacity = "1";
      tw.style.visibility = "visible";
        setTimeout(() => {
          white.style.transitionDelay = "0s";
          tw.style.transitionTimingFunction = "ease-in"; 
          tw.style.opacity ="0";
          tw.style.visibility = "hidden";
          white.style.visibility = "hidden";
          white.style.opacity = "0";
        }, 5000);
    }, 2000);
    tutorialWeather = false;
    document.getElementById("weatherButton").disabled = false;
  }*/
  //TUTORIAL 7
  if (tutorial == true) {
    var t7 = document.getElementById('t7');
    document.getElementById("backButtonMarket").style.zIndex = "0";

    var white = document.getElementById("whiteBlock");
    white.style.visibility = "visible"; 
    white.style.opacity = "40%";
    //t1.style.transitionTimingFunction = "ease-out";
    t7.style.transitionDelay = "0.5s";
    t7.style.opacity = "1";
    t7.style.visibility = "visible";
    document.getElementById("cancelButton").className = "enabledCancel";
    
    setTimeout(() => { 
      document.getElementById("treeIsland1").style.zIndex = "4";
      t7.style.transitionDelay = "0s";
    }, 500);
  }
}

//to weather
function openWeather(){
  var weatherBox = document.getElementById("weatherContainer");
  weatherBox.style.left = "115px";
  moveCloudsAndStuff("in");

  if(tutorial){
    document.getElementById("t11").style.opacity = "0";
    document.getElementById("t11").style.visibility = "hidden";
    document.getElementById("weatherButton").style.zIndex = "0";
    document.getElementById("weatherContainer").style.zIndex = "10";
  }
}

//back to homescreen from Weather
document.getElementById("backButtonWeather").onclick = function(event) {
  var weatherBox = document.getElementById("weatherContainer");
  weatherBox.style.left = "-100%";
  moveCloudsAndStuff("out");

  if(tutorial){
    document.getElementById("weatherContainer").style.zIndex = "0";
    document.getElementById("t12").style.opacity = "1";
    document.getElementById("t12").style.visibility = "visible";
    document.getElementById("analyticsButton").style.zIndex = "10";
  }
}

//to analytics
function openAnalytics(){
  var analyticsBox = document.getElementById("analyticsContainer");
  analyticsBox.style.left = "115px";
  moveCloudsAndStuff("in");
  
  if(tutorial){
    document.getElementById("t12").style.opacity = "0";
    document.getElementById("t12").style.visibility = "hidden";
    document.getElementById("analyticsButton").style.zIndex = "0";
    document.getElementById("analyticsContainer").style.zIndex = "10";
    document.getElementById("t13").style.transitionDelay = "1s";
    document.getElementById("t13").style.opacity = "1";
    document.getElementById("t13").style.visibility = "visible";

    document.getElementById("endTurnButton").classList.add("tutEndTurnButt");
  }
}

//back to homescreen from Analytics
document.getElementById("backButtonAnalytics").onclick = function(event) {
  var analyticsBox = document.getElementById("analyticsContainer");
  analyticsBox.style.left = "-100%";
  moveCloudsAndStuff("out");

  if(tutorial){
    document.getElementById("t13").style.transitionDelay = "0s";
    document.getElementById("t13").style.opacity = "0";
    document.getElementById("t13").style.visibility = "hidden";
    document.getElementById("t14").style.opacity = "1";
    document.getElementById("t14").style.visibility = "visible";
    document.getElementById("check14").style.opacity = "1";
    document.getElementById("check14").style.visibility = "visible";
    document.getElementById("endTurnButton").style.zIndex = "10";
  }
}

//to map
function openMap() {
  mapOpen = true;

  document.getElementById("infoButton").style.visibility = "hidden";
  document.getElementById("infoButton").style.opacity = "0";
  
  var homeScreen = document.getElementById("homescreen");
  homeScreen.style.left = "100%";

  var gameScreen = document.getElementById("game");
  var day = document.getElementById("day");
  var money = document.getElementById("moneyDiv");
  var home = document.getElementById("homeButton");
  var mapScreen = document.getElementById("mapscreen");

  gameScreen.style.background = "#294560";
  gameScreen.style.backgroundImage = "url('Stuff/stars.png')";
  day.style.color = "white";
  document.body.style.backgroundColor = "#101C28";
  money.style.backgroundColor = "#486785";
  home.style.left = "850px";
  mapScreen.style.left = "0px";

  moveDarkClouds("in");
  //document.getElementById("musicButton").style.transition = "2s";
  //document.getElementById("musicButton").style.backgroundColor = "#486785";
  //document.getElementById("musicButton").style.transition = "0.3s";
  document.getElementById("soundimg").style.color = "#2D4963";
  document.getElementById("muteimg").style.color = "#2D4963";

  //document.getElementById("waterBottle").style.color = "#2D4963";
  //document.getElementById("waterBottle").style.color = "#2D4963";
  
  /*
  if (tutorial2 == true) {
    var white = document.getElementById("whiteBlock");
    var t2 = document.getElementById('t2');
    t2.style.opacity = "0";
    t2.style.visibility = "hidden";

    white.style.transitionDelay = "2s";
    white.style.visibility = "visible";
    white.style.opacity = "40%";

    setTimeout(() => { 
      t2.style.transition = "0.5s";
      t2.style.opacity = "1";
      t2.style.visibility = "visible";
        setTimeout(() => {
          white.style.transitionDelay = "0s";
          t2.style.transitionTimingFunction = "ease-in"; 
          t2.style.opacity ="0";
          t2.style.visibility = "hidden";
          white.style.visibility = "hidden";
          white.style.opacity = "0";
        }, 4000);
    }, 2000);
    tutorial2 = false;

    //enables market button
    document.getElementById("marketButton").disabled = false;
  }*/

  //TUTORIAL 2
  if (tutorial == true) {
    
    document.getElementById("mapButton").style.zIndex = "0";

    var t1 = document.getElementById('t1');
    t1.style.visibility = "hidden";
    t1.style.opacity = "0";

    var white = document.getElementById("whiteBlock");
    var t2 = document.getElementById('t2');
    white.style.visibility = "visible"; 
    white.style.opacity = "40%";
    //t1.style.transitionTimingFunction = "ease-out";
    t2.style.transition = "0.5s";
    t2.style.opacity = "1";
    t2.style.visibility = "visible";

    document.getElementById("lesson1").style.zIndex = "10";
  }
}

//back to homescreen from Map
document.getElementById("homeButton").onclick = function(event) {
  mapOpen = false;

  var homeScreen = document.getElementById("homescreen");
  homeScreen.style.left = "0%";

  var gameScreen = document.getElementById("game");
  var day = document.getElementById("day");
  var money = document.getElementById("moneyDiv");
  var home = document.getElementById("homeButton");
  var mapScreen = document.getElementById("mapscreen");

  //TUTORIAL 4
  if (tutorial == true) {

    var t3 = document.getElementById('t3');
    t3.style.transitionDelay = "0s";
    t3.style.visibility = "hidden";
    t3.style.opacity = "0";

    var white = document.getElementById("whiteBlock");
    var t4 = document.getElementById('t4');
    white.style.visibility = "visible";
    white.style.opacity = "40%";
    //t1.style.transitionTimingFunction = "ease-out";
    t4.style.transitionDelay = "0.5s";
    t4.style.opacity = "1";
    t4.style.visibility = "visible";

    document.getElementById("homeButton").style.zIndex = "0";
    document.getElementById("marketButton").style.zIndex = "10";
  }

  gameScreen.style.background = "radial-gradient(79.08% 79.08% at 50% 50%, rgba(255, 255, 255, 0) 0%, #69CCC0 100%), #A1F1E8";
  gameScreen.style.backgroundImage = "none";
  day.style.color = "#196B62";
  document.body.style.backgroundColor = "#244944";
  money.style.backgroundColor = "#5DAFA6";
  //home.style.left = "100px";
  mapScreen.style.left = "-100%";
  moveDarkClouds("out");

  document.getElementById("soundimg").style.color = "#ADEDE6";
  document.getElementById("muteimg").style.color = "#ADEDE6";

  //document.getElementById("waterBottle").style.color = "#ADEDE6";
  //document.getElementById("waterBottle").style.color = "#ADEDE6";

  document.getElementById("infoButton").style.visibility = "visible";
  document.getElementById("infoButton").style.opacity = "1";

  /*
  if (tutorial3 == true) {
    var white = document.getElementById("whiteBlock");
    var t3 = document.getElementById('t3');
    t3.style.opacity = "0";
    t3.style.visibility = "hidden";

    //document.getElementById("marketButton").style.zIndex = "5"; NOT WORKING

    white.style.transitionDelay = "0s";
    white.style.visibility = "visible";
    white.style.opacity = "40%";

    document.getElementById("mapButton").style.zIndex = "0";

    setTimeout(() => { 
      t3.style.transition = "0.5s";
      t3.style.opacity = "1";
      t3.style.visibility = "visible";
        setTimeout(() => {
          white.style.transitionDelay = "0s";
          t3.style.transitionTimingFunction = "ease-in"; 
          t3.style.opacity ="0";
          t3.style.visibility = "hidden";
          white.style.visibility = "hidden";
          white.style.opacity = "0";
        }, 5000);
    }, 2000);
    tutorial3 = false;
  }*/

  if (day40sell == true) {
    //yeyeye
    var white = document.getElementById("whiteBlock");
    var sell = document.getElementById("sell");
    var sellBtn = document.getElementById("doneSell");

    white.style.visibility = "visible"; 
    white.style.opacity = "40%";
    white.style.transition = "1.5";
    //white.style.transitionDelay = "0.5s";

    //sell.style.transitionDelay = "1.5s";
    //sellBtn.style.transitionDelay = "1.5s";
    
    /*
    setTimeout(() => { 
      sell.style.transitionTimingFunction = "ease-out";
      sell.style.transition = "1.5s";
      sell.style.left = "322px";
        setTimeout(() => {
          sell.style.transitionTimingFunction = "ease-in"; 
          sell.style.left = "-200%"; 
          white.style.visibility = "hidden";
          white.style.opacity = "0";
        }, 4s000);
    }, 2000);*/
    
    sell.style.opacity = "1";
    sell.style.visibility = "visible";
    sellBtn.style.opacity = "1";
    sellBtn.style.visibility = "visible";
    //document.getElementById("check14").style.opacity = "1";
    //document.getElementById("check14").style.visibility = "visible";
  }
}

function closeSellCircle() {
  
  var sell = document.getElementById("sell");
  var sellBtn = document.getElementById("doneSell");

  sell.style.transitionDelay = "0s";
  sellBtn.style.transitionDelay = "0s";
  
  document.getElementById("sell").style.visibility = "hidden";
  document.getElementById("sell").style.opacity = "0";
  document.getElementById("doneSell").style.opacity = "0";
  document.getElementById("doneSell").style.visibility = "hidden";
  document.getElementById("whiteBlock").style.visibility = "hidden";
  document.getElementById("whiteBlock").style.opacity = "0";
}

function nextDay(){
  today++;
  
  console.log(today);
  
  coinsOnDay.push(coins);
  //alert(coinsOnDay[today-1]); //testing
  firstPage = true; // var declared in map.js

  //console.log('CHECKPOINT FIX: disabled');
  document.getElementById("endTurnButton").disabled = true;


  for(var i = 0; i < trees.length; i++){
    trees[i][2] = stockPrices[i][today+10-1];
    var treePriceID = "treePriceText" + (i+1);
    document.getElementById(treePriceID).innerHTML = trees[i][2];
    var arrowID = "treeChangeArrow" + (i+1);
    if(stockPrices[i][today+10-1] > stockPrices[i][today+10-2]){
      document.getElementById(arrowID).style.visibility = "visible";
      document.getElementById(arrowID).src = "Stuff/greenUp.svg";
    } else if(stockPrices[i][today+10-1] < stockPrices[i][today+10-2]){
      document.getElementById(arrowID).style.visibility = "visible";
      document.getElementById(arrowID).src = "Stuff/redDown.svg";
    } else {
      document.getElementById(arrowID).style.visibility = "hidden";
    }
  } 
  // for me (o.o)
  /*
  for (var i = 2; i <= 10; i++) {
    var lesson = document.getElementById("lesson" + i);
    lesson.classList.remove("hov");
    lesson.style.opacity = "40%";
    lesson.disabled = true;
  }*/
  
  //reset positioning of map pages and darkClouds

  var first = document.getElementById("firstFive");
  var second = document.getElementById("secondFive");

  if (today < 10) {
    firstPage = true;
    first.style.left = "0px";
    second.style.left = "100%";

    var leftButton = document.getElementById("leftMapButton");
    leftButton.style.visibility = "hidden";
    leftButton.style.opacity = "0";

    var rightButton = document.getElementById("rightMapButton");
    rightButton.style.visibility = "visible";
    rightButton.style.opacity = "1";

    for (var b=1; b<=5; b++) {
      var firstCloud = document.getElementById('darkCloud'+b);
      var secondCloud = document.getElementById('darkCloud'+(b+5).toString());
      firstCloud.style.display = "none";
      secondCloud.style.display = "none";
      firstCloud.style.left = '-50%';
      secondCloud.style.left = '150%';
    }
  } else {
    firstPage = false;
    first.style.left = "-100%";
    second.style.left = "0px";

    var leftButton = document.getElementById("leftMapButton");
    leftButton.style.visibility = "visible";
    leftButton.style.opacity = "1";

    var rightButton = document.getElementById("rightMapButton");
    rightButton.style.visibility = "hidden";
    rightButton.style.opacity = "0";

    for (var b=1; b<=5; b++) {
      var firstCloud = document.getElementById('darkCloud'+b);
      var secondCloud = document.getElementById('darkCloud'+(b+5).toString());
      firstCloud.style.display = "none";
      secondCloud.style.display = "none";
      firstCloud.style.left = '-50%';
      secondCloud.style.left = '-50%';
    }
  }
  setTimeout(() => { 
    for (var b=1; b<=5; b++) {
      var firstCloud = document.getElementById('darkCloud'+b);
      var secondCloud = document.getElementById('darkCloud'+(b+5).toString());
      firstCloud.style.display = "block";
      secondCloud.style.display = "block";
    }
  }, 2000);

  requiredLesson = false; //will change to true if new day has required lesson
  
  if (today == 2) {
    requiredLesson = true;
    console.log(requiredLesson);
    var lesson2 = document.getElementById("lesson2");
    lesson2.classList.add("hov2");
    lesson2.style.opacity = "1";
    lesson2.disabled = false;
    document.getElementById("unlock2").style.opacity = "0";
    //document.getElementById("#lessonMax2")
  } else if (today == 3) {
    requiredLesson = true;
    var lesson3 = document.getElementById("lesson3");
    lesson3.classList.add("hov3");
    lesson3.style.opacity = "1";
    lesson3.disabled = false;
    document.getElementById("unlock3").style.opacity = "0";
  } else if (today == 6) {
    requiredLesson = true;
    var lesson4 = document.getElementById("lesson4");
    lesson4.classList.add("hov4");
    lesson4.style.opacity = "1";
    lesson4.disabled = false;
    document.getElementById("unlock4").style.opacity = "0";
  } else if (today == 7) {
    requiredLesson = true;
    var lesson5 = document.getElementById("lesson5");
    lesson5.classList.add("hov5");
    lesson5.style.opacity = "1";
    lesson5.disabled = false;
    document.getElementById("unlock5").style.opacity = "0";
  } else if (today == 10) {
    requiredLesson = true;
    var lesson6 = document.getElementById("lesson6");
    lesson6.classList.add("hov6");
    lesson6.style.opacity = "1";
    lesson6.disabled = false;
    document.getElementById("unlock6").style.opacity = "0";
  } else if (today == 15) {
    requiredLesson = true;
    var lesson7 = document.getElementById("lesson7");
    lesson7.classList.add("hov7");
    lesson7.style.opacity = "1";
    lesson7.disabled = false;
    document.getElementById("unlock7").style.opacity = "0";
  } else if (today == 25) {
    requiredLesson = true;
    var lesson8 = document.getElementById("lesson8");
    lesson8.classList.add("hov8");
    lesson8.style.opacity = "1";
    lesson8.disabled = false;
    document.getElementById("unlock8").style.opacity = "0";
  } else if (today == 27) {
    requiredLesson = true;
    var lesson9 = document.getElementById("lesson9");
    lesson9.classList.add("hov9");
    lesson9.style.opacity = "1";
    lesson9.disabled = false;
    document.getElementById("unlock9").style.opacity = "0";
  } else if (today == 40) {
    requiredLesson=true;

    var lesson10 = document.getElementById("lesson10");
    lesson10.classList.add("hov10");
    lesson10.style.opacity = "1";
    lesson10.disabled = false;
    document.getElementById("unlock10").style.opacity = "0";
  } else if (today == 41) {
    var coinsStr = coins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      //coinsStr = `${coinsStr.substring(0, coinsStr.length - 3)},${coinsStr.substring(coinsStr.length - 4, coinsStr.length -1)}`;

    //calculating netgain
    let netCoins = coins-2000;
    let netCoinsStr = netCoins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    /*
    if(Math.abs(netCoins)>=1000){
      //netCoinsStr = `${netCoinsStr.substring(0, netCoinsStr.length - 3)},${netCoinsStr.substring(netCoinsStr.length - 4, netCoinsStr.length -1)}`;
    }*/
    document.getElementById("endedWith").innerHTML = coinsStr;
    document.getElementById("netGain").innerHTML = netCoinsStr;
  }
  
  document.getElementById('nextDayLabel').innerHTML = "DAY " + today;
  document.getElementById('weatherLabel1').innerHTML = "DAY " + (today + 1);
  document.getElementById('weatherLabel2').innerHTML = "DAY " + (today + 2);
  document.getElementById('weatherLabel3').innerHTML = "DAY " + (today + 3);
  document.getElementById('forecastLabel1').innerHTML = (temperatures[today] + Math.floor((Math.random()*7)-3)) + "°";
  document.getElementById('forecastLabel2').innerHTML = (temperatures[today + 1] + Math.floor((Math.random()*7)-3)) + "°";
  document.getElementById('forecastLabel3').innerHTML = (temperatures[today + 2] + Math.floor((Math.random()*7)-3)) + "°";
  document.getElementById('forecastIcon1').src = "Stuff/" + getWeatherIcon(weathers[today]);
  document.getElementById('forecastIcon2').src = "Stuff/" + getWeatherIcon(weathers[today+1]);
  document.getElementById('forecastIcon3').src = "Stuff/" + getWeatherIcon(weathers[today+2]);
  
  if(today == 22){
    document.getElementById('weatherDayBox3').className += " disasterBox";
    document.getElementById('weatherDayBox2').className = "weatherDayBox";
    document.getElementById('weatherDayBox1').className = "weatherDayBox";
  } else if(today == 23){
    document.getElementById('weatherDayBox3').className = "weatherDayBox";
    document.getElementById('weatherDayBox2').className += " disasterBox";
    document.getElementById('weatherDayBox1').className = "weatherDayBox";
  } else if(today == 24){
    document.getElementById('weatherDayBox3').className = "weatherDayBox";
    document.getElementById('weatherDayBox2').className = "weatherDayBox";
    document.getElementById('weatherDayBox1').className += " disasterBox";
  } else {
    document.getElementById('weatherDayBox3').className = "weatherDayBox";
    document.getElementById('weatherDayBox2').className = "weatherDayBox";
    document.getElementById('weatherDayBox1').className = "weatherDayBox";
  }

  if (today==40) {
    document.getElementById('marketButton').disabled = true;
    
    var coinsStr = "";
      if (coins >= 1000) {
        coinsStr = coins.toString();
        coinsStr = `${coinsStr.substring(0, coinsStr.length - 3)},${coinsStr.substring(coinsStr.length - 4, coinsStr.length -1)}`;
      }

      //calculating netgain
      let netCoins = coins - 2000;
      let netCoinsStr = netCoins.toString()
      if(Math.abs(netCoins)>=1000){
        netCoinsStr = `${netCoinsStr.substring(0, netCoinsStr.length - 3)},${netCoinsStr.substring(netCoinsStr.length - 4, netCoinsStr.length -1)}`;
      }
      document.getElementById("endedWith").innerHTML = coinsStr;
      document.getElementById("netGain").innerHTML = netCoinsStr;
  }


  portfolioDistribution = [];

  // ANALYTICS (pushing into coinHist and portfolioDistribution for analytics)
  var total = 0;

  for (var i = 0; i < 7; i++) {
    if (treesOwned[i] != 0) {
      var treeType = treesOwned[i][0];
      var treeAmount = treesOwned[i][1];
      var treePrice = trees[treeType][2];

      total += treePrice * treeAmount;
    }
  }
  coinHist.push(total + coins);

  drawAnalyticsLine();
  drawAnalyticsPie(); //also recalculates portfolioDistribution
  drawStockGraphs();

  if(today == 41){
    document.getElementById("theLastOne").style.left = "0px";
    document.getElementById("nextDayDiv").style.display = "none";
    document.body.style.backgroundColor = "#172D47";
  }

  //"theLastOne"
  var panel = document.getElementById('nextDayDiv');
  panel.style.transitionTimingFunction = "ease-out";
  panel.style.transition = "1.5s";
  panel.style.left = "0px";
  setTimeout(() => { 
    
    if (today==40) {
      document.getElementById("endTurnButton").innerHTML = "END GAME";
      document.getElementById("endTurnButton").style.fontSize= "20px";
    }

    document.getElementById('day').innerHTML = "DAY " + today;
    document.getElementById('currentTemp').innerHTML = temperatures[today-1] + "°C";
    document.getElementById('weatherDivIcon').src = "Stuff/blue-" + getWeatherIcon(weathers[today-1]);

    for(var i = 0; i < treesOwned.length; i++){
      if(treesOwned[i] != 0){
        var islandArrowID = "islandChangeArrow" + (1+i);
        if(stockPrices[treesOwned[i][0]][today+10-1] > stockPrices[treesOwned[i][0]][today+10-2]){
          document.getElementById(islandArrowID).style.visibility = "visible";
          document.getElementById(islandArrowID).src = "Stuff/greenUp.svg";
        } else if(stockPrices[treesOwned[i][0]][today+10-1] < stockPrices[treesOwned[i][0]][today+10-2]){
          document.getElementById(islandArrowID).style.visibility = "visible";
          document.getElementById(islandArrowID).src = "Stuff/redDown.svg";
        } else {
          document.getElementById(islandArrowID).style.visibility = "hidden";
        }
      }
    }
    
    panel.style.transitionTimingFunction = "ease-in"; 
    panel.style.left = "-1000px";

    setTimeout(() => {  
      panel.style.transition = "0s";
      panel.style.left = "1000px"; 

      // Check if there is a lesson that day, then enable end day button if there isn't
      if (!requiredLesson) {
        //console.log('CHECKPOINT D: enabled; no required lesson');
        document.getElementById("endTurnButton").disabled = false;
      }
    }, 1500);
  }, 2500);
}

function drawTrees(){
  for(var i = 0; i < 7; i++){
    if(treesOwned[i] != 0){
      var treeToDraw = treesOwned[i][0];
      var treeImageID = "plantOnIsland" + (i+1);
      var treeTextID = "amountTreeIsland" + (i+1);
      document.getElementById(treeImageID).src = "Stuff/Plants/plant" + (treeToDraw+1) + ".svg";
      document.getElementById(treeImageID).style.visibility = "visible";
    }
  }
}

// KEY BINDS /////////////////////////
/*
document.addEventListener("keydown",keyDownHandler, false);

function keyDownHandler(event){
	var keyCode=event.keyCode;

  if (keyCode == 27) { //escape
    if (mapOpen) {
      if (!quizOpen&&!lessonOpen) {
        document.getElementById("homeButton").click();
      } else if (lessonOpen) {
        document.getElementById("backButtonLesson").click();
      }
    } else if (buyingPlant) {
      document.getElementById("cancelButton").click();
    } else {
      document.getElementById("backButtonMarket").click();
      document.getElementById("backButtonWeather").click();
      document.getElementById("backButtonAnalytics").click();
      frontPageUIout();
    }
  } else if (keyCode == 13) { //enter
    if (buyingPlant) {
      document.getElementById("buyButton").click();
    } else {
      return false
    }
  } else if (keyCode == 37) { //left arrow
    if (mapOpen) {
      if (quizOpen) {
        if (answerTime && clickNum!=0) {
          prevQ();
        }
      } else if (!lessonOpen) {
        document.getElementById("leftMapButton").click();
      }
    } else {
      document.getElementById("leftMarketButton").click();
    }
  } else if (keyCode == 39) { //right arrow
    if (mapOpen) {
      if (quizOpen) {
        if (clickNum<2&&nextQEnabled) {
          nextQ();
        }
      } else if (!lessonOpen) {
        document.getElementById("rightMapButton").click();
      }
    } else {
      document.getElementById("rightMarketButton").click();
    }
  }
}
*/
var islandNumber;

var islands = document.getElementsByClassName("treeIsland");
for(var i = 0; i < 7; i++){
  islands[i].onclick = function(event){
    
    if(this.className == "treeIslandHasTree"){  

      if (tutorial == true) {
        
        //TUTORIAL 8
        //onclick --> 1072
        if (tutorial == true) {

          document.getElementById("treeIsland1").style.zIndex = "0";

          var t7 = document.getElementById('t7');
          t7.style.visibility = "hidden";
          t7.style.opacity = "0";

          var t8 = document.getElementById('t8');

          var white = document.getElementById("whiteBlock");
          white.style.visibility = "visible"; 
          white.style.opacity = "40%";
          //t1.style.transitionTimingFunction = "ease-out";
          t8.style.transitionDelay = "0.5s";
          t8.style.opacity = "1";
          t8.style.visibility = "visible";

          document.getElementById("homeGraphButt").style.zIndex = "10";
        }
      }
      islandNumber = parseInt(this.id.substring(10));
      islandNumber--;
      var treeNumber = treesOwned[islandNumber][0];
      document.getElementById('amountDisplayText').innerHTML = "×" + treesOwned[islandNumber][1];
      document.getElementById('treeImageDisplay').src = ("Stuff/Plants/plant" + (treeNumber + 1) + ".svg");
      document.getElementById('treeNameDisplayText').innerHTML = trees[treeNumber][0];
      var idealWeatherSrc;
      switch(trees[treeNumber][4]){
        case "Sunny": idealWeatherSrc = "Stuff/lightblue-sunny.svg"; break;
        case "Partly-Sunny": idealWeatherSrc = "Stuff/lightblue-partly-cloudy.svg"; break;
        case "Cloudy": idealWeatherSrc = "Stuff/lightblue-sunny.svg"; break;
        case "Drizzle": idealWeatherSrc = "Stuff/lightblue-drizzle.svg"; break;
        case "Showers": idealWeatherSrc = "Stuff/lightblue-showers.svg"; break;
        default: console.log("error?");
      }
      document.getElementById("resilienceAmountDisplay").className = "point" + (trees[treeNumber][5]*2);
      document.getElementById("treeIdealWeatherDisplay").src = idealWeatherSrc;
      document.getElementById("treeIdealTempDisplay").innerHTML = trees[treeNumber][3];
      document.getElementById("treeValueDisplayText").innerHTML = trees[treeNumber][2];
      document.getElementById("islandTreeInfoContainer").style.top = "430px";
      document.getElementById("sellTitle").innerHTML = document.getElementById("treeNameDisplayText").innerHTML;
      individualStockGraph(treesOwned[islandNumber][0]);
    }
  }
}

function frontPageUIout(){
  document.getElementById("islandTreeInfoContainer").style.top = "630px";
  document.getElementById("sellContainer").style.opacity = "0";
  document.getElementById("sellContainer").style.visibility = "hidden";
  var overlay = document.getElementById("whiteOverlay");
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
  document.getElementById("mainPageGraph").style.left = "-100%";
  var overlay = document.getElementById("whiteOverlay1");
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";

  if(tutorial){
    document.getElementById("cancelButtonSell").className = "enabledCancelSell";
    document.getElementById("t10").style.opacity = "0";
    document.getElementById("t10").style.visibility = "hidden";
    document.getElementById("t11").style.opacity = "1";
    document.getElementById("t11").style.visibility = "visible";
    document.getElementById("weatherButton").style.zIndex = "10";
  }
}

function sellTreePopUp() {
  document.getElementById("sellContainer").style.opacity = "1";
  document.getElementById("sellContainer").style.visibility = "visible";
  document.getElementById("amountSellingText").innerHTML = 1;
  document.getElementById("amountMinusSell").className = "disabledSell";
  if(treesOwned[islandNumber][1] == 1){
    document.getElementById("amountPlusSell").className = "disabledSell";
  } else {
    document.getElementById("amountPlusSell").className = "non-disabledSell";
  }
  var overlay1 = document.getElementById("whiteOverlay");
  overlay1.style.visibility = "visible";
  overlay1.style.opacity = "0.5";
  document.getElementById("mainPageGraph").style.left = "-100%";
  var overlay = document.getElementById("whiteOverlay1");
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";

  if(tutorial){
    document.getElementById("sellTreeButton").style.zIndex = "0";
    document.getElementById("sellContainer").style.zIndex = "5";
    document.getElementById("t9").style.opacity = "0";
    document.getElementById("t9").style.visibility = "hidden";
    document.getElementById("cancelButtonSell").className = "";
  }
}

//SELL PLANTS
document.getElementById("sellButton").onclick = function(event) {
  var amountSelling = parseInt(document.getElementById("amountSellingText").innerHTML);
  if(amountSelling == treesOwned[islandNumber][1]){
    coins += amountSelling * trees[treesOwned[islandNumber][0]][2];
    document.getElementById("playerCoins").innerHTML = coins;
    if(coins > 9999){
      document.getElementById("playerCoins").style.fontSize = "25px";
    } else {
      document.getElementById("playerCoins").style.fontSize = "30px";
    }
    treesOwned[islandNumber] = 0;
    document.getElementById("treeIsland" + (islandNumber+1)).className = "treeIsland";
    if(!tutorial){
      frontPageUIout();
    }
    document.getElementById("plantOnIsland" + (islandNumber+1)).style.visibility = "hidden";
    document.getElementById("islandChangeArrow" + (islandNumber+1)).style.visibility = "hidden";
    drawTrees();
  } else {
    coins += amountSelling * trees[treesOwned[islandNumber][0]][2];
    document.getElementById("playerCoins").innerHTML = coins;
    if(coins > 9999){
      document.getElementById("playerCoins").style.fontSize = "25px";
    } else {
      document.getElementById("playerCoins").style.fontSize = "30px";
    }
    treesOwned[islandNumber][1] -= amountSelling;
    document.getElementById('amountDisplayText').innerHTML = "×" + treesOwned[islandNumber][1];
  }

  drawAnalyticsPie();
  
  // Enable endTurnButton if portfolio empty on last day
  if (today==40 && treesOwned.every(checkIsZero)) {
    //console.log("CHECKPOINT E: enabled");
    document.getElementById("endTurnButton").disabled = false;
  }
  
  document.getElementById("sellContainer").style.opacity = "0";
  document.getElementById("sellContainer").style.visibility = "hidden";
  var overlay = document.getElementById("whiteOverlay");
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";

  if(tutorial){
    document.getElementById("t10").style.visibility = "visible";
    document.getElementById("t10").style.opacity = "1";
    document.getElementById("checkButton").style.zIndex = "10";
  }
}

document.getElementById("cancelButtonSell").onclick = function(event) {
  document.getElementById("sellContainer").style.opacity = "0";
  document.getElementById("sellContainer").style.visibility = "hidden";
  var overlay = document.getElementById("whiteOverlay");
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
}

document.getElementById("amountPlusSell").onclick = function(event) {
  if(this.className == "non-disabledSell"){
    var amount = parseInt(document.getElementById("amountSellingText").innerHTML);
    amount++;
    if(amount == treesOwned[islandNumber][1]){
      this.className = "disabledSell";
    }
    document.getElementById("amountSellingText").innerHTML = amount;
    document.getElementById("amountMinusSell").className = "non-disabledSell";
  }
}

document.getElementById("amountMinusSell").onclick = function(event) {
  if(this.className == "non-disabledSell"){
    var amount = parseInt(document.getElementById("amountSellingText").innerHTML);
    amount--;
    if(amount == 1){
      this.className = "disabledSell";
    }
    document.getElementById("amountSellingText").innerHTML = amount;
    document.getElementById("amountPlusSell").className = "non-disabledSell";
  }
}

document.getElementById("homeGraphButt").onclick = function(event){
  document.getElementById("mainPageGraph").style.left = "175px";
  var overlay = document.getElementById("whiteOverlay1");
  overlay.style.visibility = "visible";
  overlay.style.opacity = "0.5";
  var overlay1 = document.getElementById("whiteOverlay");
  overlay1.style.visibility = "hidden";
  overlay1.style.opacity = "0";
  document.getElementById("sellContainer").style.opacity = "0";
  document.getElementById("sellContainer").style.visibility = "hidden";

  //TUTORIAL 8.5 (in between)
  if (tutorial == true) {
    document.getElementById("homeGraphButt").style.zIndex = "0";
    document.getElementById("t8").style.transitionDelay = "0.5s";
    document.getElementById("t8").style.visibility = "hidden";
    document.getElementById("t8").style.opacity = "0";

    var white = document.getElementById("whiteBlock");
    white.style.visibility = "visible"; 
    white.style.opacity = "40%";

    var graph = document.getElementById("mainPageGraph");
    graph.style.zIndex = "4";
  }
}

document.getElementById("backButtonMainGraph").onclick = function(event){
  document.getElementById("mainPageGraph").style.left = "-100%";
  var overlay = document.getElementById("whiteOverlay1");
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";

  //TUTORIAL 9
  //onclick --> 1072
  if (tutorial == true) {

    document.getElementById("mainPageGraph").style.zIndex = "0";
    

    var t9 = document.getElementById('t9');

    var white = document.getElementById("whiteBlock");
    white.style.visibility = "visible"; 
    white.style.opacity = "40%";
    //t1.style.transitionTimingFunction = "ease-out";
    t9.style.transitionDelay = "0.5s";
    t9.style.opacity = "1";
    t9.style.visibility = "visible";

    setTimeout(() => { 
      document.getElementById("sellTreeButton").style.zIndex = "10";
      t9.style.transitionDelay = "0s";
    }, 500);

    //document.getElementById("homeGraphButt").style.zIndex = "4";
  }
}

function checkIsZero(q) {
  return q==0;
}

function playagain() {
  window.location.reload(); 
}


function endTutorial() {
  document.getElementById("endTurnButton").classList.remove("tutEndTurnButt");
  document.getElementById("t14").style.transition = "0.75s";
  document.getElementById("t14").style.opacity = "0";
  document.getElementById("t14").style.visibility = "hidden";
  document.getElementById("check14").style.transition = "0.75s";
  document.getElementById("check14").style.opacity = "0";
  document.getElementById("check14").style.visibility = "hidden";
  document.getElementById("whiteBlock").style.opacity = "0";
  document.getElementById("whiteBlock").style.visibility = "hidden";
  document.getElementById("endTurnButton").style.zIndex = "0";
  tutorial = false;
  document.getElementById("islandTreeInfoContainer").style.zIndex = "3";
  document.getElementById("mainPageGraph").style.zIndex = "3";
  //console.log("CHECKPOINT F: enabled");
  document.getElementById("endTurnButton").disabled = false;
}