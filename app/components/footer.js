/**
 * Created by Arun on 12/5/2015.
 */
var React = require('react');
var data = require('../utility/data');
var Action = require('../action/ShubhAction');

var Footer = React.createClass({
    _onlclick : function(s){
        var curTab = data.activeTab;
        console.log('click');
        switch(curTab){
            case 'cash':
                data.activeTab = 'final';
                data.cash = document.getElementById('cashtxt').value;
                Action.changeTab('final');
                break;
            case 'invest':
                data.activeTab = 'cash';

                Action.changeTab('cash');
                break;
            case 'expense':
                data.activeTab = 'invest';

                Action.changeTab('invest');
                break;
        }
    },
    render : function () {
        return (
            <div id = 'footer' className = 'footer-container'>
                <div className = "next" onClick = {this._onlclick}></div>
                <div className = "copyright">
                    <span>By</span>
                    <span>Arun Kumar Singh</span>
                </div>
            </div>
            );
    }
});

module.exports  = Footer;