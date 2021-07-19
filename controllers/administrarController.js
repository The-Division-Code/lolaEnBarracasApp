const db = require("../database/models");
const productsRequests = require("../requests/productsRequests.js");
const qrcode = require('qrcode')

module.exports = administrarControllers = {

  agregar: (req, res) => {

    let categories = productsRequests.getAllCategories();
    let colors = productsRequests.getAllPColors();

    Promise.all([categories, colors])
      .then(([categorias, colores]) => {

        res.render("agregarProductos.ejs", {

          categorias: categorias.data.data,
          colores: colores.data.data,
          seccion: "agregar",
        });
      })
      .catch((error) => console.log(error));
  },
  agregando: (req, res) => {

    let lastId;

    let findLastId = db.Products.findOne({ order: [["id", "DESC"]], limit: 1 })

    let productCreation = db.Products.create({

      name: req.body.name,
      category: req.body.categories,
      subcategory: req.body.subcategories,
      price: req.body.price,
      strikethrough_price: req.body.listPrice,
      stock: 1
    })

    let getAllWaists = db.P_Waists.findAll()

    Promise.all([findLastId, productCreation, getAllWaists])
      .then(([idFound, productCreation, waists]) => {

        lastId = idFound.id;

        productCreation

        waists.forEach(waist => {

          db.Products_Waists.create({

            product_id: lastId + 1,
            waist_id: waist.id,
            color_id: 0,
            stock_lola1013: 0,
            stock_lola774: 0,
            stock_total: 0 // Para editar el stock, se usa eval(stock1 + stock2) con string interpolation.
          })
        })

        res.redirect('/administrar/editar')
      })
      .catch(error => console.log(error))
  },
  stock: (req, res) => {

    productsRequests.getAllProducts()

      .then((products) => {
        let productsList = products.data.data;
        res.render("stock.ejs", {
          productsList: productsList,
          seccion: "stock",
          qrcode: qrcode
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  editarStock: (req, res) => {
    console.log(req.body.product_id)
    db.Products_Waists.update({
      stock_lola1013: req.body.stock_lola1013_1,
      stock_lola774: req.body.stock_lola774_1,
      stock_total: eval(req.body.stock_lola1013_1 + req.body.stock_lola774_1)
    }, {
      where: {
        product_id: req.body.product_id,
      }
    })
      .then(() => {
        res.redirect('/')
      })
      .catch(error => console.log(error))
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
  archivar: (req, res) => {
    db.Products.update(
      {
        stock: 0,
      },
      {
        where: { id: req.body.id },
      }
    )
      .then(() => {
        res.redirect("/administrar/editar");
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
