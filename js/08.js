/* 08.- Realizar una función que elimine cierto patrón de caracteres de un texto dado. */

const eliminarPatron = (texto = "", patron = "") =>
    (!texto)
        ? console.warn("No existe la cadena")
        : (!patron)
            ? console.warn("No ingresaste un patron de caracteres")
            : console.info(texto.replace(new RegExp(patron, "ig"), ""));

eliminarPatron("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz");