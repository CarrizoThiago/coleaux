const btn1MT = document.getElementById('btn1MT');
const btn2MN = document.getElementById('btn2MN');
const btnLimpiar = document.getElementById('btnLimpiar');

btn1MT.addEventListener('click', async () => {
    document.getElementById('resultado1').innerHTML = '';
    let resultados1 = await fetch('./json/uno.json');
    resultados1 = await resultados1.json();
    console.log('Botón 1 pulsado');

    // parte estatica de la tabla

    const tabla = document.createElement('table');
    const thead = document.createElement('thead');
    const caption = document.createElement('caption');
    const tbody = document.createElement('tbody');
    const th = document.createElement('th');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const tr = document.createElement('tr');

    caption.textContent = 'Todos los datos';
    tabla.appendChild(caption);
    th.textContent = 'Numero';
    tr.appendChild(th);
    th1.textContent = 'Nombre';
    tr.appendChild(th1);
    th2.textContent = 'Edad';
    tr.appendChild(th2);
    thead.appendChild(tr);
    tabla.appendChild(thead);

    //parte cambiante de la tabla

    resultados1.forEach((element, index) => {

        try{
                
            const td = document.createElement('td');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const trh = document.createElement('tr');

            td.textContent = index + 1;
            trh.appendChild(td);
            td1.textContent = element.name;
            trh.appendChild(td1);
            td2.textContent = element.age;
            trh.appendChild(td2);
            if(index % 2 === 0){
                trh.classList.add('par');
            }else{
                trh.classList.add('impar');
            }
            tbody.appendChild(trh);
        }
        catch(error){
            console.error(`Error al procesar a la persona: ${index}`, error);
        }
    });

    tabla.appendChild(tbody);
    document.getElementById('resultado1').appendChild(tabla);
    document.getElementById('resultado1').classList.add('cajares');

});

btn2MN.addEventListener('click', async () => {

    document.getElementById('resultado1').innerHTML = '';
    console.log('Botón 2 pulsado');
    let resultados1 = await fetch('./json/uno.json');
    resultados1 = await resultados1.json();
    console.log('Botón 1 pulsado');

    // parte estatica de la tabla

    const tabla = document.createElement('table');
    const thead = document.createElement('thead');
    const caption = document.createElement('caption');
    const tbody = document.createElement('tbody');
    const th = document.createElement('th');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const tr = document.createElement('tr');

    caption.textContent = 'Solo nombres';
    tabla.appendChild(caption);
    th.textContent = 'Numero';
    tr.appendChild(th);
    th1.textContent = 'Nombre';
    tr.appendChild(th1);
    thead.appendChild(tr);
    tabla.appendChild(thead);

    //parte cambiante de la tabla

    resultados1.forEach((element, index) => {
        try{
            const td = document.createElement('td');
            const td1 = document.createElement('td');
            const trh = document.createElement('tr');

            td.textContent = index + 1;
            trh.appendChild(td);
            td1.textContent = element.name;
            if(index % 2 === 0){
                trh.classList.add('par');
            }else{
                trh.classList.add('impar');
            }
            trh.appendChild(td1);
            tbody.appendChild(trh);
        }
        catch(error){
            console.error(`Error al procesar a la persona: ${index}`, error);
        }
    });

    tabla.appendChild(tbody);
    document.getElementById('resultado1').appendChild(tabla);
    document.getElementById('resultado1').classList.add('cajares');

});

btnLimpiar.addEventListener('click', () => {
    document.getElementById('resultado1').innerHTML = '';
    document.getElementById('resultado1').classList.remove('cajares');
});

//final del uno json
//--------------------------------------------------------------------⛔⛔⛔⛔⛔⛔⛔⛔⛔--------------------------------------------------------------------------------

//comienzo del dos json

const btnStock = document.getElementById('btnStock');
const btnLimpiarStock = document.getElementById('btnLimpiarStock');

