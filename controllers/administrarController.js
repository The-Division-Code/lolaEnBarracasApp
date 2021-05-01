const db = require("../database/models");
const productsRequests = require("../requests/productsRequests.js");

module.exports = administrarControllers = {
  agregar: (req, res) => {
    res.render("agregarProductos.ejs", { seccion: "agregar" });
  },
  stock: (req, res) => {
    productsRequests
      .getAllProducts()

      .then((products) => {
        let productsList = products.data.data;
        res.render("stock.ejs", {
          productsList: productsList,
          seccion: "stock",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  editar: (req, res) => {
    productsRequests
      .getAllProducts()

      .then((products) => {
        let productsList = products.data.data;

        res.render("editarProductos.ejs", {
          productsList: productsList,
          seccion: "editar",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  archivados: (req, res) => {
    productsRequests
      .getAllProducts()

      .then((products) => {
        let productsList = products.data.data;
        res.render("productosArchivados.ejs", {
          seccion: "archivados",
          productsList: productsList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  desarchivar: (req, res) => {
    // db.Products.update({
    //   stock: req.body.stock,
    // }),
    //   {
    //     where: {
    //       id: req.params.id,
    //     }
    //       .then((products) => {
    //         let productsList = products.data.data;
    //         res.render("productosArchivados.ejs", {
    //           seccion: "archivados",
    //           productsList: productsList,
    //         });
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       }),
    //   };
    db.Products.findByPk(req.body.id)
      .then((product) => {
        console.log(product);
      })
      .catch((error) => console.log(error));
  },
};
