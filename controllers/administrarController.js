const productsRequests = require('../requests/productsRequests.js')



module.exports = administrarControllers = {

    agregar: (req, res) => {

        res.render('agregarProductos.ejs', { seccion: "agregar" });
    },
    stock: (req, res) => {

        res.render('stock.ejs', {seccion: "stock"});
    },
    editar: (req, res) => {
        productsRequests.getAllProducts()

        .then(products =>{
            let productsList = products.data.data;

            res.render('editarProductos.ejs', {
                productsList: productsList, 
                seccion: "editar"
            });
        })
        .catch(error=>{console.log(error);})
    },
    archivados: (req, res) => {

        res.render('productosArchivados.ejs', {seccion: "archivados"});
    }
}