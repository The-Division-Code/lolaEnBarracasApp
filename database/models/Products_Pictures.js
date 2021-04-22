module.exports = (sequelize, dataTypes) => {
    let alias = 'Products_Pictures';
    
    let cols= {
        product_id:{ 
            type: dataTypes.INTEGER(10),
            defaultValue: null
        },
        picture:{
            type:STRING(300),
        },
        orden: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        }
    };

    let config = {
        tableName: 'products_pictures',
        timestamps: false,
        underscore: true 
    }

    const Products_Pictures = sequelize.define(alias,cols,config);

    return Products_Pictures;
}