let personas = [8];
let i=0;
let arranca = false;
const form = document.getElementById('form');

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
    console.log(`${personas}`);
    switch(persona.categoria) {
        case 'A':
            persona.salariob = 1840;
            break;
        case 'B':
            persona.salariob = 1080;
            break;
        case 'C':
            persona.salariob = 2000;
            break;
    }

    i++;
    if(i == 7) {
        arranca == true;
        console.log(arranca);
    }
});
if(arranca) {
    for(let j = 0; j < personas.length; j++) {
        let auxsalario = personas[j].salariob;
        if(personas[j].antiguedad > 17) {
            auxsalario += 100;
        }
        let auxjub= auxsalario * 0.11;
        let auxsin= auxsalario * 0.04;
        let auxos= auxsalario * 0.03;
        auxsalario = auxsalario - auxjub - auxsin - auxos;
        personas[j].salarioneto = auxsalario;
    }
    
}