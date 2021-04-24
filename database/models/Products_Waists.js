module.exports= (sequelize, DataTypes) => {
    let alias = "Products_Waists";

    let cols = {
        
        product_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: 0,
            primaryKey: true
        },
        waist_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: 0
        },
        stock_lola1013: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: 0
        },
        stock_lola774: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: 0
        },
        stock_total: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: 0
        }
    };
    let config = {
        tableName: 'products_waists',
        timestamps: false,
        underscore: true
    };
    const Products_Waists = sequelize.define(alias, cols, config);

    return Products_Waists;
}