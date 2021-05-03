const db = require("../../database/models");

module.exports = productsAPIController = {
  index: (req, res) => {
    let respuesta = {
      meta: {
        status: 200,
        url: "http://localhost:3030/api/products/",
      },
      data: {
        products: "http://localhost:3030/api/products/products",
        products_waists: "http://localhost:3030/api/products/products_waists",
        products_subcategories:
          "http://localhost:3030/api/products/products_subcategories",
        products_pictures:
          "http://localhost:3030/api/products/products_pictures",
        products_colors: "http://localhost:3030/api/products/products_colors",
        products_categories:
          "http://localhost:3030/api/products/products_categories",
        p_waists: "http://localhost:3030/api/products/p_waists",
        p_colors: "http://localhost:3030/api/products/p_colors",
      },
    };

    res.json(respuesta);
  },
  products: (req, res) => {
    db.Products.findAll()
      .then((products) => {
        for (let i = 0; i < products.length; i++) {
          products[i].setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: products.length,
            url: "http://localhost:3030/api/products/products",
          },

          data: products,
        };

        products == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  productsById: (req, res) => {
    db.Products.findByPk(req.params.id)
      .then((product) => {
        let respuesta = {
          meta: {
            status: 200,
            url: `http://localhost:3030/api/products/products/${req.params.id}`,
          },
          data: product,
        };

        product == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  productsByCat: (req, res) => {
    db.Products.findAll({ where: { category: req.params.category } })
      .then((products) => {
        console.log(products);

        for (let i = 0; i < products.length; i++) {
          products.setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: products.length,
            url: `http://localhost:3030/api/products/products/category/${req.params.category}`,
          },
          data: products,
        };

        products.length == 0 ? res.send("No encotrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  productsBySubCat: (req, res) => {
    db.Products.findAll({ where: { subcategory: req.params.subcategory } })
      .then((products) => {
        for (let i = 0; i < products.length; i++) {
          products[i].setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: products.length,
            url: `http://localhost:3030/api/products/products/subcategory/${req.params.subcategory}`,
          },
          data: products,
        };

        products.length == 0
          ? res.send("No se ha encontrado")
          : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  waists: (req, res) => {
    db.Products_Waists.findAll()
      .then((waists) => {
        let respuesta = {
          meta: {
            status: 200,
            total: waists.length,
            url: "http://localhost:3030/api/products/products_waists",
          },
          data: waists,
        };

        waists == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  waistsById: (req, res) => {
    db.Products_Waists.findAll({ where: { product_id: req.params.product_id } })
      .then((products) => {
        let respuesta = {
          meta: {
            status: 200,
            total: products.length,
            url: `http://localhost:3030/api/products/products_waists/${req.params.product_id}`,
          },
          data: products,
        };

        products == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  subcategories: (req, res) => {
    db.Products_Subcategories.findAll({
      order: [["name", "ASC"]],
    })
      .then((subcategories) => {
        for (let i = 0; i < subcategories.length; i++) {
          subcategories[i].setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: subcategories.length,
            url: "http://localhost:3030/api/products/products_subcategories",
          },
          data: subcategories,
        };

        subcategories == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  subcategoriesById: (req, res) => {
    db.Products_Subcategories.findByPk(req.params.id)
      .then((subcategory) => {
        let respuesta = {
          meta: {
            status: 200,
            url: `http://localhost:3030/api/products/products_subcategories/${req.params.id}`,
          },
          data: subcategory,
        };

        subcategory == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  subcategoriesByCatId: (req, res) => {
    db.Products_Subcategories.findAll({
      where: {
        cat_id: req.params.cat_id,
      },
      order: [["name", "ASC"]],
    })
      .then((subcategories) => {
        for (let i = 0; i < subcategories.length; i++) {
          subcategories[i].setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: subcategories.length,
            url: `http://localhost:3030/api/products/products_subcategories/cat/${req.params.cat_id}`,
          },
          data: subcategories,
        };

        subcategories == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  pictures: (req, res) => {
    db.Products_Pictures.findAll()
      .then((pictures) => {
        for (let i = 0; i < pictures.length; i++) {
          pictures.setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: pictures.length,
            url: `http://localhost:3030/api/products/products_pictures`,
          },
          data: pictures,
        };

        pictures == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  picturesByProdId: (req, res) => {
    db.Products_Pictures.findAll({
      where: { product_id: req.params.product_id },
    })

      .then((products) => {
        for (let i = 0; i < products.length; i++) {
          products.setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: products.length,
            url: `http://localhost:3030/api/products/products_pictures/${req.params.product_id}`,
          },
          data: products,
        };

        products == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  colors: (req, res) => {
    db.Products_Colors.findAll()
      .then((colors) => {
        for (let i = 0; i < colors.length; i++) {
          colors[i].setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: colors.length,
            url: `http://localhost:3030/api/products/products_colors`,
          },
          data: colors,
        };
        colors == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  colorsById: (req, res) => {
    db.Products_Colors.findAll({ where: { color_id: req.params.color_id } })
      .then((colors) => {
        for (let i = 0; i < colors.length; i++) {
          colors[i].setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: colors.length,
            url: `http://localhost:3030/api/products/products_colors/${req.params.color_id}`,
          },
          data: colors,
        };

        colors == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  colorsByProdId: (req, res) => {
    db.Products_Colors.findAll({ where: { product_id: req.params.product_id } })

      .then((products) => {
        for (let i = 0; i < products.length; i++) {
          products[i].setDataValue;
        }
        let respuesta = {
          meta: {
            status: 200,
            total: products.length,
            url: `http://localhost:3030/api/products/products_colors/product/${req.params.product}`,
          },
          data: products,
        };
        products == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  categories: (req, res) => {
    db.Products_Categories.findAll({
      order: [["name", "ASC"]],
    })
      .then((categories) => {
        for (let i = 0; i < categories.length; i++) {
          categories[i].setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: categories.length,
            url: `http://localhost:3030/api/products/products_categories`,
          },
          data: categories,
        };

        categories == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  categoriesById: (req, res) => {
    db.Products_Categories.findByPk(req.params.id)
      .then((category) => {
        let respuesta = {
          meta: {
            status: 200,
            url: `http://localhost:3030/api/products/products_categories/${req.params.id}`,
          },
          data: category,
        };

        category == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  pWaists: (req, res) => {
    db.P_Waists.findAll()
      .then((waists) => {
        for (let i = 0; i < waists.length; i++) {
          waists[i].setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: waists.length,
            url: `http://localhost:3030/api/products/p_waists`,
          },
          data: waists,
        };
        waists == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  pWaistsById: (req, res) => {
    db.P_Waists.findByPk(req.params.id)
      .then((waist) => {
        let respuesta = {
          meta: {
            status: 200,
            url: `http://localhost:3030/api/products/p_waists/${req.params.id}`,
          },
          data: waist,
        };
        waist == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  pColors: (req, res) => {
    db.P_Colors.findAll({
      order: [["desc", "ASC"]],
    })
      .then((colors) => {
        for (let i = 0; i < colors.length; i++) {
          colors[i].setDataValue;
        }

        let respuesta = {
          meta: {
            status: 200,
            total: colors.length,
            url: `http://localhost:3030/api/products/p_colors`,
          },
          data: colors,
        };

        colors == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  pColorsById: (req, res) => {
    db.P_Colors.findByPk(req.params.id)
      .then((color) => {
        let respuesta = {
          meta: {
            status: 200,
            url: `http://localhost:3030/api/products/p_colors/${req.params.id}`,
          },
          data: color,
        };

        color == null ? res.send("No encontrado") : res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
