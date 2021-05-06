window.addEventListener('load', ()=>{
    let categories = document.getElementById('categories');
    let subcategories = document.getElementById('subcategories');

    categories.addEventListener('change', () =>{
        subcategories.innerHTML = '<option value="" disabled selected>Selecciona una sub-categoría...</option>';
        fetch(`http://localhost:3030/api/products/products_subcategories/cat/${categories.value}`)
        .then(response => response.json())
        .then(subcategorias => {
            if(subcategorias.data.length < 1){
                subcategories.style.display = 'none';
            } else subcategories.style.display = 'block'
            
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