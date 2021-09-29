console.log('Conectado exitosamente con Movies Add')

/* Desde el archivo /public/js/moviesAdd.js , capturar los siguientes elementos: <h1> ,
<section> y <article> , ubicados en el archivo: /views//moviesAdd.ejs . */

const qs= data => document.querySelector(data);

let titulo= qs('h1')
let seccion= qs('section')
let articulo= qs('article')

/* ● Agregar a la etiqueta <h1> el mensaje: “ AGREGAR PELÍCULAS ”.*/
titulo.innerText= 'Agregar películas'

/* ● Agregar a la etiqueta <h1> la clase: “ titulo ”.*/
titulo.classList.add('titulo')

/* ● Agregar al artículo la clase: “ fondoTransparente ”.*/
articulo.classList.add('fondoTransparente')

/* ● Agregar a la sección la clase: “ fondoCRUD ”. */
articulo.classList.add('fondoCRUD')

console.log(titulo);
console.log(seccion);
console.log(articulo);