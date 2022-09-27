const formulario = document.getElementById("login");
const logbutton = document.getElementById("subir");
const listaUsuario = document.getElementById("lista-usuarios");
const usuario = document.getElementById("usuario");
const deleteButton = document.getElementById("borrar-usuario");

logbutton.addEventListener("click", e=>{
    e.preventDefault();  
    //muestra();
    crearElemento(usuario); 
})

const muestra = () =>{
    const usuario = document.getElementById("usuario").value
    const contraseña = document.getElementById("password").value
    alert(usuario)
    alert(contraseña);
}

const crearElemento = (usuario) =>{
    const li = document.createElement("li");
    li.textContent = usuario.value
    listaUsuario.appendChild(li);
}

const borrarElemento = (elemento) =>{
    elemento.removeChild("li");
}

deleteButton.addEventListener("click", e=>{
    e.preventDefault();
    borrarElemento(listaUsuario);

})