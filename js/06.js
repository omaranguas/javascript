/* 06.- Programar una función para contar el número de veces que se repite una palabra en un texto. */

/* const contadorPalabras = (texto = "", palabra = "") => {
    if (!texto) console.warn("No existe la cadena");
    if (!palabra) console.warn("No ingresaste una palabra para buscar");

    let i = 0;
    let contador = 0;

    while (i !== -1) {
        i = texto.indexOf(palabra, i);
        if (i !== -1) {
            i++;
            contador++;
        }
    }

    return console.info(`La palabra ${palabra} se repite ${contador} veces`);
}

contadorPalabras("hola mundo adios mundo", "mundo"); */

/* const contadorPalabras = (cadena = "", palabra = "") => {
    if (!cadena) return console.warn("No existe la cadena");
    if (!palabra) return console.warn("No existe una palabra para buscar");

    let palabras = cadena.split(" ");
    let contador = 0;

    for (let i = 0; i <= cadena.length; i++) {
        if (palabra === palabras[i]) contador++;
    }

    return console.info(`La palabra ${palabra} se repite ${contador} veces.`);
}

contadorPalabras("hola mundo adios mundo", "mundo"); */

const contardorPalabrasIguales = (texto = "", palabra = "") => {
    if (!texto) return console.warn("No existe la cadena");
    if (!palabra) return console.warn("No existe palabra a buscar");

    let i = 0;
    let contador = 0;

    while (i < texto.length) {
        let cadena = "";
        if (texto.charAt(i) !== ' ') {
            while (texto.charAt(i) !== ' ' && i < texto.length) {
                cadena += texto.charAt(i); i++;
            }

            if (palabra === cadena) contador++;

        } else while (texto.charAt(i) === ' ' && i < texto.length) i++;
    }

    console.info(`La palabra ${palabra} se repite ${contador} veces.`)
}

contardorPalabrasIguales("hola mundo adios mundo", "mundo");