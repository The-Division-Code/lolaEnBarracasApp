
let productId = document.getElementById('productId')
let productColor = document.getElementById('productColor')

let bodyTable = document.getElementById('bodyTable');
let tBodyEnd = document.getElementById('tBodyEnd')

/**
 * Comprueba que la tabla de stocks sea visible.
 */
bodyTable.addEventListener('show', () => {

    console.log('Se muestra al cargar');
})

/**
 * Ejecuta la función showProductInTable por cada entrada en la api product_colors, formando la tabla principal.
 */
document.body.onload = function () {

    fetch(`http://localhost:3030/api/products/products_colors`)
        .then(response => response.json())
        .then(entries => {
            entries.data.forEach(entry => {


                showProductInTable(entry.product_id, entry.color_id)

            })
        })
        .catch(error => console.log(error))
}
/**
 * Forma la tabla.
 * Con el parámetro "id" busca todos los productos con ese identificador y todos los productos de la api products_colors/product con el mismo identificador.
 * Con el parámetro colorId busca todos los productos de la api products/p_colors con el mismo identificador.
 */
function showProductInTable(id, colorId) {

    let productDetails = fetch(`http://localhost:3030/api/products/products/${id}`)
    let productColors = fetch(`http://localhost:3030/api/products/products_colors/product/${id}`)
    let productNames = fetch(`http://localhost:3030/api/products/p_colors/${colorId}`)
    Promise.all([productDetails, productColors, productNames]) //Ejecuta los tres fetch anteriores
        .then(async ([pp, cc, nn]) => {
            const p = await pp.json();
            const c = await cc.json();
            const n = await nn.json();

            return [p, c, n]
        })
        .then(([prod, col, colName]) => {

            if (prod.data.stock != 0) {
                let productElement = document.createElement('tr');
                productElement.innerHTML = `<th scope="row">${prod.data.id}</th>
                                                <td>${prod.data.name}</td>
                                                <td>${colName.data.desc}</td>
                                                <td><a href="" data-toggle="modal" data-target="#exampleModal1" onclick="showWaistsInModal(${prod.data.id},${colorId});"><i class="fa fa-edit"></i></a></td>
                                                <td id="qrcode"></td>`;
                bodyTable.insertBefore(productElement, tBodyEnd)
            }
        })
        .catch(error => console.log(error))
}

/**
 * Genera la tabla de talles al clickear el detalle de un producto específico.
 */
function showWaistsInModal(id, colorId) {

    let waistList = document.getElementById('waist-list')
    let modalTBodyEnd = document.getElementById('modalTBodyEnd')

    let waistsList = fetch(`http://localhost:3030/api/products/products_waists/${id}`);
    let waistsNumbers = fetch(`http://localhost:3030/api/products/p_waists`);
    Promise.all([waistsList, waistsNumbers])
        .then(async ([ll, nn]) => {
            const l = await ll.json();
            const n = await nn.json();
            return [l, n]
        })
        .then(([waists, numbers]) => {

            waists.data.forEach(waist => {
                if (waist.color_id == colorId) {
                    console.log(waist)
                    function getWaistNumber(id) {
                        let waistNumber
                        numbers.data.forEach(number => {
                            if (id == number.id) {
                                waistNumber = number.desc
                            }
                        })
                        return waistNumber
                    }
                    let waistElement = document.createElement('tr');
                    waistElement.innerHTML = `  <form method="GET">
                                                    <th scope="row"><input class="d-none" value="${waist.waist_id}">${getWaistNumber(waist.waist_id)}</th>
                                                    <td><input type="number" name="stock_lola1013_${waist.waist_id}" id="stock_lola1013_${waist.waist_id}" value="${waist.stock_lola1013}"></td>
                                                    <td><input type="number" name="stock_lola774_${waist.waist_id}" id="stock_lola774_${waist.waist_id}" value="${waist.stock_lola774}"></td>
                                                    <td>${Number(waist.stock_lola1013) + Number(waist.stock_lola774)}</td>
                                                    <td><input type="submit" value="Save"></td>
                                                </form>`;
                    waistList.insertBefore(waistElement, modalTBodyEnd)
                }
            })
            let dataElement = document.createElement('tr');
            dataElement.innerHTML = `   <td class="d-none"><input type="number" name="color_id" id="color_id" value=${colorId}></td>
                                        <td class="d-none"><input type="number" name="product_id" id="product_id" value=${id}></td>`;
            waistList.insertBefore(dataElement, modalTBodyEnd);
        })
}