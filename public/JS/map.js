// MAP -----------------------------------------------------------
var lessonOpen = false;
var quizOpen = false;
var nextQEnabled = false;

var firstPage = true;
// Map cloud x positions
var cloud1pos = "230px";
var cloud2pos = "60px";
var cloud3pos = "340px";
var cloud4pos = "705px";
var cloud5pos = "620px";
var cloud6pos = "230px";
var cloud7pos = "70px";
var cloud8pos = "360px";
var cloud9pos = "725px";
var cloud10pos = "540px";

// mapscreen clouds animation
function moveDarkClouds(direction){
  var cloud1 = document.getElementById("darkCloud1");
  var cloud2 = document.getElementById("darkCloud2");
  var cloud3 = document.getElementById("darkCloud3");
  var cloud4 = document.getElementById("darkCloud4");
  var cloud5 = document.getElementById("darkCloud5");
  var cloud6 = document.getElementById("darkCloud6");
  var cloud7 = document.getElementById("darkCloud7");
  var cloud8 = document.getElementById("darkCloud8");
  var cloud9 = document.getElementById("darkCloud9");
  var cloud10 = document.getElementById("darkCloud10");
  
  if (firstPage == true) {
    if(direction == "in"){
        cloud1.style.left = cloud1pos;
        cloud2.style.left = cloud2pos;
        cloud3.style.left = cloud3pos;
        cloud4.style.left = cloud4pos;
        cloud5.style.left = cloud5pos;
      } else {
        cloud1.style.left = "-50%";
        cloud2.style.left = "-50%";
        cloud3.style.left = "-50%";
        cloud4.style.left = "-50%";
        cloud5.style.left = "-50%";
      }
  } else {
    if(direction == "in"){
        cloud6.style.left = cloud6pos;
        cloud7.style.left = cloud7pos;
        cloud8.style.left = cloud8pos;
        cloud9.style.left = cloud9pos;
        cloud10.style.left = cloud10pos;
      } else {
        cloud6.style.left = "-50%";
        cloud7.style.left = "-50%";
        cloud8.style.left = "-50%";
        cloud9.style.left = "-50%";
        cloud10.style.left = "-50%";
      }
  }
}
  
  // homescreen clouds animation
  function moveCloudsAndStuff(direction){
    var cloud1 = document.getElementById("cloud1");
    var cloud2 = document.getElementById("cloud2");
    var cloud3 = document.getElementById("cloud3");
    var cloud4 = document.getElementById("cloud4");
    var mapButton = document.getElementById("mapButton");
    var turnButton = document.getElementById("endTurnButton");
    var temperature = document.getElementById("weatherDiv");
  
    if(direction == "in"){
      cloud1.style.left = "25px";
      cloud2.style.left = "230px";
      cloud3.style.left = "815px";
      cloud4.style.left = "860px";
      mapButton.style.opacity = "0"; 
      mapButton.style.visibility = "hidden";
      turnButton.style.opacity = "0";
      turnButton.style.visibility = "hidden";
      temperature.style.opacity = "0";
      temperature.style.visibility = "hidden";
    } else {
      cloud1.style.left = "-50%";
      cloud2.style.left = "-50%";
      cloud3.style.left = "150%";
      cloud4.style.left = "150%";
      mapButton.style.opacity = "1";
      mapButton.style.visibility = "visible";
      turnButton.style.opacity = "1";
      turnButton.style.visibility = "visible";
      temperature.style.opacity = "1";
      temperature.style.visibility = "visible";
    }
  }


  //arrows
  document.getElementById("leftMapButton").onclick = function(event) {
    var first = document.getElementById("firstFive");
    var second = document.getElementById("secondFive");
    first.style.left = "0px";
    second.style.left = "100%";

    var rightButton = document.getElementById("rightMapButton");
    rightButton.style.visibility = "visible";
    rightButton.style.opacity = "1";

    var leftButton = document.getElementById("leftMapButton");
    leftButton.style.visibility = "hidden";
    leftButton.style.opacity = "0";

    firstPage = true;

    // Moving dark clouds
    document.getElementById("darkCloud1").style.left = cloud1pos;
    document.getElementById("darkCloud2").style.left = cloud2pos;
    document.getElementById("darkCloud3").style.left = cloud3pos;
    document.getElementById("darkCloud4").style.left = cloud4pos;
    document.getElementById("darkCloud5").style.left = cloud5pos;

    document.getElementById("darkCloud6").style.left = "150%";
    document.getElementById("darkCloud7").style.left = "150%";
    document.getElementById("darkCloud8").style.left = "150%";
    document.getElementById("darkCloud9").style.left = "150%";
    document.getElementById("darkCloud10").style.left = "150%";

  }
  document.getElementById("rightMapButton").onclick = function(event) {
    var first = document.getElementById("firstFive");
    var second = document.getElementById("secondFive");
    first.style.left = "-100%";
    second.style.left = "0px";

    var leftButton = document.getElementById("leftMapButton");
    leftButton.style.visibility = "visible";
    leftButton.style.opacity = "1";

    var rightButton = document.getElementById("rightMapButton");
    rightButton.style.visibility = "hidden";
    rightButton.style.opacity = "0";

    firstPage = false;

    // Moving dark clouds
    document.getElementById("darkCloud6").style.left = cloud6pos;
    document.getElementById("darkCloud7").style.left = cloud7pos;
    document.getElementById("darkCloud8").style.left = cloud8pos;
    document.getElementById("darkCloud9").style.left = cloud9pos;
    document.getElementById("darkCloud10").style.left = cloud10pos;

    document.getElementById("darkCloud1").style.left = "-50%";
    document.getElementById("darkCloud2").style.left = "-50%";
    document.getElementById("darkCloud3").style.left = "-50%";
    document.getElementById("darkCloud4").style.left = "-50%";
    document.getElementById("darkCloud5").style.left = "-50%";
  }

