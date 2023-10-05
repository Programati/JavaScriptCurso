class Usuario{
    tipo = 'usuario';

    constructor(p_nombre, p_apellido){
        this.nombre = p_nombre;
        this.apellido = p_apellido;
        console.log('Nuevo usuario registrado');
    };

    obtenerNombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

let usuario = new Usuario('Matias', 'Martinez');
let usuario2 = new Usuario('Carlos', 'Ramires');
console.log(usuario.obtenerNombreCompleto());
console.log(usuario2.obtenerNombreCompleto());