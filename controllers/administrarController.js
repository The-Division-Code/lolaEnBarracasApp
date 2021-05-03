const { read } = require("original-fs");
const db = require("../database/models");
const productsRequests = require("../requests/productsRequests.js");

module.exports = administrarControllers = {
  agregar: (req, res) => {
    let categories = productsRequests.getAllCategories();
    let colors = productsRequests.getAllPColors();

    Promise.all([categories, colors])
      .then(([categorias, colores]) => {
        res.render("agregarProductos.ejs", {
          categorias: categorias.data.data,
          colores: colores.data.data,
          seccion: "productos",
        });
      })
      .catch((error) => console.log(error));
  },
  agregando: (req, res) => {
    db.Products.create({
      name: req.body.name,
      category: req.body.categories,
      subcategory: req.body.subcategories,
      price: req.body.price,
      strikethrough_price: req.body.listPrice,
  //   }).then((product) => {
  //     db.Products_Colors.create({
  //       product_id: p
  //     });
   })
   .then(() => res.redirect('/administrar/stock'))
   .catch(error => console.log(error))
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
  // Terminado, funciona ok.
  desarchivar: (req, res) => {
    db.Products.update(
      {
        stock: 1,
      },
      {
        where: { id: req.body.id },
      }
    )
      .then(() => {
        res.redirect("/administrar/stock");
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
