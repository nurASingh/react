/**
 * Created by Arun on 11/25/2015.
 */
var React = require('react');
var Data = require('../utility/data');

var Invest = React.createClass({
    _onlclick : function(s){
        console.log(s + "clicked");
        var party = document.getElementById('party').value;
        var payment = document.getElementById('pay').value;
        var item = {party : party , name : 'Ram Singh' , payment :payment };

        Data.investment.push(item);
        this.state.data.push(item);
        this.setState({data : this.state.data});
        document.getElementById('party').value = '';
        document.getElementById('pay').value='';

    },
    getInitialState: function() {
        return {data: []};
    },
    render : function () {
        var items = this.state.data.map(function(obj){

            var obj1 = <li>
                <div className = "invest-grid-party"> {obj.party}</div>
                <div className = "invest-grid-name">{obj.name}</div>
                <div className = "invest-grid-amount">{obj.payment}</div>
            </li>
            return obj1;
        });
        return (
            <div id = 'invest' className = 'container'>
                <div className = "invest-item">
                    <input id ="party" type = "text" placeholder = "Party"/>
                    <input id ="pay" type = "text" placeholder = "Amount"/>
                    <div className = "invest-add" onClick={this._onlclick}></div>
                </div>
                <div className = "invest-grid">
                    <ul>
                    {items}
                    </ul>
                </div>

            </div>
            );
    }
});

module.exports  = Invest;