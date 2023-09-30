const saludo = (nombre = 'amigo') => {
    console.log(`Hola ${nombre}`);
}
saludo('Carlos');
saludo('Alex');
saludo('Cesar');

const operacion = (tipo,n1, n2) => {
    if(tipo === 'suma'){
        console.log(n1+n2);
    }else if(tipo === 'resta'){
        console.log(n1-n2);
    }
};

operacion('suma',2,5);
operacion('resta',2,5);

const suma = (n1, n2) =>{
    return n1+n2;
}

const resta = (n1, n2) =>{
    return n1-n2;
}

console.log(suma(12,12));
console.log(resta(30,19));