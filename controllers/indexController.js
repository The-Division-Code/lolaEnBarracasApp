const db = require('../database/models');
const indexRequests = require('../requests/indexRequests.js');
let { validationResult } = require(`express-validator`);
const sequelize = db.sequelize;

module.exports = indexController = {

    index: (req, res) => {

        res.render('index.ejs');
    },
    procesoLogin: (req, res) => {

        let errors = validationResult(req)

        if (errors.isEmpty()) {

            indexRequests.getByUsername(req.body.username)
                .then(user => {

                    console.log(user.data.data)

                    if (req.body.password == user.data.data.password) {

                        req.session.user = {

                            role: user.data.data.role
                        }

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