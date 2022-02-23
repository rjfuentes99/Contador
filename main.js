const start = document.getElementById("inicio");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reset = document.getElementById("reset");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    start.innerHTML = numero;
});

restar.addEventListener("click", ()=>{

    if(numero==0){}
    else{
        numero--;
        start.innerHTML = numero;
    }
})
reset.addEventListener("click", ()=>{
    numero = 0;
    start.innerHTML = numero;
});