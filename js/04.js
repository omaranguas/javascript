/* 04.- Realizar una función que repita un texto n veces. */

const repetirTexto = (texto = "", n = undefined) => {
    if (!texto) return console.warn("No existe la cadena");
    if (n === undefined) return console.warn("Debes ingresar un número");
    if (n === 0) return console.error("El número de veces no puede ser 0");
    if (Math.sign(n) === -1) return console.error("El número no puede ser negativo");

    for (let i = 1; i <= n; i++) {
        console.info(`${texto}, ${i}`);
    }
}

repetirTexto("Hola mundo", 10);