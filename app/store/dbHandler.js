var PouchDB = require('pouchdb');
var db = new PouchDB('shubhLabhDB');

function addTodo(text) {
    var todo = {
        _id: new Date().toISOString(),
        title: text,
        party : 'Solomon and company',
        payment : 5000,
        invest : 2000,
        cash : 300,
        date : (new Date().getDate() )+ ':' + (new Date().getMonth()) + ':' + (new Date().getFullYear()) ,
        completed: false
    };
    db.put(todo, function callback(err, result) {
        if (!err) {
            console.log('Successfully posted a todo!');
            showTodos();
        }
    });
}
//addTodo('hello');

showTodos()

function showTodos() {
    db.allDocs({include_docs: true, descending: true}, function(err, doc) {
        redrawTodosUI(doc.rows);
    });
}


function redrawTodosUI(data){
    for(var i = 0 ; i< data.length;i++){
        if(data[i].doc.date == '7:11:2015')
            console.log(data[i].doc);
    }
}