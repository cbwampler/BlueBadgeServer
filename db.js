const Sequelize = require('sequelize')

const sequelize = new Sequelize('bluebadge','postgres','password', {
    host:'localhost',
    dialect:'postgres'
})

sequelize.authenticate().then(
    function() {
        console.log('Conneced to bluebadge postgress database')
    },
    function(err){
        console.log(err)
    }
)

module.exports = sequelize