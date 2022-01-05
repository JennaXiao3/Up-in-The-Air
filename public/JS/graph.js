//today - day 
//coins - total coins
//trees (array)
//stockPrices (array) --> stock prices starting from day -10 (day 1 is 11th value)
//treesOwned (array) --> seven spots --> [tree number, amount owned] (tree number-1)

var coinHist = [2000]; //amount of coins players has at start of each day
var coinHistRecent = [];//will be empty (values are temporary, for testing only)
var portfolioDistribution = []; //[[tree1Num, tree1TotVal],[tree2Num, tree2TotVal],[etc.]]

var analyticsLineElement = document.getElementById('analyticsLine');
var analyticsLine;
var analyticsPieElement = document.getElementById('analyticsPie');
var analyticsPie;

function drawAnalyticsLine() {
  // GRAPH ////////
  coinHistRecent = [];
  var graphLabels = [];

  if(analyticsLine!=null){
    analyticsLine.destroy();
  }

  if (today<=5) { //will have empty space
    graphLabels = ['1', '2', '3', '4', '5'];
    for(var i = 0; i < today; i++){
      coinHistRecent.push(coinHist[i]);
    }
  } else { //current day will be last data point
    graphLabels = [(today-4).toString(), (today-3).toString(), (today-2).toString(), (today-1).toString(), (today).toString()];
    for(var i = 4; i >=0; i--){
      coinHistRecent.push(coinHist[today-i-1]);
    }
  }

  analyticsLine = new Chart(analyticsLineElement, {
    type: 'line',
    data: {
      labels: graphLabels,
      datasets: [{
        label: ' ',
        data: coinHistRecent,
        
        tension: 0,
        spanGaps: false,
        
        fill: false,
        borderColor: '#605933',
        borderWidth: 4,
        borderCapStyle: 'round',
        
        pointBackgroundColor: '#605933',
        pointRadius: 10,
        pointHoverRadius: 15
      }]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "DAY",
            fontSize: 21,
            fontFamily: "'Poppins','sans-serif'",
            color: "#000"
          },
          gridLines: {
            display: false,
            color: "rgba(0,0,0,0)"
          },
          ticks: {
            display: true,
            color: "#000",
            padding: 10,
            fontSize: 18,
            fontFamily: "'Poppins','sans-serif'",
          }
        }],
        yAxes: [{
          //display: false,
          gridLines: {
            //display: false
            
          },
          ticks: {
            padding: 18,
            autoskip: true,
            maxTicksLimit: 4
          }
        }]
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20
        }
      },
      maintainAspectRatio: true,
      responsive: false,
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: 'rgba(96,89,51,0.9)',
        titleFontColor: 'rgba(0,0,0,0)',
        titleFontSize: 0,
        bodyFontSize: 17,
        bodyFontFamily: "'Poppins','sans-serif'",
        displayColors: false,
        caretPadding: 21,
        callbacks: {
          label: function(tooltipItem){
            return "$" + Number(tooltipItem.yLabel);
          }
        }
      },
    }
  });
}

function drawAnalyticsPie() {
  // PIE YUM ////////
  //NOTE: what to do if today==1?
  if(analyticsPie!=null){
    analyticsPie.destroy();
  }

  var total = 0;
  portfolioDistribution = [];
  for (var i = 0; i < 7; i++) {
    if (treesOwned[i] != 0) {
      portfolioDistribution.push([treesOwned[i][0], treesOwned[i][1]*trees[treesOwned[i][0]][2]]);
    }
  }
  portfolioDistribution.sort(function(a,b){
    return a[1] - b[1];
  });
  
  if (portfolioDistribution.length==0) { // player owns no plants
    if (today!=40) {
      document.getElementById('emptyPortfolioPieMessage').innerHTML = "You don't own any plants at the moment. Come back after buying some to see your portfolio visualised."
    } else {
      document.getElementById('emptyPortfolioPieMessage').innerHTML = "You've sold all of your plants. Click on the \"END GAME\" button to end the game and see your results!";
    }

    analyticsPie = new Chart(analyticsPieElement, {
      type: 'pie',
      data: {
        labels: '',
        datasets: [{
          label: '',
          data: "100%",
          
          weight: 10,
          backgroundColor: [
            'rgba(96,89,51,0.5)',
          ],

          borderColor: 'rgba(0,0,0,0)',//#605933
          borderWidth: 1
        }]
      },
      options: {
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20
          }
        },
        maintainAspectRatio: true,
        responsive: false,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
          backgroundColor: 'rgba(96,89,51,0.9)',
          titleFontColor: 'rgba(0,0,0,0)',
          titleFontSize: 0,
          bodyFontSize: 17,
          bodyFontFamily: "'Poppins','sans-serif'",
          displayColors: true,
          caretPadding: 21,
        },
      }
    });
  } else {
    var pieLabels = [];
    var pieValues = [];
    var piePercents = [];
    var pieValuesTotal = 0;
    //portfolioDistribution = [['name1',823],['name2',654],['name3',525],['name4',421],['name5',390],['name6',321],['name7',23]];//TEMPORARYYYYYYYYYYYYYY
    document.getElementById('emptyPortfolioPieMessage').innerHTML = "";
    for (var i=0; i<portfolioDistribution.length; i++) {
      pieValuesTotal+=portfolioDistribution[i][1];
    }
    for (var i=0; i<portfolioDistribution.length; i++) {
      pieLabels.push(trees[portfolioDistribution[i][0]][0]);
      pieValues.push(portfolioDistribution[i][1]);
      piePercents.push(Math.round(pieValues[i]/pieValuesTotal*1000)/10);
    }
    analyticsPie = new Chart(analyticsPieElement, {
      type: 'doughnut',
      data: {
        labels: pieLabels,
        datasets: [{
          label: '',
          data: pieValues,
          
          backgroundColor: [
            '#F8D521',
            '#D4B51C',
            '#B59B18',
            '#968114',
            '#786610',
            '#594C0C',
            '#3B3208',
          ],

          borderColor: '#605933',
          borderWidth: 1,
          borderCapStyle: 'round',
        }]
      },
      options: {
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20
          }
        },
        maintainAspectRatio: true,
        responsive: false,
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: 'rgba(96,89,51,0.9)',
          titleFontColor: 'rgba(0,0,0,0)',
          titleFontSize: 0,
          bodyFontSize: 17,
          bodyFontFamily: "'Poppins','sans-serif'",
          displayColors: true,
          caretPadding: 21,
          callbacks: {
            label: function(tooltipItem){
              return (pieLabels[tooltipItem.index] + ' – $' + pieValues[tooltipItem.index] + ' (' + piePercents[tooltipItem.index] + '%)');
            }
          }
        },
      }
    });
  }
}

