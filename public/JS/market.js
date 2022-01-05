// For keypress handler
var buyingPlant = false; 
var leftMarketButtonEnabled = false;
var rightMarketButtonEnabled = true;

//for amountPlus button control
let treesLeft = 10;

var marketPage = 1;
var buyingPower = 0;

checkPage(1);

var treeBeingBought;

//market - left button
document.getElementById("leftMarketButton").onclick = function(event) {
  var marketPages = document.getElementsByClassName('marketPage');
  if(marketPage != 1 && parseInt(window.getComputedStyle(marketPages[7]).getPropertyValue('left').substring(0, window.getComputedStyle(marketPages[7]).getPropertyValue('left').length - 2))%620 == 10){
    for(var i = 0; i < marketPages.length; i++){
      var style = window.getComputedStyle(marketPages[i]);
      var left = parseInt(style.getPropertyValue('left').substring(0, style.getPropertyValue('left').length - 2));
      left += 620;
      marketPages[i].style.left = left + "px";
    }

    marketPage--;
    checkPage(marketPage);
  }
}

//market - right button
document.getElementById("rightMarketButton").onclick = function(event) {
  var marketPages = document.getElementsByClassName('marketPage');
  if(marketPage != 8 && parseInt(window.getComputedStyle(marketPages[7]).getPropertyValue('left').substring(0, window.getComputedStyle(marketPages[7]).getPropertyValue('left').length - 2))%620 == 10){
    for(var i = 0; i < marketPages.length; i++){

      var style = window.getComputedStyle(marketPages[i]);
      var left = parseInt(style.getPropertyValue('left').substring(0, style.getPropertyValue('left').length - 2));
      left -= 620;
      marketPages[i].style.left = left + "px";
    }

    marketPage++;
    checkPage(marketPage);
  }
}

// deactivates left/right buttons
function checkPage(page){
  if(page == 1){
    leftMarketButtonEnabled = false; //for keypress
    document.getElementById('leftMarketButton').style.opacity = "0";
    document.getElementById('leftMarketButton').style.visibility = "hidden";
  } else if(page == 8){
    rightMarketButtonEnabled = false; //for keypress
    document.getElementById('rightMarketButton').style.opacity = "0";
    document.getElementById('rightMarketButton').style.visibility = "hidden";
  } else {
    leftMarketButtonEnabled = true; //for keypress
    rightMarketButtonEnabled = true; //for keypress
    document.getElementById('leftMarketButton').style.opacity = "1";
    document.getElementById('rightMarketButton').style.opacity = "1";
    document.getElementById('leftMarketButton').style.visibility = "visible";
    document.getElementById('rightMarketButton').style.visibility = "visible";
  }
}

var infoButtons = document.getElementsByClassName("treeInfoButton");
var backButtons = document.getElementsByClassName("treeCardBackButton");

