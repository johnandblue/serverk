const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/serverk');

const db = mongoose.connection

module.exports = db;
