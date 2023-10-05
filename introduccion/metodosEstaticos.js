class Usuario{
    constructor(p_nombre, p_correo){
        this.nombre = p_nombre;
        this.correo = p_correo;
    }

    static borrarUsuario(id_usuario){
        console.log(`El usuario con el ID ${id_usuario} ha sido borrado de la base de datos`);
    }
    static registrados = 1000;
}

// let usuario = new Usuario('Matias', 'Matias@correo.com');
// console.log(usuario);
// usuario.borrarUsuario(10);
/**
 * Lo que queremos es usar el METODO BorrarUsuario de la clase Usuario
 * pero sin inicializar un objeto nuevo
 */
Usuario.borrarUsuario(2);
console.log(Usuario.registrados);