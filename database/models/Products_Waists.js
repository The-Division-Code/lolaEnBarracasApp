module.exports= (sequelize, DataTypes) => {
    let alias = "Products_Waists";

    let cols = {
        
        product_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: 0
        },
        waist_id: {
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
    const Products_Waist = sequelize.define(alias, cols, config);

    return Products_Waist;
}