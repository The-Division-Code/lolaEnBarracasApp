const {check, body} = require('express-validator');
const indexRequests = require('../requests/indexRequests.js');

module.exports = [

    body('username').custom(value => {

        return indexRequests.getByUsername(value)
        .then(response => {

            if(response == null){
                
                return Promise.reject('Username no encontrado.')
            }
        })
    })
]