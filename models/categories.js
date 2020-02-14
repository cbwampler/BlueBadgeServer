module.exports = function(sequelize,DataTypes){
    return sequelize.define('categoies',{
        
        area:DataTypes.STRING,
        category:DataTypes.STRING,
        subcat:DataTypes.STRING,
    })
}