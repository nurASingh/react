/**
 * Created by Arun on 12/6/2015.
 */
var EventDispatcher = require('../dispatcher/EventDispatcher');

var ShubhActions = {

    changeTab: function(text) {
        EventDispatcher.dispatch({
            actionType: 'tabchange',
            text: text
        });
    },


    submit: function(id, text) {
        EventDispatcher.dispatch({
            actionType: 'submit',
            id: id,
            text: text
        });
    }
};

module.exports = ShubhActions;