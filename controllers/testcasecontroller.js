var express = require('express');
var router = express.Router();
var sequelize = require("../db");
var Testcase = sequelize.import('../models/testcase');
var testresults = sequelize.import ('../models/testresults')

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
    var deskphone = req.body.testcase.deskphone
    var sharpenq = req.body.testcase.sharpenq
    var connectphone = req.body.testcase.connectphone
    var chrome = req.body.testcase.chrome
    var firefox = req.body.testcase.firefox
    var ctisn = req.body.testcase.ctisn
    var ctizd = req.body.testcase.ctizd
    var ctisfdc = req.body.testcase.ctisfdc
    var android = req.body.testcase.android
    var ios = req.body.testcase.ios
    var connect = req.body.testcase.connect
    var quick = req.body.testcase.quick
    var full = req.body.testcase.full
    var regression = req.body.testcase.regression
    var automated = req.body.testcase.automated
    var inboundcall = req.body.testcase.inboundcall
    var chat = req.body.testcase.chat
    var email = req.body.testcase.email
    var tweet = req.body.testcase.tweet
    var tweetdm = req.body.testcase.tweetdm
    var facebook = req.body.testcase.facebook
    var sms = req.body.testcase.sms
    var casein = req.body.testcase.casein
    var voicemail = req.body.testcase.voicemail
    var insights = req.body.testcase.insights       

    Testcase.create({
        area: area,
        category: category,
        subcat: subcat,
        owner: owner,
        status: status,
        details: details,
        expectation: expectation,
        notes: notes,
        deskphone: deskphone,
        sharpenq: sharpenq,
        connectphone: connectphone,
        chrome: chrome,
        firefox: firefox,
        ctisn: ctisn,
        ctizd: ctizd,
        ctisfdc: ctisfdc,
        android: android,
        ios: ios,
        connect: connect,
        quick: quick,
        full: full,
        regression: regression,
        automated: automated,
        inboundcall: inboundcall,
        chat: chat,
        email: email,
        tweet: tweet,
        tweetdm: tweetdm,
        facebook: facebook,
        sms: sms,
        casein: casein,
        voicemail: voicemail,
        insights: insights
        
    }).then(
        function createSuccess(testcase){
            res.json({
                result: testcase   
            })
        },
        function createError(err){
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
    var deskphone = req.body.testcase.deskphone
    var sharpenq = req.body.testcase.sharpenq
    var connectphone = req.body.testcase.connectphone
    var chrome = req.body.testcase.chrome
    var firefox = req.body.testcase.firefox
    var ctisn = req.body.testcase.ctisn
    var ctizd = req.body.testcase.ctizd
    var ctisfdc = req.body.testcase.ctisfdc
    var android = req.body.testcase.android
    var ios = req.body.testcase.ios
    var connect = req.body.testcase.connect
    var quick = req.body.testcase.quick
    var full = req.body.testcase.full
    var regression = req.body.testcase.regression
    var automated = req.body.testcase.automated
    var inboundcall = req.body.testcase.inboundcall
    var chat = req.body.testcase.chat
    var email = req.body.testcase.email
    var tweet = req.body.testcase.tweet
    var tweetdm = req.body.testcase.tweetdm
    var facebook = req.body.testcase.facebook
    var sms = req.body.testcase.sms
    var casein = req.body.testcase.casein
    var voicemail = req.body.testcase.voicemail
    var insights = req.body.testcase.insights        

    Testcase.update({
        area: area,
        category: category,
        subcat: subcat,
        status: status,
        details: details,
        expectation: expectation,
        notes: notes,
        deskphone: deskphone,
        sharpenq: sharpenq,
        connectphone: connectphone,
        chrome: chrome,
        firefox: firefox,
        ctisn: ctisn,
        ctizd: ctizd,
        ctisfdc: ctisfdc,
        android: android,
        ios: ios,
        connect: connect,
        quick: quick,
        full: full,
        regression: regression,
        automated: automated,
        inboundcall: inboundcall,
        chat: chat,
        email: email,
        tweet: tweet,
        tweetdm: tweetdm,
        facebook: facebook,
        sms: sms,
        casein: casein,
        voicemail: voicemail,
        insights: insights
   
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

/**********************
 * Save test results
***********************/

router.post('/save',function(req,res){
    var owner = req.user.id 
    var result = req.body.testcase.result
    var resultNotes = req.body.testcase.resultNotes

    testresults.create({
        result: result,
        resultNotes: resultNotes
        
    }).then(
        function createSuccess(testresults){
            res.json({
                result: testresults   
            })
        },
        function createError(err){
            res.send(500,err.message)
        }
    );
});

module.exports = router;




