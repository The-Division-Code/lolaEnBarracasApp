const axios = require('axios');
const defaults = require('./default.js');

const productsRequests = {
    getAllProducts: () =>{
        return axios({
            ...defaults,
            method: 'GET',
            url: '/products/products'
        });
    },
    getById: (productId) =>{
        return axios ({
            ...defaults,
            method:'GET',
            url:`/products/products/${productId}`
        })
    },
    getByCat: (category)=>{
        return axios ({
            ...defaults,
            method:'GET',
            url: `/products/products/category/${category}`
        })
    },
    getBySubCat: (subcategory) =>{
        return axios ({
            ...defaults,
            method: 'GET',
            url: `/products/products/subcategory/${subcategory}`
        })
    },
    getAllWaist: () =>{
        return axios ({
            ...defaults,
            method:'GET',
            url: `/products/products_waists`
        })
    },
    getWaistsById: (waistId) =>{
        return axios ({
            ...defaults,
            method: 'GET',
            url: `/products/products_waists/${waistId}`
        })
    },
    getAllSubcategories: () =>{
        return axios({
            ...defaults,
            method: 'GET',
            url: '/products/products_subcategories'
        })
    },
    getSubcategoriesById:(subCatId) =>{
        return axios({
            ...defaults,
            method: 'GET',
            url: `/products/products_subcategories/${subCatId}`
        })
    },
    getSubcategoriesByCatId: (subCategoryCatId) =>{
        return axios ({
            ...defaults,
            method: 'GET',
            url: `/products/products_subcategories/cat/${subCategoryCatId}`
        })
    },
    getAllPictures: () =>{
        return axios ({
            ...defaults,
            method: 'GET',
            url: '/products/products_pictures'
        })
    },
    getPicturesByProdId: (picture) =>{
        return axios ({
            ...defaults,
            method:'GET',
            url: `/products/products_pictures/${picture}`
        })
    },
    getAllColors: () =>{
        return axios ({
            ...defaults,
            method:'GET',
            url: '/products/products_colors'
        })
    },
    getColorsById: (colorId) =>{
        return axios({
            ...defaults,
            method: 'GET',
            url: `/products/products_colors/${colorId}`
        })
    },
    getColorsByProdId: (colorProdId) =>{
        return axios ({
            ...defaults,
            method: 'GET',
            url: `/products/products_colors/product/${colorProdId}`
        })
    },
    getAllCategories: () =>{
        return axios ({
            ...defaults,
            method: 'GET',
            url: '/products/products_categories'
        })
    },
    getCategoriesById: (category) =>{
        return axios({
            ...defaults,
            method: 'GET',
            url: `/products/products_categories/${category}`
        })
    },
    getAllPWaists : () =>{
        return axios({
            ...defaults,
            method: 'GET',
            url: '/products/p_waists'
        })
    },
    getPWaistsById: (waists) =>{
        return axios({
            ...defaults,
            method: 'GET',
            url: `/products/p_waists/${waists}`
        })
    },
    getAllPColors: () =>{
        return axios({
            ...defaults,
            method: 'GET',
            url: '/products/p_colors'
        })
    },
    getPColosById: (colors) =>{
        return axios({
            ...defaults,
            method: 'GET',
            url: `/products/p_colors/${colors}`
        })
    }

}

module.exports = productsRequests