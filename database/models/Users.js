module.exports = (sequelize, dataTypes) => {

    let alias = 'Users';

    let cols = {

        id:{
            type: dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username:{
            type: dataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        password:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        role:{
            type: dataTypes.TINYINT(),
            allowNull: false,
            defaultValue: 0
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false,
        underscore: false
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}