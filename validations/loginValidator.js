const {check, body} = require('express-validator');
const indexRequests = require('../requests/indexRequests.js');

module.exports = [

    body('username').custom(value => {

        return indexRequests.getByUsername(value)
        
        .then(response => {

            if(response.data.data == null){
            
                return Promise.reject('Username no encontrado.');
            }
        })
    }),
    body('password').custom((value, {req}) => {

        return indexRequests.getByUsername(req.body.username)
        .then(response => {

            if(response.data.data != null){

                if(value != response.data.data.password){

                    return Promise.reject('Contraseña incorrecta');
                }
            }
        })


    })
]