const usuario = {
    nombre: 'Matias',
    pais: 'Argentina'
};

switch(usuario.pais){
    case 'Mexico':
        console.log('El usuario es Mexicano');
        break;
    case 'España':
        console.log('El usuario es Español');
        break;
    case 'Argentina':
        console.log('El usuario es Argentino');
        break;
    default:
        console.log('El usuario es de otro pais');
}