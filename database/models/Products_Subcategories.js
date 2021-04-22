module.exports= (sequelize, dataTypes) => {
    let alias = "Products_Subcategories";

    let cols = {
        
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(250),
            defaultValue: 'NULL'
        },
        in_menu:{
            type: dataTypes.BOOLEAN,
            defaultValue: 1,
            allowNull: false,
        },
        cat_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        },
        menu_order: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        }
    };
    let config = {
        tableName: 'Products_subcategories',
        timestamps: false,
        underscore: true
    };
    const Products_Subcategories = sequelize.define(alias, cols, config);

    return Products_Subcategories;
}