const db = require('../database/models');
const sequelize = db.sequelize;

let prueba = (username, password) => {


    db.Users.findOne({where:{username: username}})
        .then(user => {

            if(password == user.password){

                console.log("Exito");
            }
        })
        .catch(error => {

            console.log(error);
        })
}

prueba("admin", "admin")