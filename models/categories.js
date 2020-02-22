module.exports = function(sequelize,DataTypes){
    return sequelize.define('categories',{
        
        area:DataTypes.STRING,
        category:DataTypes.STRING,
        subcat:DataTypes.STRING,
    })
}