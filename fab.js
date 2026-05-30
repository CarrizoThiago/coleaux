let guardados = [];
let indice = 0;
document.getElementById("formu").addEventListener("submit", function (e) {
    e.preventDefault();
    const vehiculo = document.getElementById("vehiculo").value;
    const precio = parseFloat(document.getElementById("precio").value);
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
document.getElementById("btn-mostrar").addEventListener("click", function () {
    const tabla = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = "Tabla de vehiculos";
    tabla.appendChild(caption);
    const thead = document.createElement("thead");

    const tr = document.createElement("tr");
    const encabezados = ["Vehiculo", "Precio", "Cliente", "IVA", "Contado", "Interes", "Precio con interes", "Cuotas 24", "Cuotas 36"];
    encabezados.forEach(function (encabezado) {
        const th = document.createElement("th");
        th.textContent = encabezado;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    tabla.appendChild(thead);
    const tbody = document.createElement("tbody");
    guardados.forEach(function (guardado) {
        const tr = document.createElement("tr");
        const campos = [guardado.vehiculo, guardado.precio, guardado.cliente, guardado.iva, guardado.contado, guardado.interes, guardado.precioconinteres, guardado.cuotas24, guardado.cuotas36];
        campos.forEach(function (valor) {
            const td = document.createElement("td");
            td.textContent = valor;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    tabla.appendChild(tbody);

    document.getElementById("resultados").appendChild(tabla);
});