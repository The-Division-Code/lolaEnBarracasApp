const express = require('express');
const router = express.Router();

const productsAPIController = require('../../controllers/apis/productsAPIController.js');

router.get('/', productsAPIController.index);

router.get('/products', productsAPIController.products);
router.get('/products/:id', productsAPIController.productsById);
router.get('/products/category/:category', productsAPIController.productsByCat);
router.get('/products/subcategory/:subcategory', productsAPIController.productsBySubCat);

router.get('/products_waists', productsAPIController.waists);
router.get('/products_waists/:product_id', productsAPIController.waistsById);

router.get('/products_subcategories', productsAPIController.subcategories);
router.get('/products_subcategories/:id', productsAPIController.subcategoriesById);
router.get('/products_subcategories/cat/:cat_id', productsAPIController.subcategoriesByCatId);

router.get('/products_pictures', productsAPIController.pictures);
router.get('/products_pictures/:product_id', productsAPIController.picturesByProdId);

router.get('/products_colors', productsAPIController.colors);
router.get('/products_colors/:color_id', productsAPIController.colorsById);
router.get('/products_colors/product/:product_id', productsAPIController.colorsByProdId);

router.get('/products_categories', productsAPIController.categories);
router.get('/products_categories/:id', productsAPIController.categoriesById);

router.get('/p_waists', productsAPIController.pWaists);
router.get('/p_waists/:id', productsAPIController.pWaistsById);

router.get('/p_colors', productsAPIController.pColors);
router.get('/p_colors/:id', productsAPIController.pColorsById);

router.get('/search/:id/:waist_id/:color_id', productsAPIController.productFiltered)
module.exports = router;