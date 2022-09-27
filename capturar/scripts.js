
document.addEventListener("DOMContentLoaded", function(){
    const cookieButton = document.getElementById("crear");
    const verCookie2 = document.getElementById("ver");
    const eliminarCookie = document.getElementById("delete-cookie");

    cookieButton.addEventListener("click", saveCookie);
    verCookie2.addEventListener("click", watchCookie);
    eliminarCookie.addEventListener("click", deleteCookie)
})


// button.addEventListener("click", e=>{
//     e.preventDefault();
// })

const validar = () =>{
    // const button = document.getElementById("button");
    const matricula = document.getElementById("matricula").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    var resultado = true;

    if( (matricula == null) || (matricula == 0) || /^\+$/.matricula){
        alert("revise los datos de la matricula");
        resultado = false;
    }

    if(!isNaN(nombre)){
        alert("revise los datos del nombre")
        console.log("entre a la validación de nombre")
        resultado = false;
    }

    if(!isNaN(apellido)){
        alert("revise los datos del apellido")
        resultado = false;
        console.log("entre a la validacion de apellido")
    }

    return resultado;

}




function saveCookie(){
    document.cookie = "usuario=Fredy Manzanero; max-age=3600; path=/";
    console.log(document.cookie)
}

function watchCookie(){
    var lasCookies = document.cookie;
    alert(lasCookies);
}

function deleteCookie(){
    document.cookie = "usuario=Fredy Manzanero; max-age=0; path=/";
    document.cookie = "nombrecookie=valorcookie; max-age=0; path=/";
    

}