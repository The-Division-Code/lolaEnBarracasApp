module.exports = (sequelize, dataTypes) => {
    let alias = 'Sales_Info';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        initdate:{
            type: dataTypes.DATE,
            defaultValue: '0000-00-00 00:00:00'
        },
        lastmod:{
            type: dataTypes.DATE,
            defaultValue:'0000-00-00 00:00:00',
            allowNull: false
        },
        client_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        },
        random_cookie:{
            type:dataTypes.STRING(15),
            allowNull:false,
            defaultValue: ''
        },
        total:{
            type:dataTypes.FLOAT(10,2),
            allowNull:false,
            defaultValue: 0.00
        },
        total_card:{
            type:dataTypes.FLOAT(10,2),
            allowNull: false,
            defaultValue: 0.00
        },
        s_status:{
            type:dataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:1
        },
        client_message:{
            type:dataTypes.STRING(250),
            allowNull:false,
            defaultValue: ''
        },
        staff_message:{
            type:dataTypes.STRING(250),
            allowNull:false,
            defaultValue: ''
        },
        payment_method:{
            type:dataTypes.BOOLEAN,
            defaultValue:4
        },
        shipping_method:{
            type:dataTypes.BOOLEAN,
            defaultValue:1
        },
        local:{
            type:dataTypes.STRING(45)
        }
    };

    let config = {
        tableName: 'sales_info',
        underscore: true,
        timestamps: true
    };

    const Sales_Info = sequelize.define(alias,cols,config);

    return Sales_Info
}