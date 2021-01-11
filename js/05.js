/* 05.- Programar una función que invierta las palabras de una cadena de texto. */

const invertirTexto = (texto = "") => {
    if (!texto) return console.warn("No existe la cadena");

    let cadenaInver = "";
    for (let i = texto.length; i >= 0; i--) {
        cadenaInver += texto.charAt(i);
    }

    console.info(cadenaInver);
}

invertirTexto("Hola mundo");

/* const invertirTexto = (texto = "") =>
    (!texto)
        ? console.warn("No existe la cadena")
        : console.info(texto.split("").reverse().join(""));

invertirTexto("Hola mundo"); */