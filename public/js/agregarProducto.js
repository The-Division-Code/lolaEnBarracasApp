window.addEventListener('load', () => {
    let form = document.getElementById('form')
    let categories = document.getElementById('categories');
    let subcategories = document.getElementById('subcategories');
   

    categories.addEventListener('change', () => {
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
    })
    subcategories.addEventListener('change', () => {
        console.log(subcategories.children);
    })

    
})

let form = document.getElementById('form')
let addColorButton = document.getElementById('addColorButton');
let colorButtonContainer = document.getElementById('colorButtonContainer');
let contador = 1;

function addColorInput(){
    let color = document.createElement('div')
    color.className = 'col-12 form-group'
    color.innerHTML =   `<div class="row m-0">
                            <select name="color${contador+1}" id="" class="col-10 form-control">
                                <option value="" disabled selected>Selecciona un color...</option>
                                <% for( let i = 0; i < colores.length; i++ ) { %>
                                <option value="<%=colores[i].id %>"> <%= colores[i].desc %>  </option> 
                                <% } %>
                            </select>
                            <button type="button" class="col-2 btn btn-danger btn-block" id="deleteColor">X</button>
                        </div>`
    contador++;
    form.insertBefore(color, colorButtonContainer);
}