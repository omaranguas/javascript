/* Realizar una función que calcule el factorial de un número */

const factorial = (n = undefined) => {
    if (!n) return console.warn("No ingresaste un valor");
    if (n === 0) return warn("No puede ser 0");
    if (Math.sign(n) === -1) return console.warn("No puede ser un número negativo");

    let factor = 1;

    for (let i = 1; i <= n; i++) factor *= i;

    console.info(`El factorial de ${n} es ${factor}`);
}

factorial(5);