/* 07.- Programar una función que valide si texto ingresado es o no un palíndromo. Devolver true o false*/

/* const palindromo = (texto = "") => {
    if (!texto) return console.log("No existe la cadena");

    texto = texto.toLowerCase();
    let palabraRe = texto.split("").reverse().join("");

    return (texto === palabraRe)
        ? console.info(`Si es palíndromo, ${palabraRe}`)
        : console.info(`No es palíndromo, ${palabraRe}`);
}

palindromo("salas"); */

const palindromo = (texto = "") => {
    if (!texto) return console.warn("No existe la cadena");

    texto = texto.toLowerCase();

    let i = 0, cadena = "";

    while (i < texto.length) {
        if (texto.charAt(i) !== ' ') { cadena += texto.charAt(i); i++; } else i++;
    }

    texto = cadena;
    let cadenaRe = "";

    for (i = texto.length; i >= 0; i--) cadenaRe += texto.charAt(i);

    (texto === cadenaRe) ? console.info(`${texto}`, bool = true) : console.info(`${texto}`, bool = false);
}

palindromo("anita lava la tina");