var express = require('express');
var router = express.Router();

var Post = require('../models/Post');


/* GET posts listing. */
router.get('/list', function(req, res, next) {
 Post.fetchAll({withRelated: ['user']}).then(function(results) {
        res.status(200).send({
            message: "Post List",
            status:1,
            data:results.toJSON()           
        }); 

    }).catch((e)=>{
        res.status(500).send({
            message: e,
            status:0            
        });
    });
});



/* GET post detail with user detail listing. */
router.get('/detail/:id/', function(req, res, next) {
 var id = req.params.id;
 Post.where({id:id}).fetch({withRelated: ['user']}).then(function(results) {
        res.status(200).send({
            message: "Post Detail",
            status:1,
            data:results.toJSON()           
        }); 

    }).catch((e)=>{
        res.status(500).send({
            message: e,
            status:0            
        });
    });
});


/*add post */
router.post('/add', function(req, res, next) {
    var data = req.body;
    new Post({'title':datatitle,'description':data.description,'user_id':data.user_id})
           .save(null, {method: 'insert'})
           .then(function(model) {
                res.status(200).send({
                    message: "Post has been addeed",
                    status:1,
                }); 
            }).catch((e)=>{
                res.status(500).send({
                    message: e,
                    status:0            
                });
            });
});



module.exports = router;
