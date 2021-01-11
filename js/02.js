/* 02.- Realizar una función que devuelva el texto recortado según el número de caracteres indicados. */

const recorText = (texto = "", longitud = undefined) =>
    (!texto)
        ? console.warn("No existe la cadena")
        : (longitud === undefined)
            ? console.warn("No ingresaste la longitud")
            : console.info(texto.slice(0, longitud));

recorText("Hola mundo1234", 10);