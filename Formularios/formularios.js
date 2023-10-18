/**
 * FORMULARIOS 
 * Tenemos dos formas de acceder a los formularios.
 * - Mediante el objeto FORMS
 * - Mediante métodos del DOM
 */

// console.log(document.forms['formulario-donacion']['correo'].value);

// const correo = document.querySelector('#formulario-donacion [name="correo"]');
// console.log(correo);

document.getElementById('btnEnviar').addEventListener('click', (e) => {
    e.preventDefault();//prevenimos que la página se refresque para ver los valores que capturamos o modificamos o programamos...
    const correo = document.querySelector('#formulario-donacion [name="correo"]');
    console.log(correo.value);

    console.log(document.forms['formulario-donacion']['pais'].value);

    const formulario = document.forms['formulario-donacion'];
    console.log(formulario['donacion'].value);
    console.log(formulario.fecha.value);
    console.log(formulario.fecha.value);
    //Cuando tengamos valores con espacios o guiones, es mucho mejor trabajar con []
    console.log(formulario['terminos-y-condiciones'].checked);
})