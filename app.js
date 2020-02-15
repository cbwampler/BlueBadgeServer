require('dotenv').config();
var express = require('express');
var app = express();
var sequelize = require('./db')
var bodyParser = require("body-parser");
var user = require('./controllers/usercontroller')
var testcase = require('./controllers/testcasecontroller')

sequelize.sync()
app.use(bodyParser.json());
app.use(require('./middleware/headers'))  //this has to be done after body parser

app.use('/api/user',user)
app.use(require('./middleware/validate-session'))
app.use('/testcase', testcase)

app.listen(process.env.PORT, function(){
    console.log(`App is listening on Port ${process.env.PORT}`)
}
)