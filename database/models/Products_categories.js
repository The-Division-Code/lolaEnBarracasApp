module.exports = (sequelize, dataTypes) => {
    let alias = 'Products_Categories';
    
    let cols= {

        id:{
            type: dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(450),
            defaultValue: null
        },
        in_menu:{
            type: dataTypes.BOOLEAN,
            defaultValue: 1
        },
        menu_order:{
            type: dataTypes.INTEGER(1),
            defaultValue: 1
        },
        has_waists:{
            type: dataTypes.BOOLEAN,
            defaultValue: 0,
            allowNull: false
        }

    };

    let config = {
        tableName: 'products_categories',
        timestamps: false,
        underscore: true
    }

    const Products_Categories = sequelize.define(alias,cols,config);

    return Products_Categories
}