const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = indexController = {

    index: (req, res) => {

        res.render('index.ejs');
    },
    procesoLogin: (req, res) => {

        let username = req.body.username;
        let password = req.body.password;

        db.Users.findOne({ where: {username: "admin"} })
            .then(user => {

               console.log(user);
            })
            .catch(error => {

                console.log(error);
            })
    }
}