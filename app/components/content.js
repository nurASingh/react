/**
 * Created by Arun on 11/28/2015.
 */

var React = require('react');
var Tab = require('./tab.js');
var Invest = require('./invest.js');
var Cash = require('./cash.js');
var Review = require('./review.js');
var Expenses = require('./expenses.js');
var data = require('../utility/data');
var Store = require('../store/shubhLabhStore');

var Content = React.createClass({
    getInitialState: function() {
        return {active: data.activeTab};
    },
    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState(this.getData());
    },
    getData : function(){
        return {active: data.activeTab};
    },
    render : function () {
        var BodyContent = Expenses;
        switch(this.state.active){
            case 'expense':
                BodyContent = Expenses;
                break;
            case 'invest':
                BodyContent = Invest;
                break;
            case 'cash':
                BodyContent = Cash;
                break;
            case 'final':
                BodyContent = Review;
              //  Tab = <div></div>;
                break;
        }
        return (


            <div id = 'content' className = 'content-area'>
                <Tab />
                <BodyContent />
            </div>
            );
    }
});

module.exports  = Content;
