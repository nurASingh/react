/**
 * Created by Arun on 11/25/2015.
 */
var React = require('react');
var data = require('../utility/data');
var Store = require('../store/shubhLabhStore');
var Tab = React.createClass({
    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({a:1});
    },
    render : function () {
        var expenseClass = 'tab expense';
        var investClass = 'tab invest';
        var cashClass = 'tab cash';
        switch(data.activeTab){
            case 'cash':
                cashClass = 'tab cash-active';
                break;
            case 'invest':
                investClass = 'tab invest-active';
                break;
            case 'expense':
                expenseClass = 'tab expense-active';
                break;
        }
        return (
            <div id = 'tabs' className = 'tab-container'>
                <div className = {expenseClass}></div>
                <div className = {investClass}></div>
                <div className = {cashClass}></div>
            </div>
            );
    }
});

module.exports  = Tab;