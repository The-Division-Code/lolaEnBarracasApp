window.addEventListener('load', ()=>{
    let categories = document.getElementById('categories');
    let subcategories = document.getElementById('subcategories');

    categories.addEventListener('change', () =>{
        fetch(`http://localhost:3030/api/products/products_subcategories/cat/${categories.value}`)
        .then(response => response.json())
        .then(subcategorias => {
            subcategorias.data.forEach( subcategoria => {
                subcategories.innerHTML+= `<option value= "${subcategoria.id}">  ${subcategoria.name} </option>`
            });
            // console.log(subcategorias.data);
        })
        .catch(error => console.log(error))
    })
    subcategories.addEventListener('change', () =>{
        console.log(subcategories.children);
    })
})