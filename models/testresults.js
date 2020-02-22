module.exports = function(sequelize,DataTypes){
    return sequelize.define('testresults',{
        
        testName:DataTypes.STRING,
        testrunId:DataTypes.STRING,
        testcaseId:DataTypes.INTEGER,
        owner:DataTypes.INTEGER,
        area:DataTypes.STRING,
        category:DataTypes.STRING,
        subcat:DataTypes.STRING,
        details:DataTypes.TEXT,
        expectation:DataTypes.TEXT,
        notes:DataTypes.TEXT,
        priority:DataTypes.STRING,
        medium:DataTypes.STRING,
        platform:DataTypes.STRING,
        testtype:DataTypes.STRING,
        resultNotes:DataTypes.TEXT,
        results:DataTypes.STRING
    })
}