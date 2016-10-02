/**
 * Created by Arun on 11/25/2015.
 */

var React = require('react');
var data = require('../utility/data');

var Cash = React.createClass({
    _onlclick : function(s){
        data.cash = document.getElementById('cash').value;
        console.log(data.cash);
    },
    render : function () {
        return (
            <div id = 'cash' className = 'cash-container'>
                <div className = "cash-logo">

                </div>
                <div className = "cash-details">
                    <span> Enter your total cash</span>
                    <input type = "text" id = "cashtxt" placeholder = "Enter Cash"/>

                </div>
            </div>
            );
    }
});

module.exports  = Cash;
