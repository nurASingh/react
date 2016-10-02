/**
 * Created by Arun on 11/28/2015.
 */
var React = require('react');

var Header = React.createClass({
    _onlclick : function(s){
        console.log(s + "clicked");
    },
    render : function () {
        return (
                <div id = "headContainer">
                    <div id = "logo" className = "header-logo"></div>
                    <div id = "text" className = "header-text"><span>Shubh - Labh</span></div>
                    <div id= "options" className = "header-options"></div>
                </div>
            );
    }
});

module.exports  = Header;
