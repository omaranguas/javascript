/* Programar una función que dado un array de números devuelva un objeto con 2 arreglos, en el primero se almacena los números pares y en el segundo los números impares. */

const numeros = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn("No se ha ingresado el arreglo");
    if (!(arreglo instanceof Array)) return console.error(`${arreglo} no es un arreglo`);
    if (arreglo.length === 0) return console.warn("El arreglo no puede estar vacio");

    arreglo = arreglo.filter(num => typeof num === "number");

    /* for (num of arreglo) {
        if (typeof num !== "number") {
            return console.error(`${num} no es un número`);
        }
    } */

    return console.info({
        arreglo,
        pares: arreglo.filter(num => num % 2 === 0),
        impares: arreglo.filter(num => num % 2 === 1)
    })
}

numeros([1, '$', 44, 65, "hola mundo", 11, 100, true]);

const arregloNumeros = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn("No se ha ingresado el arreglo");
    if (!(arreglo instanceof Array)) return console.error(`${arreglo} no es un arreglo`);
    if (arreglo.length === 0) return console.warn("El arreglo no puede estar vacio");

    for (num of arreglo) {
        if (typeof num !== "number") {
            return console.error(`${num} no es un número`);
        }
    }

    let pares = [],
        impares = [],
        iPar = 0,
        iImpar = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            pares[iPar] = arreglo[i];
            iPar++;
        } else {
            impares[iImpar] = arreglo[i];
            iImpar++;
        }
    }

    return console.info({
        arreglo,
        pares,
        impares
    });

    return console.info(`Arreglo original:\n${arreglo}\nArreglo de números pares:\n${pares}\nArreglo de números impares:\n${impares}`);
}

arregloNumeros([1, 3, 5, 2, 8, 4, 9, 10]);