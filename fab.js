let personas = [];
let i=0;
const form = document.getElementById('form');
const form2 = document.getElementById('form2');

const crearCelda = (valor) => {
    const td = document.createElement('td');
    td.textContent = valor;
    return td;
}
document.getElementById('btn-mostrar').addEventListener('click', () => {
        let as = 0;
        let bs = 0;
        let cs = 0;
        let aux1 = true;
        for(let j = 0; j < personas.length; j++) {
            let auxsalario = personas[j].salariob;
            if(personas[j].antiguedad > 17) {
                auxsalario += 100;
            }
            let auxjub= auxsalario * 0.11;
            let auxsin= auxsalario * 0.04;
            let auxos= auxsalario * 0.03;
            personas[j].jubilacion = auxjub;
            personas[j].obraSocial = auxos;
            personas[j].sin = auxsin;
            auxsalario = auxsalario - auxjub - auxsin - auxos;
            personas[j].salarioneto = auxsalario;
            /* punto 1 */
            if(personas[j].categoria == 'C' && aux1==true){
                let salarionetoc = personas[j].salarioneto
                aux1 = false;
                document.getElementById('netoc').innerHTML = `El salario neto de la categoria C es: ${salarionetoc}`;
            }
            /* punto 2 */
            switch(personas[j].categoria){
                case 'A':
                    as++;
                    break;
                case 'B':
                    bs++;
                    break;
                case 'C':
                    cs++;
                    break;
            }
        }
        
        document.getElementById('exc').innerHTML = `El número de personas en la categoría A es: ${as}<br> El número de personas en la categoría B es: ${bs}<br> El número de personas en la categoría C es: ${cs}`;
        /* punto 3 */
        const tabla = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        const encabezados = ['Nombre', 'Categoria', 'Sueldo bruto', 'Jubilacion', 'Sindicato', 'Obra social', 'Premio', 'Sueldo neto'];
        const trhead = document.createElement('tr');
        encabezados.forEach(encabezado => {
            const th = document.createElement('th');
            th.textContent = encabezado;
            trhead.appendChild(th);
        })
        thead.appendChild(trhead);
        tabla.appendChild(thead);
        for(let i = 0; i < personas.length; i++) {
            let auxpremio = 0;
            if(personas[i].antiguedad > 17) {
                auxpremio = 100;
            }

            const tr = document.createElement('tr');
            if(personas[i].antiguedad < 15) tr.style.color = 'red';
            else if(personas[i].antiguedad > 20) tr.style.color = 'blue';
            tr.appendChild(crearCelda(personas[i].nombre));
            tr.appendChild(crearCelda(personas[i].categoria));
            tr.appendChild(crearCelda(personas[i].salariob));
            tr.appendChild(crearCelda(personas[i].jubilacion));
            tr.appendChild(crearCelda(personas[i].sin));
            tr.appendChild(crearCelda(personas[i].obraSocial));
            tr.appendChild(crearCelda(auxpremio));
            tr.appendChild(crearCelda(personas[i].salarioneto));
            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);
        document.getElementById('tabla1').appendChild(tabla);

        /*punto 4*/
        const tabla2 = document.createElement('table');
        const thead2 = document.createElement('thead');
        const tbody2 = document.createElement('tbody');

        const encabezados2 = ['Nombre', 'Categoria', 'Sueldo bruto', 'Jubilacion', 'Sindicato', 'Obra social', 'Premio', 'Sueldo neto'];
        const trhead2 = document.createElement('tr');
        encabezados2.forEach(encabezado => {
            const th = document.createElement('th');
            th.textContent = encabezado;
            trhead2.appendChild(th);
        })
        thead2.appendChild(trhead2);
        tabla2.appendChild(thead2);
        for(let i = 0; i < personas.length; i++) {
            if(personas[i].categoria === 'A') {
            let auxpremio = 0;
                if(personas[i].antiguedad > 17) {
                    auxpremio = 100;
                }

                const tr = document.createElement('tr');
                if(personas[i].antiguedad < 15) tr.style.color = 'red';
                else if(personas[i].antiguedad > 20) tr.style.color = 'blue';
                tr.appendChild(crearCelda(personas[i].nombre));
                tr.appendChild(crearCelda(personas[i].categoria));
                tr.appendChild(crearCelda(personas[i].salariob));
                tr.appendChild(crearCelda(personas[i].jubilacion));
                tr.appendChild(crearCelda(personas[i].sin));
                tr.appendChild(crearCelda(personas[i].obraSocial));
                tr.appendChild(crearCelda(auxpremio));
                tr.appendChild(crearCelda(personas[i].salarioneto));
                tbody2.appendChild(tr);
            }
        }
        tabla2.appendChild(tbody2);
        document.getElementById('tabla2').appendChild(tabla2);
        /*punto 5*/
        const tabla3 = document.createElement('table');
        const thead3 = document.createElement('thead');
        const tbody3 = document.createElement('tbody');
        
        const encabezados3 = ['nombre', 'sueldo neto'];
        const trhead3 = document.createElement('tr');
        encabezados3.forEach(encabezado => {
            const th = document.createElement('th');
            th.textContent = encabezado;
            trhead3.appendChild(th);
        })
        thead3.appendChild(trhead3);
        tabla3.appendChild(thead3);
        for(let i = 0; i < personas.length; i++) {
            if(personas[i].salarioneto > 1200) {
                const tr = document.createElement('tr');
                if(personas[i].antiguedad < 15) tr.style.color = 'red';
                else if(personas[i].antiguedad > 20) tr.style.color = 'blue';
                tr.appendChild(crearCelda(personas[i].nombre));
                tr.appendChild(crearCelda(personas[i].salarioneto));
                tbody3.appendChild(tr);
            }
        }
        tabla3.appendChild(tbody3);
        document.getElementById('tabla3').appendChild(tabla3);
        /*punto 6*/
        const tabla4 = document.createElement('table');
        const thead4 = document.createElement('thead');
        const tbody4 = document.createElement('tbody');
        
        const encabezados4 = ['nombre', 'Antiguedad'];
        const trhead4 = document.createElement('tr');
        encabezados4.forEach(encabezado => {
            const th = document.createElement('th');
            th.textContent = encabezado;
            trhead4.appendChild(th);
        })
        thead4.appendChild(trhead4);
        tabla4.appendChild(thead4);
        for(let i = 0; i < personas.length; i++) {
            if(personas[i].antiguedad > 6) {
                const tr = document.createElement('tr');
                if(personas[i].antiguedad < 15) tr.style.color = 'red';
                else if(personas[i].antiguedad > 20) tr.style.color = 'blue';
                tr.appendChild(crearCelda(personas[i].nombre));
                tr.appendChild(crearCelda(personas[i].antiguedad));
                tbody4.appendChild(tr);
            }
        }
        tabla4.appendChild(tbody4);
        document.getElementById('tabla4').appendChild(tabla4);

});
form2.addEventListener('submit', (e) =>{
    e.preventDefault();
    let buscado = form2.bus.value;
    console.log(buscado);
    for(let j = 0; j < personas.length; j++) {
        if(personas[j].nombre == buscado.toUpperCase()) {
            console.log(personas[j]);
            let colorbus = '';
            if(personas[j].antiguedad < 15) colorbus = 'red';
            else if(personas[j].antiguedad > 20) colorbus = 'blue';
            document.getElementById('divbus').innerHTML = `<p style="color:${colorbus}">${personas[j].nombre} | ${personas[j].categoria} | ${personas[j].antiguedad} | ${personas[j].salariob} | ${personas[j].jubilacion} | ${personas[j].obraSocial} | ${personas[j].sin} | ${personas[j].salarioneto}</p>`;
        }else{
            document.getElementById('divbus').innerHTML = `<p>No se encontró la persona</p>`;
        }
    }

});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let persona = {
        nombre: form.per.value,
        categoria: form.percat.value,
        antiguedad: form.perant.value,
    };
    persona.nombre = persona.nombre.toUpperCase();
    persona.categoria = persona.categoria.toUpperCase();
    personas[i] = persona;
    console.log(`${personas[i].nombre} | ${personas[i].categoria} | ${personas[i].antiguedad}`);
    switch(personas[i].categoria) {
        case 'A':
            personas[i].salariob = 1840;
            break;
        case 'B':
            personas[i].salariob = 1080;
            break;
        case 'C':
            personas[i].salariob = 2000;
            break;
    }
    i++;
form.reset();
});
