const mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect('mongod://localhost/todo-api');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');