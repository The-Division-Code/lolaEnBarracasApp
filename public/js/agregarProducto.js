let form = document.getElementById('form')
let categories = document.getElementById('categories');
let subcategories = document.getElementById('subcategories');

/**
 * Busca subcategorías según categoría capturada.
 */
function showSubcategories(){
    subcategories.innerHTML = '<option value="" disabled selected>Selecciona una sub-categoría...</option>';
    fetch(`http://localhost:3030/api/products/products_subcategories/cat/${categories.value}`)
        .then(response => response.json())
        .then(subcategorias => {
            if (subcategorias.data.length < 1) {
                subcategories.style.display = 'none';
            } else subcategories.style.display = 'block'

            subcategorias.data.forEach(subcategoria => {
                subcategories.innerHTML += `<option value= "${subcategoria.id}">  ${subcategoria.name} </option>`
            });
            // console.log(subcategorias.data);
        })
        .catch(error => console.log(error))
}

let addColorButton = document.getElementById('addColorButton');
let colorButtonContainer = document.getElementById('colorButtonContainer');
let contador = 1;
/*** 
 * Agrega un input de color, para agregar más colores. EStá hecha la lógica en backend?
 */
function addColorInput() {
    let color = document.createElement('div')
    color.className = 'col-12 form-group'
    color.id = `divColor${contador + 1}`
    color.innerHTML = `<div class="row m-0">
                            <select name="color${contador + 1}" id="color${contador + 1}" class="col-10 form-control">
                                <option value="" disabled selected>Selecciona un color...</option>
                            </select>
                            <button type="button" class="col-2 btn btn-danger btn-block" id="deleteColor" onclick="deleteColorX(${contador + 1});" onchange="addColor(${contador+1});">X</button>
                        </div>`
    contador++;
    form.insertBefore(color, colorButtonContainer);
    fetch('http://localhost:3030/api/products/p_colors')
        .then(response => response.json())
        .then(colors => {
            colors.data.forEach(colour => {
                color.children[0].children[0].innerHTML += `<option value= "${colour.id}">  ${colour.desc} </option>`
            })
        })
}

/** 
 * Borra color seleccionado.
 */
function deleteColorX(n) {
    let colorDiv = document.getElementById(`divColor${n}`);
    colorDiv.remove()
}

let colors = document.getElementById('colors')
let colorsList = []
/***
 * Agrega color seleccionado.
 */
function addColor(n) {
    let colorInput = document.getElementById(`color${n}`);
    colorsList.push(colorInput.value)

    colors.value = colorsList;
}
/*** 
 * No sé qué me fumé acá
 */
function idSarcher(n){
    let idFound = false;
    let contador = 0;
    while (n!=colorList[i]){
        contador++;
    }
    if(contador != colorList.length){
        
    }
}