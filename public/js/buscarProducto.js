/**
 * Captura de elementos
 */

let models = document.getElementById('models')
let colors = document.getElementById('colors')
let waists = document.getElementById('waists')
let result = document.getElementById('result');
let addButton = document.getElementById('addButton')

/**
 * Busca colores por modelo seleccionado y genera el select con los colores disponibles del modelo seleccionado.
 */
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

/**
 * Busca talles por modelo seleccionados, y genera el select con los talles disponibles.
 */
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

/** 
 * Busca el color por id, proveniente del modelo.
 */
function getColorsById(id) {
    fetch(`http://localhost:3030/api/products/p_colors/${id}`)
        .then(response => response.json())
        .then(color => {
            colors.innerHTML += `<option value= "${color.data.id}"> ${color.data.desc}</option>`
        })
        .catch(error => console.log(error))
}

/**
 * Busca el talle por el id proveniente del modelo. 
 */
function getWaistsById(id){
    fetch(`http://localhost:3030/api/products/p_waists/${id}`)
        .then(response => response.json())
        .then(waist => {
            waists.innerHTML += `<option value= "${waist.data.id}"> ${waist.data.desc}</option>`
        })
        .catch(error => console.log(error))
}

/**
 * Genera la búsqueda del producto según parámetros.
 */
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

/**
 * Genera la búsqueda del producto según parámetros (Creo que esta es la actual, fijarse en vista correspondiente.)
 */
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
                func
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

function searchProduct3(){

    fetch(`http://localhost:3030/api/products/search/${models.value}/${waists.value}/${colors.value}`)
        .then(response => response.json())
        .then(product => {
            getProductById(product.data.product_id)
            getColorNameById(product.data.product_id)
            getWaistNumberById(product.data.product_id)

        })
        .catch(error => console.log(error))
}

function getProductById(id){

    fetch(`http://localhost:3030/api/products/products/${id}`)
        .then(response => response.json())
        .then(product => {
            let modelInput = document.getElementById('model')
            modelInput.value = product.data.name
        })
        .catch(error => console.log(error))
}
/**
 * Devuelve nombre del color por id, basado en el producto buscado.
 */
function getColorNameById(id){

    fetch(`http://localhost:3030/api/products/p_colors/${id}`)
        .then(response => response.json())
        .then(color => {
            let colorInput = document.getElementById('color')
            colorInput.value = color.data.desc
        })
        .catch(error => console.log(error))
}
/**
 * Devuelve número de talle por id, basado en el producto.
 */
function getWaistNumberById(id){

    fetch(`http://localhost:3030/api/products/p_waists/${id}`)
        .then(response => response.json())
        .then(waist => {
            let waistInput = document.getElementById('waist')
            waistInput.value = waist.data.desc
        })
        .catch(error => console.log(error))
}
/** 
 * Devuelve stock de sucursal 1013
 */
function getProductStock1(product_id, waist_id, color_id){

    fetch(`http://localhost:3030/api/products/search/${product_id}/${waist_id}/${color_id}`)
        .then(response => response.json())
        .then(stock => {
            let stock1013Input = document.getElementById('stock-1013')
            stock1013Input.value = stock.data.stock_lola1013
        })
        .catch(error => console.log(error))
}
/** 
 * Devuelve stock de sucursal 774
 */
function getProductStock2(product_id, waist_id, color_id){

    fetch(`http://localhost:3030/api/products/search/${product_id}/${waist_id}/${color_id}`)
        .then(response => response.json())
        .then(stock => {
            let stock774Input = document.getElementById('stock-774')
            stock774Input.value = stock.data.stock_lola774
        })
        .catch(error => console.log(error))
}
/** 
 * Devuelve precio final por id
 */
function getPriceById(id){

    fetch(`http://localhost:3030/api/products/products/${id}`)
        .then(response => response.json())
        .then(price => {
            let priceInput = document.getElementById('price');
            priceInput.value = price.data.price
        })
        .catch(error => console.log(error))
}
/** 
 * Devuelve precio de lista por id
 */
function getStrikethroughPriceById(id){

    fetch(`http://localhost:3030/api/products/products/${id}`)
        .then(response => response.json())
        .then(price => {
            let strikethroughPriceInput = document.getElementById('strikethrough-price');
            strikethroughPriceInput.value = price.data.strikethrough_price
        })
        .catch(error => console.log(error))
}

/**
 * Al no tener api de imágenes, esto está a completar. Basarse en lógica de este archivo cuando esté.
 *  
 */
function getProductImageById(id){

    
}
/* colors.innerHTML ='<option value="" disabled selected>Selecciona un color...</option>'; */

