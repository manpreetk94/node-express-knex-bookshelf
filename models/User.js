var bookshelf = require('bookshelf');
var knex = require('knex');

var knexfile = require('../knexfile');
var db = knex(knexfile.development);
var bookshelf = require('bookshelf')(db);
var Post = require('./Post');


module.exports =  bookshelf.Model.extend({
  	tableName: 'users',
  	posts: function () { 
  		return this.hasMany(Post ,'user_id','id');
  	}
});

