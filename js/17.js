/* Programar una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy. */

const fecha = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste una fecha");
    if (!(fecha instanceof Date))
        return console.error("El valor no es una fecha válida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        minMS = 1000 * 60 * 60 * 24 * 365,
        aniosHumanos = Math.floor(hoyMenosFecha / minMS);

    return Math.sign(aniosHumanos) === -1
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : Math.sign(aniosHumanos) === 1
            ? console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
            : console.info(`Èstamos en eño actual ${fecha.getFullYear()}`);
};

fecha(new Date(1996, 12, 26));

const contarAnios = (a = undefined, m = undefined, d = undefined) => {
    if (!a || !m || !d) return console.warn("Ingresa una fecha con formato AAAA,MM,DD");
    if (typeof a !== "number") return console.warn("Ingresa un año válido");
    if (typeof m !== "number") return console.warn("Ingresa un mes válido");
    if (typeof d !== "number") return console.warn("Ingresa un día válido");

    let diaPasado = Date.parse(`${a} ${m} ${d}`);
    let diaActual = Date.now();

    if ((diaActual - diaPasado) < 0) return console.warn("Ingresa un día anterior a hoy");
    return console.info(`Desde tu fecha introducida hasta hoy, han pasado ${((diaActual - diaPasado) / 1000 / 3600 / 24 / 365).toFixed()} año(s)`);
}

contarAnios(1996, 12, 26);