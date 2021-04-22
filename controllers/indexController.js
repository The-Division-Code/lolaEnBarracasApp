const db = require('../database/models');
let {validationResult} = require(`express-validator`);
const sequelize = db.sequelize;

module.exports = indexController = {

    index: (req, res) => {

        res.render('index.ejs');
    },
    procesoLogin: (req, res) => {

        let errors = validationResult(req)

        if(errors.isEmpty()){

            db.Users.findOne({ where: {username: req.body.username} })
            .then(user => {

               if(req.body.password == user.password){

                req.session.user ={

                    role: user.role
                }

                req.locals.user = req.session.user;

                res.redirect('/productos');
               }
            })
            .catch(error => {

                console.log(error);
            })
        } else {

            res.render('index', {
                errors: errors.mapped(),
                old: req.body
            })
        }

        
    }
}