var React = require('react');

var Header = require('../app/components/header');
var Content = require('../app/components/content');
var Tab = require('../app/components/tab');
var Invest = require('../app/components/invest');
var Footer = require('../app/components/footer');
var Cash = require('../app/components/cash');
var PouchDB = require('pouchdb');
var MyView = React.createClass({
    render: function(){
        return (
            <div>
                <Header  />
                <Content />
                <Footer />
            </div>
            );
    }
});

React.render(<MyView />, document.getElementById('main'));