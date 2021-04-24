const db = require('../database/models');
const sequelize = db.sequelize;

let prueba = () => {

    db.P_Waists.findAll()
        .then(pWaists => {

            pWaists.forEach(pWaist => {

                console.log(pWaist.dataValues)
            })
        })
        .catch(error => {

            console.log(error)
        })
}

prueba()