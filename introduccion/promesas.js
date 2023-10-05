/**
 * Son estructuras que vamos a definir para decirle al navegador
 * que queremos que espere a que nosotros terminemos la operacion
 * y cuando lo terminemos la operacion le vamos a avisar y le responderemos con los datos
 */

let promesa = new Promise((resolve, reject) =>{
    // Accion que se ejecutará
    setTimeout(() => {
        const exito = false;

        if(exito){
            resolve('La operación tuvo exito');
        }else{
            reject('La operación fracasó por perdida de datos');
        }
    }, 4000);
});

//El navegador esperará y mostrará el alerta en caso de EXITO
promesa.then((mensaje) => {
    alert(mensaje);
});

//Atrapamos el error, y mostramos el mensaje
promesa.catch((mensaje) => {
    alert(mensaje);
});