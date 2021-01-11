/* Programar una función que dado un arreglo de elementos, elimine los duplicados. */

const elementosDuplicados = (arreglo = undefined) => {
    if (!arreglo) return console.warn("No se ha ingresado el arreglo");
    if (!(arreglo instanceof Array)) return console.error(`${arreglo} no es un arreglo`);
    if (arreglo.length === 0) return console.warn("El arreglo no puede estar vacio");

    return console.info({
        original: arreglo,
        sinDuplicados: arreglo.filter((value, index, self) => self.indexOf(value) === index)
    });
}

elementosDuplicados([3, 14, true, 1, "hola", 'hola', {}, [], 3, 99, 14, 99]);