module.exports = function(sequelize,DataTypes){
    return sequelize.define('testcase',{
        
        area:DataTypes.STRING,
        category:DataTypes.STRING,
        subcat1:DataTypes.STRING,
        subcat2:DataTypes.STRING,
        owner:DataTypes.INTEGER,
        status:DataTypes.STRING,
        details:DataTypes.STRING,
        expectation:DataTypes.STRING,
        notes:DataTypes.STRING,
        medium:DataTypes.STRING,
        priority:DataTypes.STRING,
        platform:DataTypes.STRING,
        testtype:DataTypes.STRING,
        updatedby:DataTypes.STRING
    })
}