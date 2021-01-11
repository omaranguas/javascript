/* Programar una función que dado un array devuelva el número mas alto y el número más bajo de dicho array. */

const arregloMayorMenor = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn("No se ha ingresado el arreglo");
    if (!(arreglo instanceof Array)) return console.error(`${arreglo} no es un arreglo`);
    if (arreglo.length === 0) return console.warn("El arreglo no puede estar vacio");

    for (num of arreglo) {
        if (typeof num !== "number") {
            console.error(`${num} no es un número`);
        }
    }

    return console.info(`Arreglo:\n${arreglo}\nNúmero mayor: ${Math.max(...arreglo)}\nNúmero menor: ${Math.min(...arreglo)}`);
}

arregloMayorMenor([1, 2, 9, 0, -13, 99]);

const arregloMaxMin = (arreglo = undefined) => {
    let mayor = arreglo[0];
    let menor = arreglo[0];

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        } else {
            if (arreglo[i] < menor) {
                menor = arreglo[i];
            }
        }
    }

    return console.info(`Arreglo:\n${arreglo}\nNúmero mayor: ${mayor}\nNúmero menor: ${menor}`);
}

arregloMaxMin([9, 1, 4, 5, 19, 0, -1]);