/* Programar una función para convertir números de base binaria a base decimal y viceversa. */

const conversionNumeros = (num = undefined, base = undefined) => {
    if (!num) return console.warn("No ingresaste número");
    if (!base) return console.warn("No ingresaste la base del número");
    if (typeof num !== "number") return console.error(`${num} no es un número`);
    if (typeof base !== "number") return console.error(`${base} no es un número`);

    if (base === 2) return console.info(`${num} base ${base} = ${parseInt(num, base)} base 10`);
    else if (base === 10) console.info(`${num} base ${base} = ${(num.toString(2))} base 2`);
}

conversionNumeros(32, "4");
conversionNumeros(10110111, 2);