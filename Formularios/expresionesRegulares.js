const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    //EXPRESION REGULAR
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    //Obtenemos datos del formulario
    const datos = {
        correo: formulario.correo.value,
    };
    //Comprobamos si el correo del formulario es una expresion regular del correo
    if(!expresionRegular.test(datos.correo)){
        console.log('Correo inválido');
        return;//cortamos la ejecucion de la función
    }

    console.log('Enviando datos...');
    console.log(datos);
});