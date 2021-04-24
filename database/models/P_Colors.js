module.exports = (sequelize, dataTypes) => {

    let alias = 'P_Colors';

    let cols = {
        id:{
            type: dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        desc:{
            type: dataTypes.STRING(45),
            defaultValue: 'color'
        },
        hex:{
            type: dataTypes.STRING(45),
            defaultValue: 'ffffff'
        },

        picture:{
            type: dataTypes.STRING(45),
        },

        orden:{
            type: dataTypes.INTEGER(),
            defaultValue: 0
        },
    };

    let config = {
        tableName: 'p_colors',
        timestamps: false,
        underscore: false
    };

    const P_Colors = sequelize.define(alias, cols, config)

    return P_Colors
}