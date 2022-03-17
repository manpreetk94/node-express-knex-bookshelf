var express = require('express');
var router = express.Router();

var User = require('../models/User');


/* GET users listing. */
router.get('/list', function(req, res, next) {
 User.fetchAll({withRelated: ['posts']}).then(function(results) {
        res.status(200).send({
            message: "Users List",
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


/* GET users detail. */
router.get('/detail/:id', function(req, res, next) {
    var id = req.params.id;
    User.where({id:id}).fetch({withRelated: ['posts']}).then(function(results) {
        res.status(200).send({
            message: "Users List",
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


/*add user */
router.post('/add', function(req, res, next) {
    var data = req.body;
    new User({'name':data.name,'email':data.email,'phone_number':data.phone_number})
                   .save(null, {method: 'insert'})
                   .then(function(model) {
                        res.status(200).send({
                            message: "Users has been addeed",
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
