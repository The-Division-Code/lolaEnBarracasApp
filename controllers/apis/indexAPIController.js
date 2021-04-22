const db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = indexAPIController = {

    index: (req, res) => {

        db.Users.findAll()
            .then(users => {

                for(let i = 0; i < users.length; i++){

                    users[i].setDataValue;
                }

                let respuesta = {

                    meta: {
                        
                        status: 200,
                        total: users.length,
                        url: 'http://localhost:3030/api/index'
                    },
                    data: users
                }

                res.json(respuesta)
            })
            .catch(error => {

                console.log(error);
            })
    },
    user: (req, res) => {

        db.Users.findOne({ where: { username: req.params.username } })
            .then(user => {

                let respuesta;

                if(!user){

                    respuesta = {

                        meta: {
                            
                            status: 404,
                            url: `http://localhost:3030/api/index/${req.params.username}`
                        },
                        data: user
                    }
                } else {

                    respuesta = {

                        meta: {
    
                            status: 200,
                            total: user.length,
                            url: `http://localhost:3030/api/index/${req.params.username}`
                        },
                        data: user
                    }
                }
                
                res.json(respuesta);
                
            })
            .catch(error => {

                console.log(error)
            })
    }
}