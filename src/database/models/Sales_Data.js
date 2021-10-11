module.exports = (sequelize, dataTypes) => {
    let alias = 'Sales_Data';

    let cols = {
        prod_id:{
            type: dataTypes.INTEGER(11),
            defaultValue: 0
        },

        sales_id:{
            type: dataTypes.INTEGER(11),
            defaultValue: 0,
            primaryKey: true
        },

        qty:{
            type: dataTypes.INTEGER(11),
            defaultValue: 0
        },

        price:{
            type: dataTypes.DECIMAL(10,2),
            defaultValue: 0.00
        },

        color_id:{
            type: dataTypes.INTEGER(11),
            defaultValue: 0
        },

        waist_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        },

        type_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        },

        print_type:{
            type: dataTypes.ENUM('1','2'),
            defaultValue: '1'
        }
    };

    let config = {
        tableName: 'sales_data',
        timestamps: false,
        underscore: true
    };

    const Sales_Data = sequelize.define(alias,cols,config);

    return Sales_Data
}