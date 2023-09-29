const usuario = {
    edad: 18,
    pais: 'Argentina',
    ticket: true,
};

if(usuario.edad >= 18 && usuario.ticket){
    console.log('El usuario es mayor de edad y tiene un Ticket, puede entrar al concierto');
}else{
    console.log('El usuario es menor de edad o no tiene un Ticket, no puede entrar');
}