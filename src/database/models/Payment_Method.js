module.exports = (sequelize, dataTypes) => {
    let alias = 'Payment_Method';

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
        tableName: 'payment_method',
        timestamps: false,
        underscore: true
    };

    const Payment_Method = sequelize.define(alias,cols,config);

    return Payment_Method
}