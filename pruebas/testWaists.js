const db = require('../database/models');
const sequelize = db.sequelize;

let prueba = () => {

    db.Products_Waists.findAll()
        .then(waists => {

            waists.forEach(waist => {

                console.log(waist.dataValues)
            })
        })
        .catch(error => {

            console.log(error)
        })
}

prueba()