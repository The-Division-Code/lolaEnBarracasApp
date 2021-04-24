const db = require('../database/models');
const sequelize = db.sequelize;

let prueba = () => {

    db.Products_Categories.findAll()
        .then(cats => {

            cats.forEach(cat => {

                console.log(cat.dataValues)
            })
        })
        .catch(error => {

            console.log(error)
        })
}

prueba()