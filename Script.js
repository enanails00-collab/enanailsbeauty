let precioBase = 20000;
let totalActual = precioBase;
let carrito = [];
let totalCarrito = 0;

let decoraciones = [
{name:"Espejo", precio:1250},
{name:"3D", precio:1500},
{name:"Frances", precio:1050},
{name:"Dijes", precio:1600}
];

let cont = document.getElementById("decoraciones");

if(cont){
decoraciones.forEach((d,i)=>{
cont.innerHTML += `
<div>
${d.name} ($${d.precio})
<input type="number" min="0" value="0" onchange="calcular()">
</div>
`;
});
}

function calcular(){
totalActual = precioBase;
document.querySelectorAll("#decoraciones input").forEach((input,i)=>{
totalActual += input.value * decoraciones[i].precio;
});
totalActual += parseInt(document.getElementById("set").value);
document.getElementById("total").innerText = totalActual;
}

function agregar(){
carrito.push(totalActual);
totalCarrito += totalActual;

document.getElementById("carrito").innerHTML += `<li>Set - $${totalActual}</li>`;
document.getElementById("totalCarrito").innerText = totalCarrito;
}

function irAPago(){
localStorage.setItem("totalCompra", totalCarrito);
window.location.href="checkout.html";
}
