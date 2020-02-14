var express = require('express');
var router = express.Router();
var sequelize = require("../db");
var Testcase = sequelize.import('../models/testcase');
var User = sequelize.import('../models/user');


/**********************
 * create an item for a user
***********************/

router.post('/create',function(req,res){
    var owner = req.user.id 
    var area = req.body.testcase.area
    var category = req.body.testcase.category
    var subcat = req.body.testcase.subcat
    var status = req.body.testcase.status
    var details = req.body.testcase.details
    var expectation = req.body.testcase.expectation
    var notes = req.body.testcase.notes
    var medium = req.body.testcase.medium
    var priority = req.body.testcase.priority
    var platform = req.body.testcase.platform
    var testtype = req.body.testcase.testtype

    Testcase.create({
        area: area,
        category: category,
        subcat: subcat,
        owner: owner,
        status: status,
        details: details,
        expectation: expectation,
        notes: notes,
        medium: medium,
        priority: priority,
        platform: platform,
        testtype: testtype
    }).then(
        function createSuccess(testcase){
            res.json({
                result: testcase   
            })
        },
        function crateError(err){
            res.send(500,err.message)
        }
    );
});

/**********************
 * get all testcases 
***********************/

router.get('/allcases', function(req,res){
    Testcase.findAll({

    }).then(
        function findAllSuccess(data){
            res.json(data)
        }, function findAll(err){
            res.send(500,err.message)
        }
    );
});

/**********************
 * get testcase by id 
***********************/

router.get('/allcases/:id', function(req,res){
    var primarykey = req.params.id;
    Testcase.findAll({
       where: {id:primarykey}
    }).then(
        function findAllSuccess(data){
            res.json(data)
        }, function findAll(err){
            res.send(500,err.message)
        }
    );
});


/**********************
 * get all testcases for a user
***********************/

router.get('/getall', function(req,res){
    var userid = req.user.id
    Testcase.findAll({
        where: {owner:userid}
    }).then(
        function findAllSuccess(data){
            res.json(data)
        }, function findAll(err){
            res.send(500,err.message)
        }
    );
});

/**********************
 * get testcase item by id
***********************/

router.get("/:id", function(req,res){
    var primarykey = req.params.id;
    Testcase.findOne(
        {
            where: {id:primarykey}
        }
    ).then(
        data => {return data ?res.json(data) : res.send("not authorized to view this record")
        }), (err=>res.send(500,err.message))
});

/**********************
 * update an item 
***********************/

router.put("/update/:id", function(req, res) {
    var primaryKey = req.params.id;
    var area = req.body.testcase.area
    var category = req.body.testcase.category
    var subcat = req.body.testcase.subcat
    var status = req.body.testcase.status
    var details = req.body.testcase.details
    var expectation = req.body.testcase.expectation
    var notes = req.body.testcase.notes
    var medium = req.body.testcase.medium
    var priority = req.body.testcase.priority
    var platform = req.body.testcase.platform
    var testtype = req.body.testcase.testtype   

    Testcase.update({
        area: area,
        category: category,
        subcat: subcat,
        status: status,
        details: details,
        expectation: expectation,
        notes: notes,
        medium: medium,
        priority: priority,
        platform: platform,
        testtype: testtype
    },
    {where: {id: primaryKey}
}).then(
        data => {
            return res.json(data)
        }
), err => res.send(500,err.message);
});

/**********************
 * delete an item from the Database
***********************/

router.delete('/delete/:id', function (req,res){
    var data = req.params.id;

    Testcase
    .destroy({
        where: {id: data}
    }).then(
        function deleteCaseSuccess(data){
            res.send("you removed a testcase item");
        },
        function deleteCaseError(err){
            res.send(500,err.message);
        }
    );
});

module.exports = router;




