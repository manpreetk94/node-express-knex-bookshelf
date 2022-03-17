var bookshelf = require('bookshelf');
var knex = require('knex');

var knexfile = require('../knexfile');
var db = knex(knexfile.development);
var bookshelf = require('bookshelf')(db);
var User = require('./User');

module.exports =  bookshelf.Model.extend({
  	tableName: 'posts',
  	user: function () { 
  		return this.hasOne(User ,'id','user_id');
  	}
});

