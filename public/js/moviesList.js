console.log('Conectado correctamente con Movies List');

/* Desde el archivo /public/js/moviesList.js , capturar los siguientes elementos: <body>
y <h1> , ubicados en el archivo /views//moviesList.ejs . */
const qs= data => document.querySelector(data);

let cuerpo= qs('body');
let titulo= qs('h1');

/* ● Agregar a la etiqueta <h1> el mensaje: “ LISTADO DE PELÍCULAS ”.
 */
qs('h1').innerText= 'LISTADO DE PELÍCULAS';

/* Agregar a la etiqueta <h1> los siguientes estilos:
○ Color de la fuente: white .
○ Color de fondo: teal .
○ Relleno: 20px . */

titulo.style.color='white';
titulo.style.backgroundColor='teal';
titulo.style.padding= '20px'

let modoOscuro= prompt('¿Desea modo oscuro?');
if (modoOscuro){
    cuerpo.style.backgroundColor= '#7f7f7f';
    document.querySelector('main').classList.add('fondoMoviesList');
}



console.log(cuerpo);
console.log(titulo);