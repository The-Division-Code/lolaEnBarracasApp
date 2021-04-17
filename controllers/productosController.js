module.exports = productosController = {

    index: (req, res) => {

        res.render('productos',{seccion: "productos"});
    }
}