/**
 * Created by Arun on 12/5/2015.
 */
var AppDispatcher = require('../dispatcher/EventDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../utility/data');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var ShubhLabhStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {

        console.log('emitChange');
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});


// Register callback to handle all updates
AppDispatcher.register(function(action) {
    var text;
    switch(action.actionType) {
        case 'tabchange':
            ShubhLabhStore.emitChange();
            break;
        case 'submit':
            ShubhLabhStore.emitChange();
            break;
        default:
        // no op
    }
});

module.exports = ShubhLabhStore;