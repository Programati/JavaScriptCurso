//Forma #1
// function saludo(){
//     console.log('Hola!');
// }

//Forma #2
// const saludo = function(){
//     console.log('Hola desde variable!');
// };

//Forma #3
//Podemos evitar las {} llaves y codear en 1 sola linea
//Creamos una constante de nombre SALUDO y a ella le asignamos
//una funcion tipo flecha

//Aclaramos que la constante se convierte en algo asi como una funcion
//Que si la vemos solo es una constante que contiene una funcion, pero si
//la invocamos con los parentesis SALUDO(), ya se convierte en funcion
//ya que contiene una
const saludo = () => console.log('Hola desde tipoFlecha!');