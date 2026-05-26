let guardados = [];
let indice = 0;
document.getElementById("formu").addEventListener("submit", function (e) {
    e.preventDefault();
    const vehiculo = document.getElementById("vehiculo").value;
    const precio = document.getElementById("precio").value;
    const cliente = document.getElementById("cliente").value;
    const guardado = {
        vehiculo: vehiculo,
        precio: precio,
        cliente: cliente
    };
    guardados.push(guardado);
    console.log(guardado);
    calculador(indice);
    indice++;
});

function calculador(i) {
    let ivax = guardados[i].precio * 0.21;
    let contado = guardados[i].precio + ivax;
    let interes = contado * 0.10;
    let precioconinteres = contado + interes;
    let cuotas24 = precioconinteres / 24;
    let cuotas36 = precioconinteres / 36;
    guardados[i].iva = ivax;
    guardados[i].contado = contado;
    guardados[i].interes = interes;
    guardados[i].precioconinteres = precioconinteres;
    guardados[i].cuotas24 = cuotas24;
    guardados[i].cuotas36 = cuotas36;
    console.log(guardados[i]);
}