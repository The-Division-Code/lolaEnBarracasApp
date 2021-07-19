module.exports = (sequelize, dataTypes) => {

    let alias = 'Carts';

    let cols = {
        
        product_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        waist_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        color_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        user_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        check_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    };

    let config = {
        tableName: 'carts',
        timestamps: false,
        underscore: false
    };

    const Carts = sequelize.define(alias, cols, config)

    return Carts
}