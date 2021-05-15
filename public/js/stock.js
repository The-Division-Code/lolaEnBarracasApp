let productId = document.getElementById('productId')
let productColor = document.getElementById('productColor')

let bodyTable = document.getElementById('bodyTable');
let tBodyEnd = document.getElementById('tBodyEnd')

bodyTable.addEventListener('show', () => {

    console.log('Se muestra al cargar');
})

document.body.onload = function () {

    /* fetch(`http://localhost:3030/api/products/products_waists`)
        .then(response => response.json())
        .then(entries => {
            console.log(entries)
            entries.data.forEach(entry => {

                archivedVerificator(entry.product_id)
            })
        }) */

    fetch(`http://localhost:3030/api/products/products_colors/product/1333`)
        .then(response => response.json())
        .then(entries => {
            entries.data.forEach(entry => {

                archivedVerificator(entry.product_id)
            })
        })
        .catch(error => console.log(error))
}

function archivedVerificator(id) {

    let productDetails = fetch(`http://localhost:3030/api/products/products/${id}`)
    let productColors = fetch(`http://localhost:3030/api/products/products_colors/product/${id}`)
    let productNames = fetch(`http://localhost:3030/api/products/p_colors`)
    Promise.all([productDetails, productColors, productNames])
        .then(async ([pp, cc, nn]) => {
            const p = await pp.json();
            const c = await cc.json();
            const n = await nn.json();

            return [p, c, n]
        })
        .then(([prod, col, colName]) => {
//ME QUEMÉ
            console.log(prod)
            console.log(col)
            console.log(colName)

            let productElement = document.createElement('tr');
            productElement.innerHTML = `<th scope="row">${prod.data.id}</th>
                                            <td>${prod.data.name}</td>
                                            <td>${prod.data.category}</td>
                                            <td>Me quemé</td>
                                            <td><a href="" data-toggle="modal" data-target="#exampleModal1"><i class="fa fa-edit"></i></a></td>
                                            <td id="qrcode"></td>`;
            bodyTable.insertBefore(productElement, tBodyEnd)
        })

        // .then(response => response.json())
        .catch(error => console.log(error))
}

/* 
function fetchInFetch() {

    let result = fetch(`http://localhost:3030/api/products/products_colors/product/1333`, {
        method: 'get',
    }).then(response => {
        response.json()
    }).then()
}
 */
/*

<% productsList.forEach(product=>{ %>
    <% if (product.stock !== 0){ %>
  <tr>

    <th scope="row" id="productId"> <%= product.id %> </th>
    <td> <%= product.category %>  </td>
    <td > <%= product.name %>  </td>
    <td id="productColor">color</td>
    <td><a href="" data-toggle="modal" data-target="#exampleModal1"><i class="fa fa-edit"></i></a></td>
    <td id="qrcode"></td>
  </tr>
  <% } %>
    <% }) %> */