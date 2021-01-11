/* Programar una función que dado un array numérico devuelve otro array con los números elevados al cuadrado. */

const arregloAlCuadrado = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn("No se ha ingresado el arreglo");
    if (!(arreglo instanceof Array)) return console.error(`${arreglo} no es un arreglo`);
    if (arreglo.length === 0) return console.warn("El arreglo no puede estar vacio");

    for (num of arreglo) {
        if (typeof num !== "number") {
            console.error(`${num} no es un número`);
        }
    }

    const nuevoArreglo = arreglo.map(e => Math.pow(e, 2));

    console.info(`Arreglo original "${arreglo}"`);
    console.info(`Arreglo al cuadrado "${nuevoArreglo}"`);
}

arregloAlCuadrado([1, 4, 8, 10, 5]);

const arregloCuadrado = (arreglo = undefined) => {

    let cuadrado = [];
    let contadorArregloCuadrado = 0;

    for (let i = 0; i < arreglo.length; i++) {
        cuadrado[i] = Math.pow(arreglo[i], 2);
        contadorArregloCuadrado++;
    }

    console.info(`Arreglo original "${arreglo}"`);
    console.info(`Arreglo al cuadrado "${cuadrado}"`);
}

arregloCuadrado([1, 9, 2, 7, 14]);