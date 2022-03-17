# APIs using Node with Express, Knex,Bookshelf
![Express](https://camo.githubusercontent.com/0566752248b4b31b2c4bdc583404e41066bd0b6726f310b73e1140deefcc31ac/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67)
![Mysql](https://avatars.githubusercontent.com/u/2452804?s=200&v=4)
![Node](https://camo.githubusercontent.com/720ed473d178f9380291709d2223860ade4f3c7bc368e3fea1ad057b8dc9c6f5/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2d6c696768742e737667)

### Dependencies

This Package is currently using following dependencies.
```
* [bookshelf] - "^1.2.0"
* [express]    - "~4.16.1"
* [knex]    - "^1.0.4"
* [mysql]    - "^2.18.1"
```

## To run the project

Install Dependencies
```js

sudo npm i

```

### To run migrations
```js
knex migrate:latest

````


### Start Project
```js
sudo npm start

````


## To add more tables using knex migrations


```js
knex migrate:make categories

````

This command will add new migration file in 'migrations' folder like below.
```js
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

````

Add columns structure into this file and save this

```js
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable('categories', function(t) {
        t.increments('id').unsigned().primary();
        t.integer('name');     
        t.timestamps(true,true);     
       
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.dropTable('categories');
};

````

Run the migrate command to create this in Database

```js
knex migrate:latest

```


## To add more columns in existing table using knex migrations

```js
knex migrate:make add_status_to_categories

````

```js
exports.up = function(knex, Promise) {
    return knex.schema.table('categories', function(t) {
        t.integer('status').defaultTo(1);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('categories', function(t) {
        t.dropColumn('status');
    });
};


````

## To remove columns in existing table using knex migrations
```js
knex migrate:make remove_status_from_categories

````


```js
exports.up = function(knex, Promise) {
    return knex.schema.table('categories', function(t) {
        t.dropColumn('status');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('categories', function(t) {
        t.enum('status').notNull();
    });
};

````


## Model Relations ORM


This is an exmample of hasmany relation in User model

```js
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


```