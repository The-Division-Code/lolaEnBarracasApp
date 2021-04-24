const db = require('../database/models');
const sequelize = db.sequelize;

let prueba = () => {

    db.P_Colors.findAll()
        .then(pColors => {

            pColors.forEach(pColor => {

                console.log(pColor.dataValues)
            })
        })
        .catch(error => {

            console.log(error)
        })
}

prueba();