let td = document.querySelector('td');
let button = document.querySelector('button');
let id = document.querySelector('#productId').innerHTML.trim()
// let color = document.querySelector('#color').innerHTML.trim()

let qrcode = new QRCode(document.querySelector('#qrcode'), {
    text: `http://localhost:3030/api/products/search/${id}/1/26`,
    width: 250,
    height: 250,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

// td.addEventListener('keyup', () =>{
//     let tdValue = td.value
//     qrcode.makeCode(tdValue)
// })
// button.addEventListener('click', () =>{
//     let tdValue = td.value
//     qrcode.makeCode(tdValue)
// })