btnStock.addEventListener('click', async () => {

    console.log('Botón stock pulsado');
    document.getElementById('resultado2').innerHTML = '';
    let resultados2 = await fetch('./json/dos.json');
    resultados2 = await resultados2.json();

    const tabla = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const caption = document.createElement('caption');
    caption.textContent = 'Stock';
    tabla.appendChild(caption);
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');
    const th4 = document.createElement('th');
    th.textContent = 'producto';
    th1.textContent = 'precio';
    th2.textContent = 'color';
    th3.textContent = 'detalle';
    th4.textContent = 'numero';
    tr.appendChild(th);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    thead.appendChild(tr);
    tabla.appendChild(thead);

    resultados2.forEach((producto, index) => {
        try{
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const btn = document.createElement('button');
            btn.textContent = 'Ver detalle';
            btn.addEventListener('click', async () => {
                document.getElementById('resultado2').innerHTML = '';

                console.log(producto);
                const tabla = document.createElement('table');
                const thead = document.createElement('thead');
                const caption = document.createElement('caption');
                caption.textContent = 'Detalle del producto';
                thead.appendChild(caption);
                const tbody = document.createElement('tbody');
                const trh = document.createElement('tr');
                const th = document.createElement('th');
                const th1 = document.createElement('th');
                const th2 = document.createElement('th');
                const th3 = document.createElement('th');
                const th4 = document.createElement('th');

                th.textContent = 'Nombre';
                th1.textContent = 'Precio';
                th2.textContent = 'Color';
                th3.textContent = 'Talla';
                th4.textContent = 'Disponible';

                trh.appendChild(th);
                trh.appendChild(th1);
                trh.appendChild(th2);
                trh.appendChild(th3);
                trh.appendChild(th4);

                thead.appendChild(trh);
                tabla.appendChild(thead);

                const trb = document.createElement('tr');
                const td5 = document.createElement('td');
                const td6 = document.createElement('td');
                const td7 = document.createElement('td');
                const td8 = document.createElement('td');
                const td9 = document.createElement('td');

                td5.textContent = producto.nombre;
                td6.textContent = producto.precio;
                td7.textContent = producto.detalles.color;
                td8.textContent = producto.detalles.talla;
                if (producto.disponible) {
                    td9.textContent = 'Sí';
                    td9.style.backgroundColor = 'green';
                } else {
                    td9.textContent = 'No';
                    td9.style.backgroundColor = 'red';
                }
               

                trb.appendChild(td5);
                trb.appendChild(td6);
                trb.appendChild(td7);
                trb.appendChild(td8);
                trb.appendChild(td9);
                trb.classList.add('par');

                tbody.appendChild(trb);
                tabla.appendChild(tbody);

                document.getElementById('resultado2').appendChild(tabla);
                


            });
            td.textContent = producto.nombre;
            td1.textContent = producto.precio;
            td2.textContent = producto.detalles.color;
            td3.appendChild(btn);
            td4.textContent = index + 1;
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            if(index % 2 === 0){
                tr.classList.add('par');
            }else{
                tr.classList.add('impar');
            }
            tbody.appendChild(tr);
            tabla.appendChild(tbody);

        }
        catch(error){
            console.error(`Error al procesar el producto: ${index}`, error);
        }
        document.getElementById('resultado2').classList.add('cajares');
        document.getElementById('resultado2').appendChild(tabla);
    });
    
});

btnLimpiarStock.addEventListener('click', () => {
    console.log('Botón limpiar stock pulsado');
    document.getElementById('resultado2').innerHTML = '';
    document.getElementById('resultado2').classList.remove('cajares');
});




