/* 03.- Realizar una función que dado un string te devuelva un array de textos separados por cierto caracter. */

const cadenaAArreglo = (texto = "", caracter = undefined) =>
    (!texto)
        ? console.warn("No existe la cadena")
        : (caracter === undefined)
            ? console.warn("No existe el caracter separador")
            : console.info(texto.split(caracter));

cadenaAArreglo("hola que tal", " ");