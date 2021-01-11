/* Programar una clase llamada Pelicula.
La clase recibirá un objeto al momento de instanciarse con los siguientes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMDB.
-Todos los datos del objeto son obligatorios.
-Válida que el id tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
-Válida que el titulo no rebase los 100 caracteres.
-Válida que el director no rebase los 50 caracteres.
-Válida que el año de estreno sea un número entero de 4 dígitos.
-Válida que el páis o países sean introducidos en forma de arreglo.
-Válida que los géneros sean introducidos en forma de arreglo.
-Válida que los géneros introducidos esten dentro de los géneros aceptados.
-Crea un método estático que devuelva los géneros aceptados.
-Válida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
-Crea un método que devuelva la ficha técnica de la pelicula.
-Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

Generos aceptados[Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game-Show, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western]
*/

class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validaId(id);
        this.validaTitulo(titulo);
        this.validaDirector(director);
        this.validaEstreno(estreno);
        this.validaPais(pais);
        this.validaGenero(generos);
        this.validaCalificacion(calificacion);
    }

    static get listaGeneros() {
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
    }

    static generos() {
        return console.info(`Los géneros aceptados son:\n${Pelicula.listaGeneros.join('    ')}`);
    }

    /* Validación de campos */
    validaCadenaDeTexto(propiedad, valor) {
        if (!valor) return console.warn(`El campo ${propiedad} esta vació.`);
        if (typeof valor !== "string") return console.error(`El campo ${propiedad} tiene el valor ${valor}. No es una cadena de texto.`);

        return true;
    }

    validaLongitudDeCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) {
            return console.error(`La propiedad ${propiedad} excede el No. de caracteres permitidos.`);
        }

        return true;
    }

    validaNumeroEntero(propiedad, valor) {
        if (!valor) return console.warn(`El campo ${propiedad} esta vació.`);
        if (typeof valor !== "number") return console.error(`El campo ${propiedad} tiene el valor '${valor}'. No es un número entero.`);

        return true;
    }

    validaFormaDeArreglo(propiedad, valor) {
        if (!valor) return console.warn(`El campo ${propiedad} esta vació.`);
        if (valor.length === 0) return console.warn(`Debe existir al menos un elemento de tipo cadena.`);
        if (!(valor instanceof Array)) return console.error(`${valor} no es un arreglo. Los países deben ser introducidos en forma de arreglo.`);

        for (let cadena of valor) {
            if (typeof cadena !== "string") {
                console.error(`${cadena} no es un elemento de tipo cadena.`);
            }
        }

        return true;
    }

    /* Propiedades */
    validaId(id) {
        if (this.validaCadenaDeTexto('id', id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.warn(`"${id}" no es un id válido. Debe tener 9 caracteres, los dos primeros deben ser letras en minúsculas y los restantes números enteros.`);
            }
        }
    }

    validaTitulo(titulo) {
        if (this.validaCadenaDeTexto('titulo', titulo)) {
            this.validaLongitudDeCadena('titulo', titulo, 100);
        }
    }

    validaDirector(director) {
        if (this.validaCadenaDeTexto('director', director)) {
            this.validaLongitudDeCadena('director', director, 50);
        }
    }

    validaEstreno(estreno) {
        if (this.validaNumeroEntero('estreno', estreno)) {
            if (!(/^([0-9]){4}$/.test(estreno))) {
                return console.warn(`"${estreno}" no es un año válido. Debe tener un total de 4 dígitos.`);
            }
        }
    }

    validaPais(pais) {
        if (this.validaFormaDeArreglo('país', pais));
    }

    validaGenero(generos) {
        if (this.validaFormaDeArreglo('géneros', generos)) {
            for (let genero of generos) {
                //console.info(genero, Pelicula.listaGeneros.includes(genero));
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Género(s) incorrecto(s) ${generos.join('  ')}`);
                    Pelicula.generos();
                }
            }
        }
    }

    validaCalificacion(calificacion) {
        if (this.validaNumeroEntero('calificacion', calificacion)) {
            return (calificacion < 0 || calificacion > 10)
                ? console.error(`La calificación ${calificacion} es incorrecta. Debe estar entre un rango de 0 y 10.`)
                : calificacion = calificacion.toFixed(1);
        }
    }

    fichaTecnica() {
        console.info(
            `**Ficha técnica**\nId: "${this.id}"\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nEstreno: "${this.estreno}"\nPaís: "${this.pais}"\nGénero(s): "${this.generos}"\nCalificación: "${this.calificacion}"`
        )
    }
}

const peliculasFavoritas = [
    {
        id: 'tt0298203',
        titulo: '8 Mile',
        director: 'Curtis Hanson',
        estreno: 2002,
        pais: ['USA', 'Germany'],
        generos: ['Drama', 'Music'],
        calificacion: 7.1
    },

    {
        id: 'tt3501632',
        titulo: 'Thor: Ragnarok',
        director: 'Taika Waititi',
        estreno: 2017,
        pais: ['USA', 'Australia'],
        generos: ['Action', 'Adventure', 'Comedy'],
        calificacion: 7.9
    },

    {
        id: 'tt0910970',
        titulo: 'WALL-E',
        director: 'Andrew Stanton',
        estreno: 2008,
        pais: ['USA'],
        generos: ['Animation', 'Adventure', 'Family'],
        calificacion: 8.4
    }
];

peliculasFavoritas.forEach((pelicula) => new Pelicula(pelicula).fichaTecnica());