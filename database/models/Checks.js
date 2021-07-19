module.exports = (sequelize, dataTypes) => {

    let alias = "Checks";

    let cols = {
        id:{
            type: dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        total:{
            type: dataTypes.INTEGER(),
            allowNull: false
        },
        user_id:{
            type: dataTypes.INTEGER(),
            allowNull: false
        }
    };

    let config = {
        tableName: 'checks',
        timestamps: false,
        underscore: false
    };

    const Checks = sequelize.define(alias, cols, config);

    return Checks;
}