// fin del json dos
//--------------------------------------------------------------------⛔⛔⛔⛔⛔⛔⛔⛔⛔--------------------------------------------------------------------------------
//inicio json tres
const btnLimpiar3 = document.getElementById('btnLimpiar3');
btnLimpiar3.addEventListener('click', () => {
    console.log('Botón limpiar 3 pulsado');
    document.getElementById('resultado3').innerHTML = '';
    document.getElementById('resultado3').classList.remove('cajares');
});
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', async () => {
    console.log('Botón 3 pulsado');
    document.getElementById('resultado3').innerHTML = '';

    const tabla = document.createElement('table');
    const thead = document.createElement('thead');
    const caption = document.createElement('caption');
    caption.textContent = 'Productos';
    tabla.appendChild(caption);
    const tbody = document.createElement('tbody');
    const trh = document.createElement('tr');
    let th = ["Numero","nombre", "precio", "fecha_ingreso", "stock", "codigo", "categoria"];

    for(let i = 0; i < th.length; i++){
        trh.appendChild(document.createElement('th')).textContent = th[i];
    }
    thead.appendChild(trh);
    tabla.appendChild(thead);

    let resultados3 = await fetch('./json/tres.json');
    let productos3 = await resultados3.json();

    productos3.forEach((producto, indice)=>{
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const td7 = document.createElement('td');
        
        td1.textContent = indice + 1;
        td2.textContent = producto.nombre;
        td3.textContent = producto.precio;
        td4.textContent = producto.fecha_ingreso;
        td5.textContent = producto.stock;
        td6.textContent = producto._codigo;
        td7.textContent = producto._categoria;
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        if(indice % 2 === 0){
            tr.classList.add('par');
        }else{
            tr.classList.add('impar');
        }
        
        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    document.getElementById('resultado3').appendChild(tabla);
    document.getElementById('resultado3').classList.add('cajares');
});

//fin de ejercicio 3
//----------------------------------------------------------------------------⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔⛔----------------------------------------------------------------
//comienzo de ejercicio 4

const btn4 = document.getElementById('btn4');
const btnlimpiar4 = document.getElementById('btnLimpiar4');


btnlimpiar4.addEventListener('click', () => {
    document.getElementById('resultado4').innerHTML = '';
    document.getElementById('resultado4').classList.remove('cajares');
});

btn4.addEventListener('click', async () => {
    document.getElementById('resultado4').innerHTML = '';
    const resultados4 = await fetch ('./json/cuatro.json');
    const productos4 = await resultados4.json();
    
    console.log(productos4);

    const tabla = document.createElement('table');
    const thead = document.createElement('thead');
    const caption = document.createElement('caption');
    caption.textContent = 'Personal';
    tabla.appendChild(caption);
    const tbody = document.createElement('tbody');
    const trh = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');
    const th4 = document.createElement('th');
    const th5 = document.createElement('th');
    const th6 = document.createElement('th');
    
    th1.textContent = 'Nombre';
    th2.textContent = 'Apellido';
    th3.textContent = 'Fecha de nacimiento';
    th4.textContent = 'Puesto';
    th5.textContent = 'Departamento';
    th6.textContent = 'Número';
    
    trh.appendChild(th1);
    trh.appendChild(th2);
    trh.appendChild(th3);
    trh.appendChild(th4);
    trh.appendChild(th5);
    trh.appendChild(th6);
    
    thead.appendChild(trh);
    tabla.appendChild(thead);

    productos4.forEach((producto, index) => {
        try{
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        
        td1.textContent = producto.nombre;
        td2.textContent = producto.apellido;
        td3.textContent = producto.fecha_nacimiento;
        td4.textContent = producto.puesto;
        td5.textContent = producto.departamento;
        td6.textContent = producto._numero;
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        if(index % 2 === 0){
            tr.classList.add('par');
        }else{
            tr.classList.add('impar');
        }
        
        
        tbody.appendChild(tr);
        } catch (error) {
            console.error('Error al procesar el producto en el índice ' + index + ':', error);
        }
    });
    
    tabla.appendChild(tbody);
    document.getElementById('resultado4').appendChild(tabla);
    document.getElementById('resultado4').classList.add('cajares');
});





