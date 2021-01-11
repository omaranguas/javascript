/* Realizar una función que valide que una cadena de texto sea un nombre válido. */

const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn("No ingresaste el nombre");
    if (typeof nombre !== "string") return console.error(`${cadna} no es una cadena de texto`);

    let expRegular = /^[A-Za-z\s]+$/g.test(nombre);

    return (expRegular)
        ? console.info(`"${nombre}" es un nombre válido`)
        : console.info(`"${nombre}" no es un nombre válido`);
}

validarNombre("Omar Anguas");