//INFO AND BACK BUTTON ONCLICK
for(var i = 0; i < infoButtons.length; i++){
  var button = infoButtons[i];
  button.onclick = function(event){
    if(tutorial){
      var t5 = document.getElementById('t5');
      t5.style.transition = "0.5s";
      t5.style.opacity = "0";
      t5.style.visibility = "hidden";
    }

    var card = this.parentElement.parentElement.parentElement;
    card.style.transform = "rotateY(180deg)";

    var treeNum;
    if(this.id.length == 15){
      treeNum = parseInt(this.id.charAt(4));
    } else {
      treeNum = parseInt(this.id.substring(4,6));
    }

    var frontContentID = "treeCardFront" + treeNum;
    document.getElementById(frontContentID).style.opacity = "0";
    document.getElementById(frontContentID).style.visibility = "hidden";
  }

  var backButt = backButtons[i];
  backButt.onclick = function(event) {
    if (tutorial == true) {
      var t6 = document.getElementById('t6');
      document.getElementById("treePriceBox2").className = "treePriceBox";
      t6.style.transitionDelay = "0.5s";
      t6.style.opacity = "1";
      t6.style.visibility = "visible";
    }
    
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
  
  var buyButtonID = "treePriceBox" + (i+1);
  document.getElementById(buyButtonID).onclick = function(event){
    buyingPlant = true; //for keypress shortcuts

    if(tutorial){
      document.getElementById("t6").style.opacity = "0";
      document.getElementById("t6").style.visibility = "hidden";
      document.getElementById("treeCard2").style.zIndex = "0";
      document.getElementById("cancelButton").className = "";
      document.getElementById("marketBuyContainer").style.zIndex = "5";
    }
    //finding i
    let numberI = parseInt(this.id.substring(12)) - 1;
    treesLeft = 10;

    for(let j = 0; j < treesOwned.length; j++) {
      if(treesOwned[j] != 0){
        if(treesOwned[j][0] == numberI) {
          treesLeft = 10 - treesOwned[j][1];
          break;
        }
      }
    }
    
    if(this.className == "treePriceBox") {
      var overlay = document.getElementById('whiteOverlay');
      var buyBox = document.getElementById('marketBuyContainer');
      var name = document.getElementById('marketBuyTitle');
      document.getElementById("amountBuyingText").innerHTML = 1;
      document.getElementById("amountMinus").className = "disabled";
      treeBeingBought = parseInt(this.id.substring(12))-1;

      if(2*trees[treeBeingBought][2] > coins){
        document.getElementById("amountPlus").className = "disabled";
      } else {
        document.getElementById("amountPlus").className = "non-disabled";
      }

      overlay.style.visibility = "visible";
      overlay.style.opacity = "0.5";
      buyBox.style.visibility = "visible";
      buyBox.style.opacity = "1";
      name.innerHTML = trees[parseInt(this.id.substring(12))-1][0];
    }  
  }
  
  var treeLabelID = "treeMarketLabel" + (i+1);
  document.getElementById(treeLabelID).innerHTML = trees[i][0];

  var treePriceID = "treePriceText" + (i+1);
  document.getElementById(treePriceID).innerHTML = trees[i][2];

  var treeImageID = "treeMarketImage" + (i+1);
  document.getElementById(treeImageID).src = "Stuff/Plants/plant" + (i+1) + ".svg";

  var backTreeLabelID = "treeMarketLabelBack" + (i+1);
  document.getElementById(backTreeLabelID).innerHTML = trees[i][0];

  var backTreeTempID = "treeMarketTempsBack" + (i+1);
  document.getElementById(backTreeTempID).innerHTML = trees[i][3];

  var treeIdealWeatherImageID = "weatherBubble" + (i+1);
  switch(trees[i][4]){
    case "Sunny": document.getElementById(treeIdealWeatherImageID).src = "Stuff/brown-sunny.svg"; break;
    case "Partly-Sunny": document.getElementById(treeIdealWeatherImageID).src = "Stuff/brown-partly-cloudy.svg"; break;
    case "Cloudy": document.getElementById(treeIdealWeatherImageID).src = "Stuff/brown-sunny.svg"; break;
    case "Drizzle": document.getElementById(treeIdealWeatherImageID).src = "Stuff/brown-drizzle.svg"; break;
    case "Showers": document.getElementById(treeIdealWeatherImageID).src = "Stuff/brown-showers.svg"; break;
    default: console.log("?");
  }

  var resilienceBubbleID = "resilienceBubble" + (i+1);
  document.getElementById(resilienceBubbleID).className += (" resilience" + trees[i][5]);
}

//check for trees can't buy even 1
function checkTrees() {

  //if they own seven different trees make those the only ones available to buy
  let allFull = treesOwned.every(n=> {
    return n.length == 2;
  });

  let allRealFull = treesOwned.every(n=> {
    return n[2] == 10;
  });

  //resetting everything
  for(let i = 0; i < trees.length; i++){
    document.getElementById(`treePriceBox${i+1}`).className = "treePriceBox";
  }

  //checking coins
  for(let i = 0; i < trees.length; i++){
    if(trees[i][2] > coins) {
      document.getElementById(`treePriceBox${i+1}`).className = "disabledPriceBox";
    }

    //disabling all tree box price
    if(allFull && allRealFull) {
      document.getElementById(`treePriceBox${i+1}`).className = "disabledPriceBox";   
    }   
  }

  
  //checking for 7 full trees but not all full
  if(allFull) {
    //disabling all other plants
    for(let r = 0; r < trees.length; r++) {
      for(let f = 0; f < 7; f++) {
        if(r == treesOwned[f][0]) {
          document.getElementById(`treePriceBox${r+1}`).className = "treePriceBox";
          break;
        } else {
          document.getElementById(`treePriceBox${r+1}`).className = "disabledPriceBox";
        }
      }
    }
  } 
  
    //Check if they own ten of a specific tree 
  for(let p = 0; p < 7; p++){
    if(treesOwned[p] != 0) {
      if(treesOwned[p][1] == 10) {
        document.getElementById(`treePriceBox${treesOwned[p][0]+1}`).className = "disabledPriceBox";
      }
    }
  }
}
  

document.getElementById('amountMinus').onclick = function(event){
  if(this.className == "disabled"){

  } else {
    var amount = parseInt(document.getElementById('amountBuyingText').innerHTML);
    if(amount > 2) {
      amount--;
      this.className = "non-disabled";
      document.getElementById("amountPlus").className = "non-disabled";
    } else if(amount == 2){
      amount--;
      this.className = "disabled";
      document.getElementById("amountPlus").className = "non-disabled";
    }
    document.getElementById('amountBuyingText').innerHTML = amount;
  }
}
document.getElementById('amountPlus').onclick = function(event){
  if(this.className == "disabled" || treesLeft == 1){
    this.className = "disabled";
  } else {
    var amount = parseInt(document.getElementById('amountBuyingText').innerHTML);
  
    if((amount+2)*trees[treeBeingBought][2] <= coins && amount < 9 && (amount +1) < treesLeft)  {
      amount++;
      document.getElementById('amountBuyingText').innerHTML = amount;
      this.className = "non-disabled";
      document.getElementById('amountMinus').className = "non-disabled";
    } else if((amount+1)*trees[treeBeingBought][2] <= coins || amount == 9 || (amount+1) == treesLeft) {
      amount++;
      this.className = "disabled";
      document.getElementById('amountBuyingText').innerHTML = amount;
      document.getElementById('amountMinus').className = "non-disabled";
    } 
  }
  
}

//BUYING PLANT
document.getElementById('buyButton').onclick = function(event){
  buyingPlant = false;//for keyboard shortcuts

  var overlay = document.getElementById('whiteOverlay');
  var buyBox = document.getElementById('marketBuyContainer');
  var amount = parseInt(document.getElementById('amountBuyingText').innerHTML);

  //changing coins
  coins = coins - amount*(trees[treeBeingBought][2]);
  document.getElementById("playerCoins").innerHTML = coins;
  if(coins > 9999){
    document.getElementById("playerCoins").style.fontSize = "25px";
  } else {
    document.getElementById("playerCoins").style.fontSize = "30px";
  }

  let o;
  //updating array with trees owned
  //already exists
  for(let i = 0; i < 7; i++) {
    if (treesOwned[i][0] == treeBeingBought && treesOwned[i][1]< 10) {
      treesOwned[i][1] += amount;
      o = 0;
      break;
    } else {
      o = 1;
    }
  }

//adding new
  if(o == 1) {
    for(let d = 0; d < 7; d++) {
      if(treesOwned[d] == 0){
        document.getElementById("treeIsland" + (d+1)).className += "HasTree";
        treesOwned[d] = [treeBeingBought, amount];
        break;
      }
    }
  }

  drawTrees();
  checkTrees();

  drawAnalyticsPie();

  if(tutorial == true){
    document.getElementById("marketBuyContainer").style.zIndex = "0";
    document.getElementById("backButtonMarket").style.zIndex = "5";
  }

  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
  buyBox.style.visibility = "hidden";
  buyBox.style.opacity = "0";
}

document.getElementById('cancelButton').onclick = function(event){
  if(document.getElementById('cancelButton').className == "enabledCancel"){
    buyingPlant = false;

    var overlay = document.getElementById('whiteOverlay');
    var buyBox = document.getElementById('marketBuyContainer');
    
    //resetting buttons
    document.getElementById('amountMinus').style.className = "";
    document.getElementById('amountPlus').style.className = "";
    

    

    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
    buyBox.style.visibility = "hidden";
    buyBox.style.opacity = "0";
  }
}




