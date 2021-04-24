const db = require('../database/models');
const sequelize = db.sequelize;

let prueba = () => {

    db.Products.findAll()
        .then(products => {

            products.forEach(product => {

                console.log(product.dataValues);
            })
        })
        .catch(error => {

            console.log(error);
        })
}

prueba();