console.log('Conectado correctamente con INDEX')

let main= document.querySelectorAll('main');
let h2= document.querySelector('h2');
let p= document.querySelectorAll('p');
let a= document.querySelectorAll('a');

/* Indicar al usuario que diga su nombre */

let mensaje= prompt('Ingrese su nombre');

/* En caso de que el usuario no coloque su nombre, a la etiqueta <h2> , se le debe
agregar la palabra “Invitado”. En caso contrario, se le debe agregar el nombre que el
usuario ingresó. */

if (mensaje){
    document.querySelector('h2').innerText+= ' ' + mensaje;
} else{
    let mensaje= 'Invitado';
    document.querySelector('h2').innerText= mensaje;
}

/*  Agregar a la etiqueta <h2> el estilo uppercase */

h2.style.textTransform= 'uppercase'

/* Mediante el confirm , preguntar al usuario “ ¿Desea colocar un fondo de
pantalla? ”. Si la respuesta es afirmativa por parte del usuario, agregar al <body> la
clase “ fondo ”. */

let confirmaCambios= confirm('¿Desea color un fondo de pantalla?')

if (confirmaCambios){
    document.querySelector('body').classList.add('fondo')
}

/* A todos los párrafos que fueron capturados, asignar a los pares la clase:
“ descatadoPar ”. Y a los impares agregar la clase: “ destacadoImpar ”.
 */

for (let i = 1; i <= p.length; i++) {
    if (i%2 === 0) {
        p[i - 1].classList.add('destacadoPar');
    } else {
        p[i - 1].classList.add('destacadoImpar');
    }
}

console.log(main, h2, p, a)