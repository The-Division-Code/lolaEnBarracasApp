window.addEventListener('load',() => {

    document.getElementById("app").style.backgroundColor = '#fafafa';

    // let cuerpo = document.getElementById("cuerpo");
    // cuerpo.style.display = "none"
    
    // var username;
    // var password;
    
    // swal({
    
    //     title: "Username",
    //     content: "input",
    // })
    // .then((value) => {
    
    //     username = `${value}`
    
    //     swal({
    //         title: "Password",
    //         content: {
    
    //             element: "input",
    //             attributes: {
    
    //                 type: "password"
    //             }
    //         }
    //     })
    //     .then((value) => {
    
    //         password = `${value}`
            
    //         swal({
    //             title: "Conexión exitosa!",
    //             icon: "success",
    //             timer: 1000,
    //         })
    //         .then(value => {
    
    //             cuerpo.style.display = "inherit";
    //         })
    
    
    //     })
    // })
})


function confirmacion(queCosa){

    switch(queCosa){

        case "eliminar":
        
            swal("Estás seguro que quieres eliminar definitivamente blablabla?", {
                dangerMode: true,
                buttons: true,
              });
        break;
        
        case "restaurar":
            
            swal("Estás seguro que quieres restaurar blablaba,ab?", {
              dangerMode: true,
              buttons: true,
            });
        break;

        case "archivar":
            
            swal("Estás seguro que quieres archivar?", {
                dangerMode: true,
                buttons: true,
              });
        break;

        default:
        break;
    }
}