const db = require("../database/models");

module.exports = administrarController = {
    agregando: (req, res) => {
        let lastId;    
        let findLastId = db.Products.findOne({ order: [["id", "DESC"]], limit: 1 });
        let productCreation = db.Products.create({
          name: req.body.name,
          category: req.body.categories,
          subcategory: req.body.subcategories,
          price: req.body.price,
          strikethrough_price: req.body.listPrice,
          season: req.body.season,
          stock: 1,
        });
    
        
        let colors = req.body.colors;
        colors = colors.split(",");
        console.log(colors);
    
        let getAllWaists = db.P_Waists.findAll();
    
        Promise.all([findLastId, productCreation, getAllWaists, colors])
          .then(([idFound, productCreation, waists, colores ]) => {
            
            lastId = idFound.id;
    
            db.Products_Pictures.create({
              product_id: lastId + 1,
              picture: req.files[0] ? req.files[0].filename : "index.jpg",
              orden: 1
            })
    
            productCreation;
            colores.forEach((color) => {
              console.log(color);
              waists.forEach((waist) => {
                db.Products_Waists.create({
                  product_id: lastId + 1,
                  waist_id: waist.id,
                  color_id: color,
                  stock_lola1013: 0,
                  stock_lola774: 0,
                  stock_total: 0, // Para editar el stock, se usa eval(stock1 + stock2) con string interpolation.
                });
              });
              db.Products_Colors.create({
                product_id: lastId + 1,
                color_id: color,
              });
            });
    
            res.send("Producto agregado correctamente")
          })
          .catch((error) => console.log(error));
      }
}