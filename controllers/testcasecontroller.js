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
    var subcat1 = req.body.testcase.subcat1
    var subcat2 = req.body.testcase.subcat2
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
        subcat1: subcat1,
        subcat2: subcat2,
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
    var userid = req.user.id
    Testcase.findOne(
        {
            where: {id:primarykey, 
            owner:userid}
        }
    ).then(
        data => {return data ?res.json(data) : res.send("not authorized to view this record")
        }), (err=>res.send(500,err.message))
});

/**********************
 * update an item for a user
***********************/

router.put("/update/:id", function(req, res) {
    var primaryKey = req.params.id;
    var userid = req.user.id 
    var area = req.body.testcase.area
    var category = req.body.testcase.category
    var subcat1 = req.body.testcase.subcat1
    var subcat2 = req.body.testcase.subcat2
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
        subcat1: subcat1,
        subcat2: subcat2,
        status: status,
        details: details,
        expectation: expectation,
        notes: notes,
        medium: medium,
        priority: priority,
        platform: platform,
        testtype: testtype
    },
    {where: {id: primaryKey, owner: userid}
}).then(
        data => {
            return res.json(data)
        }
), err => res.send(500,err.message);
});

/**********************
 * delete an item for a user
***********************/

router.delete('/delete/:id', function (req,res){
    var data = req.params.id;
    var userid = req.user.id;

    Testcase
    .destroy({
        where: {id: data, owner: userid}
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
