module.exports = (sequelize, dataTypes) => {
    let alias = 'Products_Colors';
    
    let cols= {
        product_id:{
            type: dataTypes.INTEGER(10),
            defaultValue: 0,
            primaryKey: true
        },
        color_id:{
            type: dataTypes.INTEGER(10),
            defaultValue: 0
        }

    };

    let config = {
        tableName: 'products_colors',
        timestamps: false,
        underscore: true
    }

    const Products_Colors = sequelize.define(alias,cols,config);

    return Products_Colors
}