//back button
document.getElementById("backButtonLesson").onclick = function(event) {
  lessonOpen = false;
    
  var lessonBox = document.getElementById("lessonContainer");
  lessonBox.style.left = "-100%";

  var homeButton = document.getElementById("homeButton");
  homeButton.style.opacity = 1;
  homeButton.disabled = false;

  if (firstPage == true) {
    var rightButton = document.getElementById("rightMapButton");
     rightButton.style.visibility = "visible";
     rightButton.style.opacity = "1"; 
 } else {
     var leftButton = document.getElementById("leftMapButton");
     leftButton.style.visibility = "visible";
     leftButton.style.opacity = "1";
 }
 
}

//-----------------------------------------------------------------------------------------

var lessonNum;
  // click on cubes, shows lesson
function lesson(num) {
  lessonOpen = true;
  nextQEnabled = false;
  /*
  var white = document.getElementById("whiteBlock");
  var t2 = document.getElementById('t2');
  white.style.visibility = "visible"; 
  white.style.opacity = "40%";
  //t1.style.transitionTimingFunction = "ease-out";
  t2.style.transition = "0.5s";
  t2.style.opacity = "1";
  t2.style.visibility = "visible";*/
  
  if (tutorial == true) {
    document.getElementById("islandscreen").style.zIndex = "1";
    document.getElementById("lesson1").style.removeProperty("z-index");

    var white = document.getElementById("whiteBlock");
    white.style.visibility = "hidden";
    white.style.opacity = "0";

    var t2 = document.getElementById("t2");
    t2.style.opacity = "0";
    t2.style.visibility = "hidden";


    document.getElementById("backButtonLesson").style.display= "none";
  }

  document.getElementById("qBox1").style.left = "0px";
  document.getElementById("qBox2").style.left = "150%";
  document.getElementById("qBox3").style.left = "150%";

  var rightButton = document.getElementById("rightMapButton");
  rightButton.style.visibility = "hidden";
  rightButton.style.opacity = "0";

  var leftButton = document.getElementById("leftMapButton");
  leftButton.style.visibility = "hidden";
  leftButton.style.opacity = "0";

  if (num != 10) {
    var lessonBody = document.getElementById("lessonBody");
    lessonBody.style.visibility = "visible";
    lessonBody.style.opacity = "1";
  }

  document.getElementById("nextQuestion").style.display = "none";
  document.getElementById("backButtonLesson").style.visibility = "visible";
  document.getElementById("backButtonLesson").style.opacity = "1";

  var lessonBox = document.getElementById("lessonContainer");
  lessonBox.style.left = "115px";

  var homeButton = document.getElementById("homeButton");
  homeButton.style.opacity = 0;
  homeButton.disabled = true;

  var lessonBody = document.getElementById("lessonBody");
  lessonBody.style.display = "block";
  lessonBody.scrollTop = 0;

  //all lessons
  var lesson1 = document.getElementById("lesson_1");
  var lesson2 = document.getElementById("lesson_2");
  var lesson3 = document.getElementById("lesson_3");
  var lesson4 = document.getElementById("lesson_4");
  var lesson5 = document.getElementById("lesson_5");
  var lesson6 = document.getElementById("lesson_6");
  var lesson7 = document.getElementById("lesson_7");
  var lesson8 = document.getElementById("lesson_8");
  var lesson9 = document.getElementById("lesson_9");
  var lesson10 = document.getElementById("lesson_10");

  //none
  lesson1.style.display = "none";
  lesson2.style.display = "none";
  lesson3.style.display = "none";
  lesson4.style.display = "none";
  lesson5.style.display = "none";
  lesson6.style.display = "none";
  lesson7.style.display = "none";
  lesson8.style.display = "none";
  lesson9.style.display = "none";
  lesson10.style.display = "none";
  
  if(num == 1) {
    document.getElementById("lesson_title").innerHTML = "LESSON ONE: INTRO TO STOCKS";
    lesson1.style.display = "inline";
    lessonNum = 1;
  } else if (num == 2) {
    document.getElementById("lesson_title").innerHTML = "LESSON TWO: WHY INVEST?";
    lesson2.style.display = "inline";
    lessonNum = 2;
  } else if (num == 3) {
    document.getElementById("lesson_title").innerHTML = "LESSON THREE: THE STOCK MARKET";
    lesson3.style.display = "inline";
    lessonNum = 3;
  } else if (num == 4) {
    document.getElementById("lesson_title").innerHTML = "LESSON FOUR: INFLUENCES ON STOCKS";
    lesson4.style.display = "inline";
    lessonNum = 4;
  } else if (num == 5) {
    document.getElementById("lesson_title").innerHTML = "LESSON FIVE: PREDICTIONS & DECISIONS";
    lesson5.style.display = "inline";
    lessonNum = 5;
  } else if (num == 6) {
    document.getElementById("lesson_title").innerHTML = "LESSON SIX: RISK & REWARD";
    lesson6.style.display = "inline";
    lessonNum = 6;
  } else if (num == 7) {
    document.getElementById("lesson_title").innerHTML = "LESSON SEVEN: DIVERSIFICATION";
    lesson7.style.display = "inline";
    lessonNum = 7;
  } else if (num == 8) {
    document.getElementById("lesson_title").innerHTML = "LESSON EIGHT: CRASH & CORRECTION";
    lesson8.style.display = "inline";
    lessonNum = 8;
  } else if (num == 9) {
    document.getElementById("lesson_title").innerHTML = "LESSON NINE: BANKRUPTCY";
    lesson9.style.display = "inline";
    lessonNum = 9;
  } else if (num == 10) {
    document.getElementById("lesson_title").innerHTML = "LESSON TEN: REAL LIFE";
    lesson10.style.display = "inline";
    lessonNum = 10;

    var quiz10 = document.getElementById("quiz10");
    quiz10.style.visibility = "hidden";
    quiz10.style.opacity = "0";

    var lessonBody = document.getElementById("lessonBody");
    lessonBody.style.visibility = "visible";
    lessonBody.style.opacity = "1";
    
  }
}

  var clickNum;
  var answerTime;
  //end of lesson, start quiz, brings you to quiz
  function startQuiz(num) {
    lessonOpen = false;
    quizOpen = true;
    answerTime = false;

      //RESET
    //document.getElementById("qBox1").style.left = "0px";
    //document.getElementById("qBox2").style.left = "150%";
    //document.getElementById("qBox3").style.left = "150%";

    document.getElementById("choice1a").disabled = false;
    document.getElementById("choice1b").disabled = false;
    document.getElementById("choice1c").disabled = false;
    document.getElementById("choice2a").disabled = false;
    document.getElementById("choice2b").disabled = false;
    document.getElementById("choice2c").disabled = false;
    document.getElementById("choice3a").disabled = false;
    document.getElementById("choice3b").disabled = false;
    document.getElementById("choice3c").disabled = false;

    document.getElementById("choice1a").style.backgroundColor = "#456D97";
    document.getElementById("choice1b").style.backgroundColor = "#456D97";
    document.getElementById("choice1c").style.backgroundColor = "#456D97";
    document.getElementById("choice2a").style.backgroundColor = "#456D97";
    document.getElementById("choice2b").style.backgroundColor = "#456D97";
    document.getElementById("choice2c").style.backgroundColor = "#456D97";
    document.getElementById("choice3a").style.backgroundColor = "#456D97";
    document.getElementById("choice3b").style.backgroundColor = "#456D97";
    document.getElementById("choice3c").style.backgroundColor = "#456D97";

    document.getElementById("choice1a").style.color = "#C7DFF9";
    document.getElementById("choice1b").style.color = "#C7DFF9";
    document.getElementById("choice1c").style.color = "#C7DFF9";
    document.getElementById("choice2a").style.color = "#C7DFF9";
    document.getElementById("choice2b").style.color = "#C7DFF9";
    document.getElementById("choice2c").style.color = "#C7DFF9";
    document.getElementById("choice3a").style.color = "#C7DFF9";
    document.getElementById("choice3b").style.color = "#C7DFF9";
    document.getElementById("choice3c").style.color = "#C7DFF9";

    document.getElementById("righta1").style.opacity = "0";
    document.getElementById("rightb1").style.opacity = "0";
    document.getElementById("rightc1").style.opacity = "0";
    document.getElementById("righta2").style.opacity = "0";
    document.getElementById("rightb2").style.opacity = "0";
    document.getElementById("rightc2").style.opacity = "0";
    document.getElementById("righta3").style.opacity = "0";
    document.getElementById("rightb3").style.opacity = "0";
    document.getElementById("rightc3").style.opacity = "0";

    document.getElementById("wronga1").style.opacity = "0";
    document.getElementById("wrongb1").style.opacity = "0";
    document.getElementById("wrongc1").style.opacity = "0";
    document.getElementById("wronga2").style.opacity = "0";
    document.getElementById("wrongb2").style.opacity = "0";
    document.getElementById("wrongc2").style.opacity = "0";
    document.getElementById("wronga3").style.opacity = "0";
    document.getElementById("wrongb3").style.opacity = "0";
    document.getElementById("wrongc3").style.opacity = "0";

    document.getElementById("a1Fill").style.opacity = "0";
    document.getElementById("b1Fill").style.opacity = "0";
    document.getElementById("c1Fill").style.opacity = "0";
    document.getElementById("a2Fill").style.opacity = "0";
    document.getElementById("b2Fill").style.opacity = "0";
    document.getElementById("c2Fill").style.opacity = "0";
    document.getElementById("a3Fill").style.opacity = "0";
    document.getElementById("b3Fill").style.opacity = "0";
    document.getElementById("c3Fill").style.opacity = "0";

    document.getElementById("choice1c").style.opacity= "1"; //tf
    document.getElementById("choice2c").style.opacity= "1"; //tf
    document.getElementById("choice3c").style.opacity= "1";

    clickNum = 0;

    document.getElementById("nextQuestion").style.display = "block";
    document.getElementById("backButtonLesson").style.visibility = "hidden";
    document.getElementById("backButtonLesson").style.opacity = "0";

    var lessonBody = document.getElementById("lessonBody");
    lessonBody.style.visibility = "hidden";
    lessonBody.style.opacity = "0";

    var quizBody = document.getElementById("quizBody");
    quizBody.style.visibility = "visible";
    quizBody.style.opacity = "1";


    if (num == 1) {
        document.getElementById("question1").innerHTML = "What is a stock?";
            document.getElementById("text1a").innerHTML = "A reflection of an employee’s salary from a company";
            document.getElementById("text1b").innerHTML = "A share of a company’s earnings and assets";
            document.getElementById("text1c").innerHTML = "A piece of a company’s bank loans";

        document.getElementById("question2").innerHTML = "What is a possible reason for a company to sell stocks?";
            document.getElementById("text2a").innerHTML = "They want to size down";
            document.getElementById("text2b").innerHTML = "They want the least possible responsibility of their company";
            document.getElementById("text2c").innerHTML = "They want to create new products";

        document.getElementById("question3").innerHTML = "If Company A’s stock sells for $15 and Company B’s sells for $25, what does it mean?";
            document.getElementById("text3a").innerHTML = "Company B is worth more";
            document.getElementById("text3b").innerHTML = "Company B has grown more";
            document.getElementById("text3c").innerHTML = "It does not mean anything without more information";
    } else if (num == 2) {
        document.getElementById("question1").innerHTML = "Low, stable inflation…";
            document.getElementById("text1a").innerHTML = "Increases purchasing power and reduces the price of goods";
            document.getElementById("text1b").innerHTML = "Is usually good for the economy but reduces purchasing power";
            document.getElementById("text1c").innerHTML = "Reduces both purchasing power and the cost of goods";

        document.getElementById("question2").innerHTML = "What is <b><u>NOT</b></u> a good reason to invest?";
            document.getElementById("text2a").innerHTML = "Growing your savings faster than inflation";
            document.getElementById("text2b").innerHTML = "Earning money in the long run";
            document.getElementById("text2c").innerHTML = "None of the above";

        document.getElementById("question3").innerHTML = "As a full-time student, it would be wiser to invest in stocks than to engage in day trading.";
            document.getElementById("text3a").innerHTML = "True";
            document.getElementById("text3b").innerHTML = "False";
            document.getElementById("text3c").innerHTML = ""; 
            document.getElementById("choice3c").disabled = true;
            document.getElementById("choice3c").style.opacity= "0"; //tf
    } else if (num == 3) {
        document.getElementById("question1").innerHTML = "What does the stock market encompass?";
            document.getElementById("text1a").innerHTML = "Stocks from all companies that offer shares to the public";
            document.getElementById("text1b").innerHTML = "A collection of all company marketing strategies";
            document.getElementById("text1c").innerHTML = "Stocks from only the top performing companies";

        document.getElementById("question2").innerHTML = "Why do stock exchanges exist?";
            document.getElementById("text2a").innerHTML = "To prevent trading between different cities";
            document.getElementById("text2b").innerHTML = "To randomize stock trading";
            document.getElementById("text2c").innerHTML = "To provide structure to the stock market and facilitate trading";

        document.getElementById("question3").innerHTML = "After hours, stock prices on a stock exchange…";
            document.getElementById("text3a").innerHTML = "Stay fixed until the next day";
            document.getElementById("text3b").innerHTML = "Can still fluctuate and change";
            document.getElementById("text3c").innerHTML = "Fluctuate until you buy more stocks after regular trading hours";
    } else if (num == 4) {
        document.getElementById("question1").innerHTML = "How does supply and demand change stock prices?";
            document.getElementById("text1a").innerHTML = "Higher supply & lower demand: high stock prices";
            document.getElementById("text1b").innerHTML = "Lower supply & higher demand: high stock prices";
            document.getElementById("text1c").innerHTML = "Supply and demand doesn’t affect stock prices";

        document.getElementById("question2").innerHTML = "How do earnings of a company affect share prices?";
            document.getElementById("text2a").innerHTML = "Higher earnings than expected: rise in stock price";
            document.getElementById("text2b").innerHTML = "Lower earnings than expected: no change in stock price";
            document.getElementById("text2c").innerHTML = "Earnings don’t impact stock price";

        document.getElementById("question3").innerHTML = "Stock prices are generally stable because they rely on supply and demand";
            document.getElementById("text3a").innerHTML = "True";
            document.getElementById("text3b").innerHTML = "False";
            document.getElementById("text3c").innerHTML = ""; 
            document.getElementById("choice3c").disabled = true;
            document.getElementById("choice3c").style.opacity= "0"; //tf
    } else if (num == 5) {
        document.getElementById("question1").innerHTML = "How could you predict a stock price with 100% certainty?";
            document.getElementById("text1a").innerHTML = "By becoming a professional investor"; //choice a
            document.getElementById("text1b").innerHTML = "By analyzing past trends of the stock price"; //choice b
            document.getElementById("text1c").innerHTML = "Due to its unpredictability, you cannot"; //choice c

        document.getElementById("question2").innerHTML = "What is a good method to approach stock buying?"; //Question 2
            document.getElementById("text2a").innerHTML = "Set a price range for which you'd purchase the stock, and wait";
            document.getElementById("text2b").innerHTML = 'Wait for the “prime time” to purchase';
            document.getElementById("text2c").innerHTML = "Buy a stock when it’s popular, trending, and rising in value";

        document.getElementById("question3").innerHTML = "Out of the following, which is the weakest reason to sell a stock?"; //QUestion 3
            document.getElementById("text3a").innerHTML = "The stock price has decreased recently";
            document.getElementById("text3b").innerHTML = "The company has a new business plan you think is heavily flawed";
            document.getElementById("text3c").innerHTML = "You believe that it will be outperformed by a rival company";
    } else if (num == 6) {
        document.getElementById("question1").innerHTML = "Bonds, unlike stocks, do not carry a level of risk.";
            document.getElementById("text1a").innerHTML = "True";
            document.getElementById("text1b").innerHTML = "False";
            document.getElementById("text1c").innerHTML = "";
            document.getElementById("choice1c").disabled = true;
            document.getElementById("choice1c").style.opacity= "0"; //tf

        document.getElementById("question2").innerHTML = "What is the concept of risk & reward?";
            document.getElementById("text2a").innerHTML = "Lower risk generally means higher reward";
            document.getElementById("text2b").innerHTML = "Higher risk generally means higher reward";
            document.getElementById("text2c").innerHTML = "Risk and reward are rarely related";

        document.getElementById("question3").innerHTML = "If I know the volatility of a stock…";
            document.getElementById("text3a").innerHTML = "I know with certainty its level of risk";
            document.getElementById("text3b").innerHTML = "I know how frequently a stock is being traded";
            document.getElementById("text3c").innerHTML = "I am better informed about its risk, but not entirely so";

    } else if (num == 7) {
        document.getElementById("question1").innerHTML = "What is diversification?";
            document.getElementById("text1a").innerHTML = "Investing all your money in many stocks from one company";
            document.getElementById("text1b").innerHTML = "Buying stocks at different times in the day";
            document.getElementById("text1c").innerHTML = "Investing in many companies to lower your risk";

        document.getElementById("question2").innerHTML = "To create a diversified portfolio, you should invest in 25 top performing tech companies.";
            document.getElementById("text2a").innerHTML = "True";
            document.getElementById("text2b").innerHTML = "False";
            document.getElementById("text2c").innerHTML = ""; 
            document.getElementById("choice2c").disabled = true; //tf
            document.getElementById("choice2c").style.opacity= "0";

        document.getElementById("question3").innerHTML = "Since stocks generally have much higher returns, you should...";
            document.getElementById("text3a").innerHTML = "Buy other types of assets, as stocks also have higher risk";
            document.getElementById("text3b").innerHTML = "Only buy stocks and rely on their abundant returns";
            document.getElementById("text3c").innerHTML = "Never invest in bonds, as they always have lower returns";

    } else if (num == 8) {
        document.getElementById("question1").innerHTML = "What is a likely explanation for stock market prices to drop?";
            document.getElementById("text1a").innerHTML = "There are too many investors who want to buy more stocks";
            document.getElementById("text1b").innerHTML = "The majority of investors aren't trading stocks for an hour";
            document.getElementById("text1c").innerHTML = "There is uncertainty for the future, so investors sell their shares";

        document.getElementById("question2").innerHTML = "Stock market corrections and crashes are especially detrimental to…";
            document.getElementById("text2a").innerHTML = "Investors who aim for long term returns on shares";
            document.getElementById("text2b").innerHTML = "Holders of diversified portfolios";
            document.getElementById("text2c").innerHTML = "Day traders";

        document.getElementById("question3").innerHTML = "As a long term investor, the best thing to do when stock prices crash is to sell them to avoid more losses.";
            document.getElementById("text3a").innerHTML = "True";
            document.getElementById("text3b").innerHTML = "False";
            document.getElementById("text3c").innerHTML = ""; 
            document.getElementById("choice3c").disabled = true; //tf
            document.getElementById("choice3c").style.opacity= "0";

    } else if (num == 9) {
        document.getElementById("question1").innerHTML = "Why would a company file for bankruptcy?";
            document.getElementById("text1a").innerHTML = "To avoid unusual fluctuations in the stock market";
            document.getElementById("text1b").innerHTML = "As a last resort due to unpaid debt";
            document.getElementById("text1c").innerHTML = "To raise the value of their shares";

        document.getElementById("question2").innerHTML = "In which type of bankruptcy are shareholders paid first?";
            document.getElementById("text2a").innerHTML = "Chapter 7 bankruptcy";
            document.getElementById("text2b").innerHTML = "Chapter 11 bankruptcy";
            document.getElementById("text2c").innerHTML = "Neither";

        document.getElementById("question3").innerHTML = "Although stock prices have a chance of recovery, you should not invest in a bankrupt company.";
            document.getElementById("text3a").innerHTML = "True";
            document.getElementById("text3b").innerHTML = "False";
            document.getElementById("text3c").innerHTML = "";
            document.getElementById("choice3c").disabled = true;
            document.getElementById("choice3c").style.opacity= "0"; //tf
    } 
  }

  var choose = new Array(3);
  choose[0] = 'z';
  choose[1] = 'z';
  choose[2] = 'z';

  function chosen(letter, qNum) {
    nextQEnabled = true;
    document.getElementById("nextQuestion").disabled = false;
    document.getElementById("submitButton").disabled = false;
    document.getElementById("submitButton").style.opacity = "1";

    var a,b,c,abox,bbox,cbox;
    //var choose;

    if (qNum == 1) {
        a = document.getElementById("a1Fill");
        b = document.getElementById("b1Fill");
        c = document.getElementById("c1Fill");

        abox = document.getElementById("choice1a");
        bbox = document.getElementById("choice1b");
        cbox = document.getElementById("choice1c");

    } else if (qNum == 2) {
        a = document.getElementById("a2Fill");
        b = document.getElementById("b2Fill");
        c = document.getElementById("c2Fill");

        abox = document.getElementById("choice2a");
        bbox = document.getElementById("choice2b");
        cbox = document.getElementById("choice2c");
    } else if (qNum == 3) {
        a = document.getElementById("a3Fill");
        b = document.getElementById("b3Fill");
        c = document.getElementById("c3Fill");

        abox = document.getElementById("choice3a");
        bbox = document.getElementById("choice3b");
        cbox = document.getElementById("choice3c");
    }

    a.style.opacity = "0";
    b.style.opacity = "0";
    c.style.opacity = "0";
    abox.style.backgroundColor = "#456D97";
    bbox.style.backgroundColor = "#456D97";
    cbox.style.backgroundColor = "#456D97";
    abox.style.color = "#C7DFF9";
    bbox.style.color = "#C7DFF9";
    cbox.style.color = "#C7DFF9";

    if (letter == 'a') {
        a.style.opacity = "1";
        abox.style.backgroundColor = "#C7DFF9";
        abox.style.color = "#2E4F72";

        if (qNum == 1) choose[0] = 'a';
        if (qNum == 2) choose[1] = 'a';
        if (qNum == 3) choose[2] = 'a';
    
    } else if (letter == 'b') {
        b.style.opacity = "1";
        bbox.style.backgroundColor = "#C7DFF9";
        bbox.style.color = "#2E4F72";

        if (qNum == 1) choose[0] = 'b';
        if (qNum == 2) choose[1] = 'b';
        if (qNum == 3) choose[2] = 'b';
        
    } else if (letter == 'c') {
        c.style.opacity = "1";
        cbox.style.backgroundColor = "#C7DFF9";
        cbox.style.color = "#2E4F72";

        if (qNum == 1) choose[0] = 'c';
        if (qNum == 2) choose[1] = 'c';
        if (qNum == 3) choose[2] = 'c';
    }
}   

  function nextQ() {
    clickNum++;
    nextQEnabled = false;
 
 
    if (answerTime == false) {
      document.getElementById("nextQuestion").disabled = true;
      
      if (clickNum == 1) {
        document.getElementById("qBox1").style.left = "-150%";
        document.getElementById("qBox2").style.left = "0px";
      } else if (clickNum == 2) {
        document.getElementById("qBox2").style.left = "-150%";
        document.getElementById("qBox3").style.left = "0px";
        document.getElementById("submitButton").disabled = true;
        document.getElementById("nextQuestion").style.display = "none";
        document.getElementById("submitButton").style.visibility = "visible";
        document.getElementById("submitButton").style.opacity = "30%";
      }
    } else {
      if (clickNum > 0) {
        document.getElementById("prevQuestion").disabled = false;
      }
      if (clickNum == 1) {
        document.getElementById("qBox1").style.left = "-150%";
        document.getElementById("qBox2").style.left = "0px";
      } else if (clickNum == 2) {
        document.getElementById("qBox2").style.left = "-150%";
        document.getElementById("qBox3").style.left = "0px";
        document.getElementById("nextQuestion").style.display = "none";
        document.getElementById("doneButton").style.visibility = "visible";
        document.getElementById("doneButton").style.opacity = "1";
      }
    }
  }

  function prevQ() {
    clickNum--;
    if (clickNum == 0) { // 2 to 1
      document.getElementById("prevQuestion").disabled = true;
      document.getElementById("qBox1").style.left = "0px";
      document.getElementById("qBox2").style.left = "150%";
    } else if (clickNum == 1) { // 3 to 2
      document.getElementById("qBox2").style.left = "0px";
      document.getElementById("qBox3").style.left = "150%";
      document.getElementById("nextQuestion").style.display = "block";

      document.getElementById("doneButton").style.visibility = "hidden";
      document.getElementById("doneButton").style.opacity = "0";
    } 
  }

  var right;
  function submit() {
    right = 0;
    clickNum = 0;
    answerTime = true;
    nextQEnabled = true;
    
    //QUESION 1 --------------------------------------------------------------------------------

    //correct choice --> green
    if (lessonNum == 3) { // choice a
      document.getElementById("choice1a").style.backgroundColor = "#90E08F"; //backgorund colour: light green
      document.getElementById("choice1a").style.color = "#2E3372"; //font colour: dark blue
      document.getElementById("righta1").style.opacity = "1"; //check
      document.getElementById("a1Fill").style.opacity = "0"; //two blue circles

      //wrong choice
      if (choose[0] == 'a') right++;
        else {
          if (choose[0] == 'b') {
              document.getElementById("wrongb1").style.opacity = "1"; //red cross
              document.getElementById("b1Fill").style.opacity = "0"; // two blue circles
          } else if (choose[0] == 'c') {
              document.getElementById("wrongc1").style.opacity = "1";
              document.getElementById("c1Fill").style.opacity = "0";
            }
        }
    } else if (lessonNum == 1 || lessonNum == 2 || lessonNum == 4 || lessonNum == 6 || lessonNum == 9) { // choice b
      document.getElementById("choice1b").style.backgroundColor = "#90E08F";
      document.getElementById("choice1b").style.color = "#2E3372";
      document.getElementById("rightb1").style.opacity = "1";
      document.getElementById("b1Fill").style.opacity = "0";

      if (choose[0] == 'b') right++;
        else {
          if (choose[0] == 'a') {
              document.getElementById("wronga1").style.opacity = "1";
              document.getElementById("a1Fill").style.opacity = "0";
            
          } else if (choose[0] == 'c') {
              document.getElementById("wrongc1").style.opacity = "1";
              document.getElementById("c1Fill").style.opacity = "0";
              
          } 
        } 
    } else if (lessonNum == 5 || lessonNum == 7 || lessonNum == 8) { //choice c
      document.getElementById("choice1c").style.backgroundColor = "#90E08F";
      document.getElementById("choice1c").style.color = "#2E3372";
      document.getElementById("rightc1").style.opacity = "1";
      document.getElementById("c1Fill").style.opacity = "0";

      if (choose[0] == 'c') right++;
        else {
          if (choose[0] == 'a') {
              document.getElementById("wronga1").style.opacity = "1";
              document.getElementById("a1Fill").style.opacity = "0";
          
          } else if (choose[0] == 'b') {
              document.getElementById("wrongb1").style.opacity = "1";
              document.getElementById("b1Fill").style.opacity = "0";

          } 
        }               
    }

        //QUESTION 2 --------------------------------------------------------------------
        /*
        document.getElementById("choice2c").style.backgroundColor = "#90E08F";
        document.getElementById("choice2c").style.color = "#2E3372";
        document.getElementById("rightc2").style.opacity = "1";
        document.getElementById("c2Fill").style.opacity = "0";

        if (choose[1] == 'c') right++;
        else {
            if (choose[1] == 'a') {
                document.getElementById("wronga2").style.opacity = "1";
                document.getElementById("a2Fill").style.opacity = "0";
            
            } else if (choose[1] == 'b') {
                document.getElementById("wrongb2").style.opacity = "1";
                document.getElementById("b2Fill").style.opacity = "0";

            } 
        } */

        //correct choice --> green
        if (lessonNum == 4 || lessonNum == 5) { // choice a
            document.getElementById("choice2a").style.backgroundColor = "#90E08F"; //backgorund colour: light green
            document.getElementById("choice2a").style.color = "#2E3372"; //font colour: dark blue
            document.getElementById("righta2").style.opacity = "1"; //check
            document.getElementById("a2Fill").style.opacity = "0"; //two blue circles

            //wrong choice
            if (choose[1] == 'a') right++;
                else {
                    if (choose[1] == 'b') {
                        document.getElementById("wrongb2").style.opacity = "1"; //red cross
                        document.getElementById("b2Fill").style.opacity = "0"; // two blue circles
                    
                    } else if (choose[1] == 'c') {
                        document.getElementById("wrongc2").style.opacity = "1";
                        document.getElementById("c2Fill").style.opacity = "0";

                    } 
            } 

        } else if (lessonNum == 6 || lessonNum == 7) { // choice b
            document.getElementById("choice2b").style.backgroundColor = "#90E08F";
            document.getElementById("choice2b").style.color = "#2E3372";
            document.getElementById("rightb2").style.opacity = "1";
            document.getElementById("b2Fill").style.opacity = "0";


            if (choose[1] == 'b') right++;
                else {
                    if (choose[1] == 'a') {
                        document.getElementById("wronga2").style.opacity = "1";
                        document.getElementById("a2Fill").style.opacity = "0";
                    
                    } else if (choose[1] == 'c') {
                        document.getElementById("wrongc2").style.opacity = "1";
                        document.getElementById("c2Fill").style.opacity = "0";

                    } 
            } 
        } else if (lessonNum == 1 || lessonNum == 2 || lessonNum == 3 || lessonNum == 8 || lessonNum == 9) { //choice c
            document.getElementById("choice2c").style.backgroundColor = "#90E08F";
            document.getElementById("choice2c").style.color = "#2E3372";
            document.getElementById("rightc2").style.opacity = "1";
            document.getElementById("c2Fill").style.opacity = "0";

            if (choose[1] == 'c') right++;
                else {
                    if (choose[1] == 'a') {
                        document.getElementById("wronga2").style.opacity = "1";
                        document.getElementById("a2Fill").style.opacity = "0";
                    
                    } else if (choose[1] == 'b') {
                        document.getElementById("wrongb2").style.opacity = "1";
                        document.getElementById("b2Fill").style.opacity = "0";

                    } 
            } 
        }
        
        //QUESTION 3 --------------------------------------------------------------------
        /*
        document.getElementById("choice3c").style.backgroundColor = "#90E08F";
        document.getElementById("choice3c").style.color = "#2E3372";
        document.getElementById("rightc3").style.opacity = "1";
        document.getElementById("c3Fill").style.opacity = "0";

        if (choose[2] == 'c') right++;
        else {
            if (choose[2] == 'a') {
                document.getElementById("wronga3").style.opacity = "1";
                document.getElementById("a3Fill").style.opacity = "0";
            
            } else if (choose[2] == 'b') {
                document.getElementById("wrongb3").style.opacity = "1";
                document.getElementById("b3Fill").style.opacity = "0";

            } 
        } 
        */
        if (lessonNum == 2 || lessonNum == 5 || lessonNum == 7 || lessonNum == 9) { // choice a
            document.getElementById("choice3a").style.backgroundColor = "#90E08F"; //backgorund colour: light green
            document.getElementById("choice3a").style.color = "#2E3372"; //font colour: dark blue
            document.getElementById("righta3").style.opacity = "1"; //check
            document.getElementById("a3Fill").style.opacity = "0"; //two blue circles

            //wrong choice
            if (choose[2] == 'a') right++;
                else {
                    if (choose[2] == 'b') {
                        document.getElementById("wrongb3").style.opacity = "1"; //red cross
                        document.getElementById("b3Fill").style.opacity = "0"; // two blue circles
                    
                    } else if (choose[2] == 'c') {
                        document.getElementById("wrongc3").style.opacity = "1";
                        document.getElementById("c3Fill").style.opacity = "0";

                    } 
            } 

        } else if (lessonNum == 3 || lessonNum == 4 || lessonNum == 8) { // choice b
            document.getElementById("choice3b").style.backgroundColor = "#90E08F";
            document.getElementById("choice3b").style.color = "#2E3372";
            document.getElementById("rightb3").style.opacity = "1";
            document.getElementById("b3Fill").style.opacity = "0";


            if (choose[2] == 'b') right++;
                else {
                    if (choose[2] == 'a') {
                        document.getElementById("wronga3").style.opacity = "1";
                        document.getElementById("a3Fill").style.opacity = "0";
                    
                    } else if (choose[2] == 'c') {
                        document.getElementById("wrongc3").style.opacity = "1";
                        document.getElementById("c3Fill").style.opacity = "0";

                    } 
            } 
        } else if (lessonNum == 1 || lessonNum == 6) { //choice c
            document.getElementById("choice3c").style.backgroundColor = "#90E08F";
            document.getElementById("choice3c").style.color = "#2E3372";
            document.getElementById("rightc3").style.opacity = "1";
            document.getElementById("c3Fill").style.opacity = "0";

            if (choose[2] == 'c') right++;
                else {
                    if (choose[2] == 'a') {
                        document.getElementById("wronga3").style.opacity = "1";
                        document.getElementById("a3Fill").style.opacity = "0";
                    
                    } else if (choose[2] == 'b') {
                        document.getElementById("wrongb3").style.opacity = "1";
                        document.getElementById("b3Fill").style.opacity = "0";

                    } 
            } 
        }

        //-------------------------------------------------------------
        
        var box1 = document.getElementById("qBox1");
        var box2 = document.getElementById("qBox2");
        var box3 = document.getElementById("qBox3");

        var submit = document.getElementById("submitButton");
        submit.style.visibility = "hidden";
        submit.style.opacity = "0";

        box1.style.left = "0px";
        box2.style.left = "200%";
        box3.style.left = "300%";

        setTimeout(() => { 
          box2.style.transition = "0s";
          box3.style.transition = "0s";
    
            box2.style.left = "150%";
            box3.style.left = "150%";

          box2.style.transition = "2s";
          box3.style.transition = "2s";

          document.getElementById("nextQuestion").disabled = false;
          document.getElementById("nextQuestion").style.display = "block";
      }, 1000);


        document.getElementById("choice1a").disabled = true;
        document.getElementById("choice1b").disabled = true;
        document.getElementById("choice1c").disabled = true;
        document.getElementById("choice2a").disabled = true;
        document.getElementById("choice2b").disabled = true;
        document.getElementById("choice2c").disabled = true;
        document.getElementById("choice3a").disabled = true;
        document.getElementById("choice3b").disabled = true;
        document.getElementById("choice3c").disabled = true;
   }

   //EXCEPTION FOR LESSON 10 HERE-------------------------------------------------------------------------------
   //JENNA HELP ME tell me when u get here
   function congrats() {
    var lessonBody = document.getElementById("lessonBody");
    lessonBody.style.visibility = "hidden";
    lessonBody.style.opacity = "0";

    var quiz10 = document.getElementById("quiz10");
    quiz10.style.visibility = "visible";
    quiz10.style.opacity = "1";
    
    var done = document.getElementById("doneButton10");
    done.style.visibility = "visible";
    done.style.opacity = "1";

   }
   //-------------------------------------------------------------------------------------------------------------------
  function done(jo) {
    quizOpen = false;
    nextQEnabled = false;
    //enabling nextDay button

    /*
      document.getElementById("islandscreen").style.zIndex = "1";
      document.getElementById("lesson1").style.removeProperty("z-index");

      var white = document.getElementById("whiteBlock");
      white.style.visibility = "hidden";
      white.style.opacity = "0";

      var t2 = document.getElementById("t2");
      t2.style.opacity = "0";
      t2.style.visibility = "hidden";


      //document.getElementById("backButtonLesson").style.display= "none";
    */

    if (!tutorial || (today==40 && treesOwned.every(checkIsZero))) { // plop
      //console.log("CHECKPOINT G: enabled");
      document.getElementById("endTurnButton").disabled = false;
    }

    answerTime = false;

    var quizBody = document.getElementById("quizBody");
    quizBody.style.visibility = "hidden";
    quizBody.style.opacity = "0";
    /*
    if (jo == 0) {
      var lessonBody = document.getElementById("lessonBody");
      lessonBody.style.visibility = "visible";
      lessonBody.style.opacity = "1";
    }*/

    if(lessonNum == 6){
      var resilienceBubbles = document.getElementsByClassName("resilienceBubble");
      for(var i = 0; i < resilienceBubbles.length; i++){
        resilienceBubbles[i].style.visibility = "visible";
      }
      homeResilienceBubble.style.visibility = "visible";
    }
    

    //renewing arrow visibility
    if (firstPage == true) {
        var rightButton = document.getElementById("rightMapButton");
        rightButton.style.visibility = "visible";
        rightButton.style.opacity = "1"; 
    } else {
        var leftButton = document.getElementById("leftMapButton");
        leftButton.style.visibility = "visible";
        leftButton.style.opacity = "1";
    }

    var lessonBox = document.getElementById("lessonContainer");
    lessonBox.style.left = "-100%";

    var homeButton = document.getElementById("homeButton");
    homeButton.style.opacity = 1;
    homeButton.disabled = false;


      document.getElementById("doneButton").style.visibility = "hidden";
      document.getElementById("doneButton").style.opacity = "0";
    
      if (jo == 10) {
        document.getElementById("doneButton10").style.visibility = "hidden";
        document.getElementById("doneButton10").style.opacity = "0";
      }
      
    
    
    document.getElementById("prevQuestion").disabled = true;

    var completedButton = ["completed1", "completed2", "completed3", "completed4", "completed5", "completed6", "completed7", "completed8", "completed9", "completed10"];
    
    document.getElementById(completedButton[lessonNum-1]).style.display = "block";

    //hover floatie things
    document.getElementById("lesson" + lessonNum).classList.add("iov" + lessonNum);
    document.getElementById("lesson" + lessonNum).classList.remove("hov" + lessonNum);

    src="Stuff/finishedLesson.svg"
    document.getElementById("lesson"+String(lessonNum)+"Floater").src = "Stuff/finishedLesson.svg";
    document.getElementById("lesson"+String(lessonNum)+"Ellipse").style = "fill:#E2E2E2;";
    document.getElementById("lesson"+String(lessonNum)+"PolyTop").style = "fill:#F3F3F3;";
    document.getElementById("lesson"+String(lessonNum)+"PolyLeft").style = "fill:#C2C2C2;";
    document.getElementById("lesson"+String(lessonNum)+"PolyRight").style = "fill:#8A8A8A;";

    
    //style.opacity = "0"; / style.opacity = "1"
    //style.visibility = "hidden"; / style.visbility = "visible";
    
    // TIMED THING HOIHOI
    
    //<div id="whiteOverlay" style="visibility: hidden; opacity: 0;"></div>
    //var white = document.getElementById("")
    var amountEarned = coinGiver(right);
    document.getElementById("amountEarned").innerHTML = "+" + amountEarned + " COINS";
    
    //update coinHist & analytics
    coinHist[coinHist.length-1] = coinHist[coinHist.length-1] + amountEarned;
    drawAnalyticsLine();

    var white = document.getElementById("whiteBlock");
    white.style.visibility = "visible";
    white.style.opacity = "30%";
    
    var showCoin = document.getElementById('showCoins');
    showCoin.style.transitionTimingFunction = "ease-out";
    showCoin.style.transition = "1.5s";
    showCoin.style.left = "375px";
    setTimeout(() => {
        showCoin.style.transitionTimingFunction = "ease-in"; 
        showCoin.style.left = "-100%"; 
        coins += amountEarned;
        document.getElementById("playerCoins").innerHTML = coins;
        white.style.visibility = "hidden";
        white.style.opacity = "0";
        
        if (tutorial == true) {//t2 to t3
          var t3 = document.getElementById('t3');
          white.style.visibility = "visible"; 
          white.style.opacity = "40%";
          
          t3.style.transitionDelay = "0.5s";
          t3.style.opacity = "1";
          t3.style.visibility = "visible";
      
          document.getElementById("homeButton").style.zIndex = "10";
          document.getElementById("backButtonLesson").style.display= "block";
        }
        setTimeout(() => {  
        showCoin.style.transition = "0s";
        showCoin.style.left = "100%"; 
        }, 1500);

    }, 2800);

    if (lessonNum == 10) {
      day40sell = true;
    }
  }

   function coinGiver(right) {
        // variable --> lessonNum (number of lesson)
        var value;
        switch(lessonNum) {
            case 1:
                value = right*30;
                break;
            case 2:
                value = right*40;
                break;
            case 3:
                value = right*55;
                break;
            case 4:
                value = right*75;
                break;
            case 5:
                value = right*95;
                break;
            case 6:
                value = right*120;
                break;
            case 7:
                value = right*135;
                break;
            case 8:
                value = right*150;
                break;
            case 9:
                value = right*175;
                break;
            case 10:
                value = 1000;
                break;
            default:
                console.log("error?"); 
        }

    return value;
   }

  //-------------------------------------------------------------------------
  
  