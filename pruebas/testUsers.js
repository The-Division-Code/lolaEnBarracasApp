const db = require('../database/models');
const sequelize = db.sequelize;

let prueba = () => {


    db.Users.findAll()
        .then(users => {

            users.forEach(user => {

                console.log(user.dataValues)
            })
        })
        .catch(error => {

            console.log(error);
        })
}

prueba()