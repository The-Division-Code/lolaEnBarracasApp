module.exports = (sequelize, dataTypes) => {
    let alias = 'Shipping_Methods';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(250),
            default: null
        },
    };

    let config = {
        tableName: 'shipping_methods',
        timestamps: false,
        underscore: true
    };

    const Shipping_Methods = sequelize.define(alias,cols,config);

    return Shipping_Methods
}