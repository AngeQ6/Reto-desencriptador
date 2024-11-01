const letras = {  
    '?': 'a',  
    '[': 'e',  
    '\\': 'i',  
    '~': 'o',  
    '+': 'u',  
    '¬': 'ó',  
    '^': 'm',  
    '$': 'r',  
    '=': 't',  
    '`': 'c',  
    ']': 'n',  
    '*': 'p',  
    '/': 'l',  
    '{': 's',  
    '%': 'b',  
    '¿': 'y',  
    '!': 'j',  
    '¡': 'd',  
    '}': 'q',
    ';': 'f',
    '__': 'z',
    '-': 'h',
    '#': 'v'    
};

document.getElementById('desencriptarButton').addEventListener('click', desencriptar);

function desencriptar() {
    const mensajeCifrado = document.getElementById('mensajeCifrado').value;
    let resultado = '';

    // Reemplaza los espacios por ' '
    const mensajeConEspacios = mensajeCifrado.replace(/\(\)/g, ' ');

    // Recorre el mensaje teniendo en cuenta claves de varias longitudes
    for (let i = 0; i < mensajeConEspacios.length; ) {
        let encontrado = false;

        // Intenta encontrar el mayor número de caracteres posibles que coincidan en letras
        for (let longitud = 2; longitud > 0; longitud--) {
            const subcadena = mensajeConEspacios.slice(i, i + longitud);

            if (letras[subcadena] !== undefined) {
                resultado += letras[subcadena];
                i += longitud;
                encontrado = true;
                break;
            }
        }

        // Si no encuentra una coincidencia, agrega el carácter original
        if (!encontrado) {
            resultado += mensajeConEspacios[i];
            i++;
        }
    }

    document.getElementById('resultado').innerText = resultado;
}