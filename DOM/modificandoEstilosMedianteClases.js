/**
 * Modificar estilos CSS mediante clases
 */

const primeraCaja = document.querySelector('#contenedor1 .caja');

//classList.add() - Nos permite agregar clases a un elemento
const agregarClase = () =>{
    primeraCaja.classList.add('activa');
}
//classList.remove() - Nos permite eliminar clases a un elemento
const eliminarClase = () =>{
    primeraCaja.classList.remove('activa');
}
//classList.toggle() - Nos permite alternar clases de un elemento
const toggleClase = () =>{
    primeraCaja.classList.toggle('activa');
}

//classList.contains() - Nos permite comprobar si el elemento contiene una clase
const comprobarClase = () => {
    if(primeraCaja.classList.contains('activa')){
        console.log('La caja SI tiene la clase "ACTIVA"')
    }else{
        console.log('La caja NO tiene la clase "ACTIVA"')
    }

    console.log(' y contiene las siguientes clases: ');
    primeraCaja.classList.forEach((clase) => {
        console.log(clase);
    });
}