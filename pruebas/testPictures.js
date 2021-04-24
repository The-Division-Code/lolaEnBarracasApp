const db = require('../database/models');
const sequelize = db.sequelize;

let prueba = () => {

    db.Products_Pictures.findAll()
        .then(pictures => {

            pictures.forEach(picture => {

                console.log(picture.dataValues)
            })
        })
        .catch(error => {

            console.log(error)
        })
}

prueba()