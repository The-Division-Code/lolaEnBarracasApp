let models = document.getElementById('models')
let colors = document.getElementById('colors')
let waists = document.getElementById('waists')
let result = document.getElementById('result');
let addButton = document.getElementById('addButton')

function findColorsByModel() {
    colors.innerHTML = '<option value="" disabled selected>Selecciona un color...</option>';
    fetch(`http://localhost:3030/api/products/products_colors/product/${models.value}`)
        .then(response => response.json())
        .then(colores => {
            colores.data.forEach(color => {
                getColorsById(color.color_id)
            })
        })
        .catch(error => console.log(error))
}

function findWaistsByModel(){
    waists.innerHTML = '<option value="" disabled selected>Selecciona un talle...</option>'
    fetch(`http://localhost:3030/api/products/products_waists/${models.value}`)
        .then(response => response.json())
        .then(talles => {
            talles.data.forEach(talle => {
                getWaistsById(talle.waist_id)
            })
        })
}

function getColorsById(id) {
    fetch(`http://localhost:3030/api/products/p_colors/${id}`)
        .then(response => response.json())
        .then(color => {
            colors.innerHTML += `<option value= "${color.data.id}"> ${color.data.desc}</option>`
        })
        .catch(error => console.log(error))
}

function getWaistsById(id){
    fetch(`http://localhost:3030/api/products/p_waists/${id}`)
        .then(response => response.json())
        .then(waist => {
            waists.innerHTML += `<option value= "${waist.data.id}"> ${waist.data.desc}</option>`
        })
        .catch(error => console.log(error))

}

function searchProduct(){

    fetch(`http://localhost:3030/api/products/search/${models.value}/${waists.value}/${colors.value}`)
        .then(response => response.json())
        .then(product => {

            let producto = document.createElement('div')
            producto.className = 'row card-photo';
            producto.innerHTML = `<div class="col-5 card-body" id="resultDescription">
                                    ${getProductById(product.data.product_id)}
                                    
                                    <p class="card-title">${product.data.waist_id}</p>
                                    <p class="card-title">Color</p>
                                    <p class="card-title">Precio contado</p>
                                    <p class="card-title">Precio tarjeta</p>
                                    <p class="card-title">Stock en local:</p>
                                    <p class="card-title">Stock local 2:</p>
                                    
                                </div>
                                <img src="/images/index.jpg" class="card-img-top col-5" alt="...">`
            result.insertBefore(producto, addButton)
        })
        .catch(error => console.log(error))
}


function searchProduct2(){

    fetch(`http://localhost:3030/api/products/search/${models.value}/${waists.value}/${colors.value}`)
        .then(response => response.json())
        .then(product => {

            let functionArray = [
                getProductById(product.data.product_id),
                getColorNameById(product.data.color_id),
                getWaistNumberById(product.data.waist_id),
                getProductStock1(product.data.product_id, product.data.waist_id, product.data.color_id),
                getProductStock2(product.data.product_id, product.data.waist_id, product.data.color_id),
                getPriceById(product.data.product_id),
                getStrikethroughPriceById(product.data.product_id)
            ]

            functionArray.forEach(func => {
                setTimeout(() => {
                    func
                }, 1000);
            })

            /* getProductById(product.data.product_id)
            getColorNameById(product.data.color_id)
            getWaistNumberById(product.data.waist_id)
            getProductStock1(product.data.product_id, product.data.waist_id, product.data.color_id)
            getProductStock2(product.data.product_id, product.data.waist_id, product.data.color_id)
            getPriceById(product.data.product_id)
            getStrikethroughPriceById(product.data.product_id) */
        })
}

let inputQR = document.getElementById('input-QR') // http://localhost:3030/api/search/1333/4/26 http://localhost:3030/api/search/1332/5/20

function searchWithQR(){

    fetch(inputQR.value)
}

function getProductById(id){

    fetch(`http://localhost:3030/api/products/products/${id}`)
        .then(response => response.json())
        .then(product => {
            let nombre = document.createElement('h5')
            nombre.className = 'card-title'
            nombre.innerText = `Modelo: ${product.data.name}`
            result.insertBefore(nombre, addButton)
        })
        .catch(error => console.log(error))
}

function getProductStock1(product_id, waist_id, color_id){

    fetch(`http://localhost:3030/api/products/search/${product_id}/${waist_id}/${color_id}`)
        .then(response => response.json())
        .then(stock => {
            let stockElement1 = document.createElement('h5')
            stockElement1.className = 'card-title'
            stockElement1.innerText = `Stock 1013: ${stock.data.stock_lola1013}`
            result.insertBefore(stockElement1, addButton)
        })
        .catch(error => console.log(error))
}

function getProductStock2(product_id, waist_id, color_id){

    fetch(`http://localhost:3030/api/products/search/${product_id}/${waist_id}/${color_id}`)
        .then(response => response.json())
        .then(stock => {
            stockElement2 = document.createElement('h5')
            stockElement2.className = 'card-title'
            stockElement2.innerText = `Stock 774: ${stock.data.stock_lola774}`
            result.insertBefore(stockElement2, addButton)
        })
}

function getColorNameById(id){

    fetch(`http://localhost:3030/api/products/p_colors/${id}`)
        .then(response => response.json())
        .then(color => {
            let colorElement = document.createElement('h5')
            colorElement.className = 'card-title'
            colorElement.innerText = `Color: ${color.data.desc}`
            result.insertBefore(colorElement, addButton)
        })
        .catch(error => console.log(error))
}

function getWaistNumberById(id){

    fetch(`http://localhost:3030/api/products/p_waists/${id}`)
        .then(response => response.json())
        .then(waist => {
            let waistElement = document.createElement('h5')
            waistElement.className = 'card-title'
            waistElement.innerText = `Talle: ${waist.data.desc}`
            result.insertBefore(waistElement, addButton)
        })
}

function getPriceById(id){

    fetch(`http://localhost:3030/api/products/products/${id}`)
        .then(response => response.json())
        .then(price => {
            let priceElement = document.createElement('h5')
            priceElement.className = 'card-title'
            priceElement.innerText = `Precio: ${price.data.price}`
            result.insertBefore(priceElement, addButton)
        })
}

function getStrikethroughPriceById(id){

    fetch(`http://localhost:3030/api/products/products/${id}`)
        .then(response => response.json())
        .then(price => {
            let priceElement = document.createElement('h5')
            priceElement.className = 'card-title'
            priceElement.innerText = `Lista: ${price.data.strikethrough_price}`
            result.insertBefore(priceElement, addButton)
        })
}

function getProductImageById(id){

    
}
/* colors.innerHTML ='<option value="" disabled selected>Selecciona un color...</option>'; */