module.exports = administrarControllers = {

    agregar: (req, res) => {

        res.render('agregarProductos.ejs', { seccion: "agregar" });
    },
    stock: (req, res) => {

        res.render('stock.ejs', {seccion: "stock"});
    },
    editar: (req, res) => {

        res.render('editarProductos.ejs', {seccion: "editar"});
    },
    archivados: (req, res) => {

        res.render('productosArchivados.ejs', {seccion: "archivados"});
    }
}