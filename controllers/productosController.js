const productsRequests = require("../requests/productsRequests.js");

module.exports = productosController = {
    index: (req, res) => {
        let products = productsRequests.getAllProducts();
        let colors = productsRequests.getAllPColors();
        let waists = productsRequests.getAllPWaists()
        Promise.all([products, colors, waists])
      .then(([productos, colores, talles]) => {
        res.render('productos',{
        productos: productos.data.data,
        colores: colores.data.data,
        talles: talles.data.data,
        seccion: "productos"});

      })
    },
    search: (req,res) =>{
        let categories = productsRequests.getAllCategories();
        let colors = productsRequests.getAllPColors();
    }
}