const db = require("../database/models");
const productsRequests = require("../requests/productsRequests.js");

/* let productCreation = db.Products.create({

    name: "Gilmour",
    category: 31,
    subcategory: 10,
    price: 5555,
    strikethrough_price: 7777,
}); */

db.Products.findOne({order: [["id", "DESC"]], limit: 1})
    .then(product => console.log(product.id))

/* let waistsAssignation = productsRequests.getAllPWaists()

.then(waists => {

    console.log(waists.data.data);
})
.catch(error => console.log(error)) */