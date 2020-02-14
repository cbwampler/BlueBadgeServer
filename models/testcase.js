module.exports = function(sequelize,DataTypes){
    return sequelize.define('testcase',{
        
        area:DataTypes.STRING,
        category:DataTypes.STRING,
        subcat:DataTypes.STRING,
        owner:DataTypes.INTEGER,
        status:DataTypes.STRING,
        details:DataTypes.TEXT,
        expectation:DataTypes.TEXT,
        notes:DataTypes.TEXT,
        medium:DataTypes.STRING,
        priority:DataTypes.STRING,
        platform:DataTypes.STRING,
        testtype:DataTypes.STRING,
    })
}