var stockGraphs = [];

function drawStockGraphs() {
  var dayLabels = [(today-4).toString(), (today-3).toString(), (today-2).toString(), (today-1).toString(), (today).toString()];
  
  if(today != 1){
    for(var i = 0; i < 24; i++){
      stockGraphs[i].destroy();
    }
  }

  for(var i = 0; i < 24; i++){
    var canvasID = "stockGraph" + (i+1);
    var recentPrices = stockPrices[i].slice(today+10-5, today+10);

    stockGraphs[i] = new Chart(canvasID, {
      type: 'line',
      data: {
        labels: dayLabels,
        datasets: [{
          label: ' ',
          data: recentPrices,
        
          //tension: 0,
          spanGaps: false,
        
          fill: false,
          borderColor: '#605933',
          borderWidth: 3,
          borderCapStyle: 'round',
          
          pointBackgroundColor: '#605933',
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: "DAY",
              fontSize: 14,
              fontFamily: "'Poppins','sans-serif'",
              color: "#000"
            },
            gridLines: {
              display: false,
              color: "rgba(0,0,0,0)"
            },
            ticks: {
              display: true,
              color: "#000",
              padding: 5,
              fontSize: 10,
              fontFamily: "'Poppins','sans-serif'",
            }
          }],
          yAxes: [{
            display: false,
            gridLines: {
              //display: false
            },
            ticks: {
              padding: 18,
            }
          }]
        },
        layout: {
          padding: {
            top: 10,
            left: 20,
            right: 20
          }
        },
        maintainAspectRatio: true,
        responsive: false,
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: 'rgba(96,89,51,0.9)',
          titleFontColor: 'rgba(0,0,0,0)',
          titleFontSize: 0,
          bodyFontSize: 17,
          bodyFontFamily: "'Poppins','sans-serif'",
          displayColors: false,
          caretPadding: 21,
          callbacks: {
            label: function(tooltipItem){
              return "$" + Number(tooltipItem.yLabel);
            }
          }
        },
      }
    });
  }
}

var individualStockChart;
var timesDrawn = 0;

function individualStockGraph(treeNumber){
  var dayLabels = [(today-9).toString(), (today-8).toString(), (today-7).toString(), (today-6).toString(), (today-5).toString(), (today-4).toString(), (today-3).toString(), (today-2).toString(), (today-1).toString(), (today).toString()];
  var recentStockPrices = stockPrices[treeNumber].slice(today+10-10, today+10);
  timesDrawn++;
  
  if(individualStockChart != null){
    individualStockChart.destroy();
  }

  individualStockChart = new Chart(individualStockLine, {
    type: 'line',
    data: {
      labels: dayLabels,
      datasets: [{
        label: ' ',
        data: recentStockPrices,
        
        spanGaps: false,
        
        fill: false,
        borderColor: '#F8D521', 
        borderWidth: 4,
        borderCapStyle: 'round',
        
        pointBackgroundColor: '#F8D521',
        pointRadius: 10,
        pointHoverRadius: 15
      }]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "DAY",
            fontSize: 21,
            fontFamily: "'Poppins','sans-serif'",
            fontColor: "#ACECE5"
          },
          gridLines: {
            display: false,
            color: "rgba(0,0,0,0)"
          },
          ticks: {
            display: true,
            color: "#ACECE5",
            padding: 10,
            fontSize: 18,
            fontFamily: "'Poppins','sans-serif'",
            fontColor: "#ACECE5"
          }
        }],
        yAxes: [{
          //display: false,
          gridLines: {
            //display: false
            color: "#ACECE5"
          },
          ticks: {
            padding: 18,
            autoskip: true,
            maxTicksLimit: 4,
            fontColor: "#ACECE5"
          }
        }]
      },
      layout: {
        padding: {
          top: 30,
          right: 15
        }
      },
      maintainAspectRatio: true,
      responsive: false,
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: 'rgba(96,89,51,0.9)',
        titleFontColor: 'rgba(0,0,0,0)',
        titleFontSize: 0,
        bodyFontSize: 17,
        bodyFontFamily: "'Poppins','sans-serif'",
        displayColors: false,
        caretPadding: 21,
        callbacks: {
          label: function(tooltipItem){
            return "$" + Number(tooltipItem.yLabel);
          }
        }
      },
    }
  });
}