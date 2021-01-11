/* Programar una función que determine si un número es par o impar. */

const numeroParImpar = (num = undefined) =>
    (!num)
        ? console.warn("No existe número para evaluar")
        : (num % 2 === 0)
            ? console.info(`${num} es un número par`, true)
            : console.info(`${num} no es un número par`, false);

numeroParImpar(3);