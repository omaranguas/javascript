/* Programar una función que devuelva el monto final después de aplicar un descuento a una cantidad dada. */

const descuento = (precio = undefined, descuento = undefined) => {
    if (!precio) console.warn("No ingresaste el precio");
    if (!descuento) return console.warn("No ingresaste el descuento");
    if (typeof precio !== "number") return console.error(`${precio} no es número`);
    if (typeof descuento !== "number") return console.error(`${descuento} no es número`);

    return console.info(`${precio} - ${descuento}% = ${precio * (1 - descuento / 100)}`);
}

descuento(100, 15);