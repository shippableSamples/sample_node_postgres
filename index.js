var knex = require('knex');

var db = knex.initialize({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : '',
    database : 'app_test'
  }
});

module.exports.db = db;
