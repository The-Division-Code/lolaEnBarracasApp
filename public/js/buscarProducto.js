window.addEventListener('load', ()=>{
    let models = document.getElementById('models')
    let colors = document.getElementById('colors')
    let waists = document.getElementById('waists')

    models.addEventListener('change', () =>{
        colors.innerHTML ='<option value="" disabled selected>Selecciona un color...</option>';
        fetch(`http://localhost:3030/api/products/products_colors/product/${models.value}`)
        .then(response => response.json())
        .then(colores =>{
            colores.data.forEach(color => {
                fetch(`http://localhost:3030/api/products/p_colors/${color.id}`)
                .then(response => response.json)
                colors.innerHTML += `<option value= "${color.id}"> ${color.desc}</option>`
            });
        })
        .catch(error => console.log(error))
    })
    colors.addEventListener('change', ()=>{
        console.log(colors.children);
    })
})

// colores.data.forEach(color => {
//     fetch(`http://localhost:3030/api/products/p_colors/${color.id}`)
//     .then(response => response.json)
//     .then(modeloColores =>{
//         modeloColores.forEach(modeloColor => {
//             colors.innerHTML += `<option value= "${modeloColor.id}"> ${modeloColor.desc}</option>` 
//         });
//     })
// })
// .catch(error => console.log(error))
// })