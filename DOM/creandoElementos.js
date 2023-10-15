const agregarCaja = () => {
    /**
     * 1. Creamos el elemento
     * createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
     */
    const nuevaCaja = document.createElement('div');//Aqui sólo creamos el DIV
    /**
     * 2. Agregamos texto y atributos
     */
    nuevaCaja.innerText = 'Nueva Caja!';
    // nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');
    /**
     * 3. Agregar el elemento al DOM
     */
    const contenedor = document.getElementById('contenedor1');

    // .appendChild() - Agrega un elemento al final
    // contenedor.appendChild(nuevaCaja);

    /**
     * .insertAdjacentElement() - Nos permite agregar un elemento
     * Valores:
     *  afterbegin - como primer elemento
     *  beforebegin - antes del primer elemento padre
     *  beforeend - como último elemento
     *  afterend - despues del elemento padre
     */
    // contenedor.insertAdjacentElement('afterbegin', nuevaCaja);
    // contenedor.insertAdjacentElement('beforebegin', nuevaCaja);
    // contenedor.insertAdjacentElement('beforeend', nuevaCaja);
    // contenedor.insertAdjacentElement('afterend', nuevaCaja);

    //.replaceWith() - Nos permite remplazar el elemento por otra
    document.querySelector('#contenedor1 .caja').replaceWith;

}