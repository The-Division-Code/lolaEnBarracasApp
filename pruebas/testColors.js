const db = require('../database/models');
const sequelize = db.sequelize;

let prueba = () => {

    db.Products_Colors.findAll()
        .then(colors => {

            colors.forEach(color => {

                console.log(color.dataValues)
            })
        })
        .catch(error => {

            console.log(error)
        })
}

prueba()