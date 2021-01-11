/* Programar una función que dada una cadena de texto cuente el número de vocales y consonantes. */

const vocalesConsonantes = (cadena = "") => {
    if (!cadena) return console.warn("No existe una cadena de texto para evaluar");
    if (typeof cadena !== "string") return console.error(`${cadena} no es una cadena de texto`);

    let contadorVocales = 0;
    let contadorConsonantes = 0;
    let cadenaSE = "";

    cadena = cadena.toLowerCase();

    let i = 0;
    while (i < cadena.length) {
        if (cadena[i] !== ' ') {
            cadenaSE += cadena.charAt(i);
            i++;
        } else i++;
    }

    cadena = cadenaSE;

    for (i = 0; i < cadena.length; i++) {
        switch (cadena[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u": contadorVocales++;
                break;
            default: contadorConsonantes++;
        }
    }

    console.info(`EL número de vocales en la cadena es ${contadorVocales}`);
    console.info(`El total de consonantes es ${contadorConsonantes}`);

    console.info({
        cadena,
        contadorVocales,
        contadorConsonantes
    })
}

vocalesConsonantes("Anita la mas bonita");