module.exports = (sequelize, dataTypes) => {
    let alias = 'Warranty';

    let cols = {
        id:{
            type: dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        costumer_name:{
            type: dataTypes.STRING(100),
            allowNull:false
        },

        phone:{
            type: dataTypes.INTEGER(15),
            allowNull: false
        },

        product_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },

        color_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },

        waist_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },

        sales_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        status:{
            type: dataTypes.ENUM('recepcionado', 'fabrica', 'reparado', 'para cambio', 'retirado', 'avisado', ' no atendio'),
            allowNull:false,
            defaultValue: 'recepcionado'
        },
        comments: {
            type: dataTypes.STRING(1000),
            defaultValue: null
        }

        
    };

    let config = {
        tableName: 'warranty',
        timestamps: true,
        underscore: true
    };

    const Warranty = sequelize.define(alias,cols,config);

    return Warranty
}