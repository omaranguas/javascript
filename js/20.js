/* Programar una función que valide que una cadena de texto sea un correo electrónico válido. */

const validarCorreo = (correo = "") => {
    if (!correo) return console.warn("No ingresaste un correo electrónico");
    if (typeof correo !== "string") console.error(`${correo} no es una cadena de texto`);

    let exReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-z0-9-.]+$/g.test(correo);

    return (exReg)
        ? console.info(`"${correo}" es un correo válido`)
        : console.info(`"${correo}" no es un correo válido`);
}

validarCorreo("omaranguas@correo.com.mx");

const validaCorreo = (cadena = "", expresion = undefined) => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto");
    if (typeof cadena !== "string") return console.error(`${cadena} no es una cadena de texto`);
    if (expresion === undefined) return console.warn("No se ingreso una expresión regular");
    if (!(expresion instanceof RegExp)) return console.error(`${expresion} no es una expresión regular`);

    let exp = expresion.test(cadena);

    return (exp)
        ? console.info(`"${cadena}" es un correo electrónico válido`)
        : console.info(`"${cadena}" no es un correo electrónico válido`);
}

validaCorreo("correo_javascript@edu.com.mx", /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-z0-9-.]+$/g);
