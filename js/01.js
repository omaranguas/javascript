/* 01.- Realizar una función que cuente el número de caracteres de una cadena de texto. */

/* function longCadena(texto = "") {
    if (!texto) {
        console.warn("No existe la cadena");
    } else {
        console.info(`La cadena "${texto}" tiene ${texto.length} caracteres`);
    }
}

longCadena("Hola mundo"); */

const longCadena = (texto = "") =>
    (!texto)
        ? console.warn("No existe la cadena")
        : console.info(`La cadena "${texto}" tiene ${texto.length} caracteres.`);

longCadena();
longCadena("Hola mundo");