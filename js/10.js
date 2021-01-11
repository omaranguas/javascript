/* Programar una función que reciba un número y evalúe si es capicúa o no.*/

const capicua = (num = undefined) => {
    if (!num) return console.warn("No ingresaste un número para evaluar");

    let numCad = num.toString();
    let cadena = "";
    for (let i = numCad; i >= 0; i--) cadena += numCad.charAt(i);

    (num.toString() === cadena) ? console.info(`${cadena}`, true) : console.info(`${cadena}`, false);
}

capicua(2002);