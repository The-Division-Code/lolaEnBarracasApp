const db = require('../../database/models');

const ventasAPIController = {
    index: (req, res) => {
        let respuesta = {
            meta: {
                status: 200,
                url: "http://localhost:3030/api/sells"
            },
            data: {
                checks: "http://localhost:3030/api/sells/checks",
                carts: "http://localhost:3030/api/sells/carts",
            },
        };
        res.json(respuesta);
    },
    checks: (req, res) => {

        db.Checks.findAll()
            .then(checks => {
                for (let i = 0; i < checks.length; i++) {
                    checks[i].setDataValue;
                }
                let respuesta = {
                    meta: {
                        status: 200,
                        url: "http://localhost:3030/api/sells/checks"
                    },
                    data: checks
                }
                checks == null ? res.send("No encontrado") : res.json(respuesta);
            })
            .catch(error => {
                console.log(error);
            })

    }
}

module.exports = ventasAPIController;