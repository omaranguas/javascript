/* Programar una función que determine si un número es primo. */

const primo = (numero = undefined) => {
    if (!numero) return console.warn("No existe número para evaluar");
    console.log("Has ingresado el número: " + numero);
    console.log("Inicio de bucle desde 2 hasta " + (numero - 1));

    for (let i = 2; i < numero; i++) {

        console.log("Modulo entre " + numero + " y " + i + " = " + (numero % i));

        if (numero % i === 0) {
            console.log(i + " es un multiplo de " + numero);
            console.log(numero + " no es un numero primo porque " + i + " es un multiplo");
            return false;
        }
    }

    (numero === 1)
        ? console.log("Me has pasado el numero 1, recuerda que NO es un numero primo")
        : console.log("Como el numero ingresado no tuvo mas múltiplos entonces determinamos que SI es un numero primo.");
}

primo(7);