class Usuario{
    constructor(p_usuario, p_password){
        this.usuario = p_usuario;
        this.password = p_password;
    }

    obtenerPosts(){
        let posteos = ['post1', 'post2'];
        return posteos;
    }

}
class Moderador extends Usuario{
    constructor(p_usuario, p_password, p_permisos){
        super(p_usuario, p_password);//Mandamos los parametros a la clase padre
        this.permisos = p_permisos;
    }

    borrarPosteos(id){
        if(this.permisos.includes('borrar')){
            console.log(`El post con el ${id} ha sido borrado`);
        }else{
            console.log('No tienes los permisos para borar POST');
        }
    }
}

let usuario = new Usuario('matias', '123');
console.log(usuario.obtenerPosts());

let usuario2 = new Moderador('Moderador', '456',['borrar', 'editar']);
console.log(usuario2.permisos);
usuario2.borrarPosteos(1);
let usuario3 = new Moderador('Moderador2', '456',['editar']);
console.log(usuario3.permisos);
usuario3.borrarPosteos(1);