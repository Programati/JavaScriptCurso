console.log(`La ventana de tu navegador mide ${window.innerWidth}PX de ANCHO`);
console.log(`La ventana de tu navegador mide ${window.innerHeight}PX de ALTO`);

/**
 * WINDOW.OPEN()
 * Nos permite abrir ventanas del navegador
 * Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana
 * 
 * - 1er parametro: Direccion de la nueva ventana OPCIONAL
 * - 2do parametro: Nombre de la ventana
 * - 3er parametro: Cadena de texto de opciones
 */

let ventana;
const abrirVentana = () => {
    ventana = window.open('', 'Mi nueva ventana', 'width=500,height=500');
    ventana.document.write('<h1>Hola, escribiendo en mi nueva ventana desde un archivo</h1>');
};

const cerrarVentana = () => {
    ventana.close();
}

/**
 * Screen Object
 * Representa la pantalla del usuario
 * MONITOR del usuario
 */
console.log('Ancho de la pantalla: ', window.screen.width);
console.log('Alto de la pantalla: ', window.screen.height);

console.log('Ancho de la pantalla sin barra de Windows: ', window.screen.availWidth);
console.log('Alto de la pantalla sin barra de Windows: ', window.screen.availHeight);