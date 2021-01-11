/* Programar una función que dado un arreglo de números obtenga el promedio. */

const promedio = (arreglo = undefined) => {
    if (!arreglo) return console.warn("No se ha ingresado el arreglo");
    if (!(arreglo instanceof Array)) return console.error(`${arreglo} no es un arreglo`);
    if (arreglo.length === 0) return console.warn("El arreglo no puede estar vacio");

    for (num of arreglo) {
        if (typeof num !== "number") {
            console.error(`${num} no es un número`);
        }
    }

    return console.info(
        arreglo.reduce((total, num, index, arreglo) => {
            total += num;
            if (index === arreglo.length - 1) {
                return `El promedio de ${arreglo.join(" + ")} es ${total / arreglo.length}`
            } else {
                return total;
            }
        })
    )
}

promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

const promedioArreglo = (arreglo = undefined) => {
    if (!arreglo) return console.warn("No se ha ingresado el arreglo");
    if (!(arreglo instanceof Array)) return console.error(`${arreglo} no es un arreglo`);
    if (arreglo.length === 0) return console.warn("El arreglo no puede estar vacio");

    for (num of arreglo) {
        if (typeof num !== "number") {
            console.error(`${num} no es un número`);
        }
    }

    let suma = 0,
        promedio = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    promedio = suma / arreglo.length;

    return console.info(`Arreglo:\n${arreglo}\nPromedio:\n${promedio}`);
}

promedioArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);