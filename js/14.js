/* Programar una función para convertir grados Celsius a Fahrenheit y viceversa. */

const convertirGrados = (grados = undefined, unidad = "") => {
    if (!grados) return console.warn("No ingresaste los grados");
    if (!unidad) return console.warn("No ingresaste la unidad de conversión");
    if (typeof grados != "number") return console.error("El valor no es un número");
    if (typeof unidad != "string") return console.error("Tienes que ingresar un caracter: c|f");

    if (unidad === "c")
        return console.info(`${grados} grados Celsius = ${(grados * 9 / 5) + 32} grados Fahrenheit`);
    else
        if (unidad === "f")
            return console.info(`${grados} grados Fahrenheit = ${(grados - 32) * (5 / 9)} grados Celsius`);
        else console.info("No se puede convertir");
}

convertirGrados(32, "c");