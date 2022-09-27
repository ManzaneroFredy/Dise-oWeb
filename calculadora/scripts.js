const sumar = document.getElementById("add-button");
const restar = document.getElementById("substract");
const dividir = document.getElementById("divided")
const raiz = document.getElementById("square");
const multiplicar = document.getElementById("times");
const fraccion = document.getElementById("frag");
const numero1 = document.getElementById("number-1");
const numero2 = document.getElementById("number-2");
const resultado = document.getElementById("resultado");

sumar.addEventListener("click",e =>{
    const suma = parseInt(numero1.value) + parseInt(numero2.value);
    resultado.innerHTML = suma.toString();
})

restar.addEventListener("click", e =>{
    const restar = parseInt(numero1.value) - parseInt(numero2.value);
    resultado.innerHTML = restar.toString();
})

dividir.addEventListener("click", e =>{
    if(parseInt(numero2.value) != 0){
        const restar = parseInt(numero1.value) / parseInt(numero2.value);
        resultado.innerHTML = restar.toString();
    }else{
        resultado.innerHTML="No se puede dividir sobre 0";
    }
    
})

raiz.addEventListener("click", e =>{
    const raiz = Math.sqrt(parseInt(numero2.value));
    resultado.innerHTML = raiz.toString();
})

multiplicar.addEventListener("click", e =>{
    const multiplicar = parseInt(numero1.value) * parseInt(numero2.value);
    resultado.innerHTML = multiplicar.toString();
})

fraccion.addEventListener("click", e => {
    if(parseInt(numero2.value) != 0){
        const frac = 1 / parseInt(numero2.value);
        resultado.innerHTML = frac.toString();
    }else{
        resultado.innerHTML="No se puede dividir sobre 0";
    }
})