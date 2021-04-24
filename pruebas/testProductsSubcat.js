const db = require('../database/models');
const sequelize = db.sequelize;

let prueba = () => {

    db.Products_Subcategories.findAll()
        .then(subcats => {

            subcats.forEach(subcat => {

                console.log(subcat.dataValues);
            })
        })
        .catch(error => {

            console.log(error)
        })
}

prueba()