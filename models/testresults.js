module.exports = function(sequelize,DataTypes){
    return sequelize.define('testresults',{
        
        area:DataTypes.STRING,
        category:DataTypes.STRING,
        subcat1:DataTypes.STRING,
        subcat2:DataTypes.STRING,
        details:DataTypes.TEXT,
        expectation:DataTypes.TEXT,
        notes:DataTypes.TEXT,
        medium:DataTypes.STRING,
        priority:DataTypes.STRING,
        platform:DataTypes.STRING,
        testtype:DataTypes.STRING,
        results:DataTypes.STRING
    })
}