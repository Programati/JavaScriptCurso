const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    //Obtenemos datos del formulario
    const datos = {
        correo: formulario.correo.value,
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked,
    };

    if(datos.correo.length <= 2){
        console.log('Correo inválido');
        return;//cortamos la ejecucion de la función
    }
    //Comprobamos el pais
    if(datos.pais === ''){
        console.log('Pais invalido');
        return;
    }

    if(datos.donacion === ''){
        console.log('Selecciona una cantidad a donar');
        return;
    }

    if(datos.fecha === ''){
        console.log('Selecciona una fecha');
        return;
    }

    if(!datos.terminos){
        console.log('Acepte los términos y condiciones');
        return;
    }

    console.log('Enviando datos...');
    console.log(datos);
});