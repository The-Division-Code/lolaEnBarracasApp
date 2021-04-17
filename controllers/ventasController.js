module.exports = ventasController = {

    remito: (req, res) => {

        res.render('nuevoRemito',{seccion: "remito"});
    },
    historial: (req, res) => {

        res.render('historialRemitos',{seccion: "historial"});
    },
    devoluciones: (req, res) => {

        res.render('devoluciones', {seccion: "devoluciones"});
    }
}