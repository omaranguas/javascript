/* Programar una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los números ordenados de manera ascendente y el segundo de forma descendiente. */

const ordenarNumeros = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn("No se ha ingresado el arreglo");
    if (!(arreglo instanceof Array)) return console.error(`${arreglo} no es un arreglo`);
    if (arreglo.length === 0) return console.warn("El arreglo no puede estar vacio");

    for (num of arreglo) {
        if (typeof num !== "number") {
            return console.error(`${num} no es un número`);
        }
    }

    return console.info({
        arreglo,
        asc: arreglo.map(el => el).sort(),
        des: arreglo.map(el => el).sort().reverse()
    });
}

ordenarNumeros([2, 0, 3, 1, 7, 5, -1]);

const numeros = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn("No se ha ingresado el arreglo");
    if (!(arreglo instanceof Array)) return console.error(`${arreglo} no es un arreglo`);
    if (arreglo.length === 0) return console.warn("El arreglo no puede estar vacio");

    console.info(arreglo);

    arreglo = arreglo.filter(num => typeof num === "number");

    let ascendente = [],
        descendiente = [],
        iAscendente = 0,
        iDescendiente = 0,
        aux = 0;

    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length - 1; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                aux = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = aux;
            }
        }
    }

    for (i = 0; i < arreglo.length; i++) {
        ascendente[iAscendente] = arreglo[i];
        iAscendente++;
    }

    for (i = arreglo.length - 1; i >= 0; i--) {
        descendiente[iDescendiente] = arreglo[i];
        iDescendiente++;
    }

    return console.info({
        ascendente,
        descendiente
    });
}

numeros([false, 1, 3, 2, '#', 9, 7, 0, true, "hola mundo"]);