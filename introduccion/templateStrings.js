//Nos permite trabajar con variables dentro de cadenas de texto

//ejemplo normal
const nombre = 'Carlos Arturo';
const edad = 27;
const pais = 'Mexico';
console.log('La persona es '+nombre+' tiene '+edad+' años y es de '+pais);

//Ejemplo con TEMPLATESTRING. Usando ( `` ) 
//se hace: AltGr + }  (2 veces apretar)
console.log(`La persona es ${nombre} tiene ${edad} años de edad y es del país ${pais}`);