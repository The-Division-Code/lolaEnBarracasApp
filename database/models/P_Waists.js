module.exports = (sequelize, dataTypes) => {

    let alias = 'P_Waists';

    let cols = {
        id:{
            type: dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        group:{
            type: dataTypes.ENUM('M','W', 'C'),
            defaulValue: 'M'
        },
        desc:{
            type: dataTypes.STRING(45),
            defaultValue: null
        },
        orden:{
            type: dataTypes.INTEGER(11),
            defaulValue: 0
        }
    };

    let config = {
        tableName: 'p_waists',
        timestamps: false,
        underscore: false
    };

    const P_Waists = sequelize.define(alias, cols, config)

    return P_Waists
}