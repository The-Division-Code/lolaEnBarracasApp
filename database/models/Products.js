module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    
    let cols= {

        id:{
            type: dataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        
        code:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        
        name:{
            type: dataTypes.STRING(250),
            allowNull: false    
        },
        
        short_desc:{
            type: dataTypes.STRING(500),
            allowNull: false
        },
        
        long_desc:{
            type: dataTypes.TEXT('long'),
            allowNull: false
        },
        
        type:{
            type: dataTypes.ENUM('RE', 'AB', 'MU', 'AC', 'LA'),
            allowNull: false,
            defaultValue: 'RE'
        },

        sub_type:{
            type: dataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        
        category:{
            type: dataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        subcategory:{
            type: dataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        price:{
            type: dataTypes.DECIMAL(10,2),
            allowNull: false,
            defaultValue: 0.00
        },
        price2:{
            type: dataTypes.DECIMAL(10,2),
            allowNull: false,
            defaultValue: 0.00
        },

        strikethrough_price:{
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        },
        has_strikethrough_price:{
            type: dataTypes.ENUM('Y','N'),
            allowNull: false,
            defaultValue: 'N'
        },
        stock:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        shows_stock:{
            type: dataTypes.ENUM('Y','N'),
            allowNull: false,
            defaultValue: 'Y'
        },
        size:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        measures:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        material:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        colors:{
            type: dataTypes.STRING(250),
            allowNull: false
        },
        published:{
            type: dataTypes.ENUM('Y','N'),
            allowNull: false
        },
        price3:{
            type: dataTypes.DECIMAL(10,2),
            allowNull: false,
            defaultValue: 0.00
        },

    };

    let config = {
        tableName: 'products',
        timestamps: false,
        underscore: true
    }

    const Products = sequelize.define(alias,cols,config);

    return Products
}