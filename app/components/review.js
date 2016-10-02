/**
 * Created by Arun on 12/6/2015.
 */
var React = require('react');
var Tab = require('./tab.js');
var Invest = require('./invest.js');
var Cash = require('./cash.js');
var Expenses = require('./expenses.js');
var Data = require('../utility/data');
var Store = require('../store/shubhLabhStore');
var canvas;
var context;
var cWidth, cHeight, cMargin, cSpace;
var cMarginSpace, cMarginHeight;
var bWidth, bMargin, totalBars, maxDataValue;
var bWidthMargin;
var ctr, numctr, speed;
// axis property
var totLabelsOnYAxis;
var sum = 7500 + 2500 +1500;
var reviewData = new Array();
var data = [parseInt(360 * 7500/sum), parseInt(360 * 2500/sum), parseInt(360 * 1500/sum)];
var labels = ["Payment", "Save", "Cash"];
var colors = ["#FFDAB9", "#E6E6FA", "#E0FFFF"];
var expense = 0;
var cash = 0;
var Saving = 0;
var Review = React.createClass({
    getInitialState: function() {


        for (var i = 0; i < Data.expenses.length; i++) {
            if(!isNaN(Data.expenses[i].payment))
            expense = expense +parseInt( Data.expenses[i].payment);
        }

        for (var i = 0; i < Data.investment.length; i++) {
            if(!isNaN(Data.investment[i].payment))
            Saving = Saving + parseInt(Data.investment[i].payment);
        }
        cash = parseInt(Data.cash);

        console.log(expense + "-"+Saving + "-"+cash);
        reviewData[0] = "Expense," + expense;
        reviewData[1] = "Saving," + Saving;
        reviewData[2] = "Cash," + cash;

        return null;
    },

    componentDidMount : function(){
        this.barChart();
    },
     barChart:function() {
    canvas = document.getElementById('bchart');
    if (canvas && canvas.getContext) {
        context = canvas.getContext('2d');
    }

   // canvas2 = document.getElementById("piechart");
   // var context2 = canvas2.getContext("2d");
    //for (var i = 0; i < data.length; i++) {
       // drawSegment(canvas2, context2, i);
   // }
    this.chartSettings();
    this.drawAxisLabelMarkers();
    this.drawChartWithAnimation();
},

// initialize the chart and bar values
 chartSettings:function() {
    // chart properties
    cMargin = 25;
    cSpace = 60;
    cHeight = canvas.height - 2 * cMargin - cSpace;
    cWidth = canvas.width - 2 * cMargin - cSpace;
    cMarginSpace = cMargin + cSpace;
    cMarginHeight = cMargin + cHeight;
    // bar properties
    bMargin = 15;
    totalBars = reviewData.length;
    bWidth = (cWidth / totalBars) - bMargin;


    // find maximum value to plot on chart
    maxDataValue = 0;
    for (var i = 0; i < totalBars; i++) {
        var arrVal = reviewData[i].split(",");
        var barVal = parseInt(arrVal[1]);
        if (parseInt(barVal) > parseInt(maxDataValue))
            maxDataValue = barVal;
    }

    totLabelsOnYAxis = 10;
    context.font = "10pt Garamond";

    // initialize Animation variables
    ctr = 0;
    numctr = 100;
    speed = 10;
},

// draw chart axis, labels and markers
drawAxisLabelMarkers:function() {
    context.lineWidth = "2.0";
    // draw y axis
    this.drawAxis(cMarginSpace, cMarginHeight, cMarginSpace, cMargin);
    // draw x axis
    this.drawAxis(cMarginSpace, cMarginHeight, cMarginSpace + cWidth, cMarginHeight);
    context.lineWidth = "1.0";
    this.drawMarkers();
},

// draw X and Y axis
 drawAxis:function(x, y, X, Y) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(X, Y);
    context.closePath();
    context.stroke();
},

// draw chart markers on X and Y Axis
 drawMarkers:function() {
    var numMarkers = parseInt(maxDataValue / totLabelsOnYAxis);
    context.textAlign = "right";
    context.fillStyle = "#000"; ;

    // Y Axis
    for (var i = 0; i <= totLabelsOnYAxis; i++) {
        markerVal = i * numMarkers;
        markerValHt = i * numMarkers * cHeight;
        var xMarkers = cMarginSpace - 5;
        var yMarkers = cMarginHeight - (markerValHt / maxDataValue);
        context.fillText(markerVal, xMarkers, yMarkers, cSpace);
    }

    // X Axis
    context.textAlign = 'center';
    for (var i = 0; i < totalBars; i++) {
        arrval = reviewData[i].split(",");
        name = arrval[0];

        markerXPos = cMarginSpace + bMargin + (i * (bWidth + bMargin)) + (bWidth / 2);
        markerYPos = cMarginHeight + 10;
        context.fillText(name, markerXPos, markerYPos, bWidth);
    }

    context.save();

    // Add Y Axis title
    context.translate(cMargin + 10, cHeight / 2);
    context.rotate(Math.PI * -90 / 180);
    context.fillText('Rupees', 0, 0);

    context.restore();

    // Add X Axis Title
    context.fillText('Sale by Category', cMarginSpace + (cWidth / 2), cMarginHeight + 30);
},

 drawChartWithAnimation:function() {
    // Loop through the total bars and draw
    for (var i = 0; i < totalBars; i++) {
        var arrVal = reviewData[i].split(",");
        bVal = parseInt(arrVal[1]);
        bHt = (bVal * cHeight / maxDataValue) / numctr * ctr;
        bX = cMarginSpace + (i * (bWidth + bMargin)) + bMargin;
        bY = cMarginHeight - bHt - 2;
        //this.drawRectangle(bX, bY, bWidth, bHt, true);
        context.beginPath();
        context.rect(bX, bY, bWidth, bHt);
        context.closePath();
        context.stroke();

        if (true) {
            var gradient = context.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(214, 89, 52, 0.83)');
            gradient.addColorStop(1, 'rgba(67,203,36,.15)');
            context.fillStyle = gradient;
            context.strokeStyle = gradient;
            context.fill();
        }
    }
    if (ctr < numctr) {
        ctr = ctr + 1;
        setTimeout(arguments.callee, speed);
    }
},

     drawRectangle:function(x, y, w, h, fill) {
        context.beginPath();
        context.rect(x, y, w, h);
        context.closePath();
        context.stroke();

        if (fill) {
            var gradient = context.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(214, 89, 52, 0.83)');
            gradient.addColorStop(1, 'rgba(67,203,36,.15)');
            context.fillStyle = gradient;
            context.strokeStyle = gradient;
            context.fill();
        }
    },
    render: function(){
        return (
            <div id = 'invest' className = 'container'>
                <canvas id="bchart" height="400" width="600"></canvas>
                <div id = "saleDetails">

                </div>
            </div>
            )
    }
});

module.exports  = Review;