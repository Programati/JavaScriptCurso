const persona = {
  nombre: 'Matias',
  apellido: 'Martinez',
  edad: 27,
  correo: 'correo@correo.com',
  suscripciones: {
    web: true,
    correo: true
  },
  coloresFavoritos: ['Negro', 'Rojo'],
  saludo: function(){
    alert('Hola!');
  }
};

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona['edad']);

const variable = 'suscripciones';
console.log(persona[variable]);

//Agregar elementos en el objeto

persona.pais = 'Argentina'
persona.pais = 'Mexico'
console.log(persona);
persona.saludo();