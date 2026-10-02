// arrays
const peliculas = ["obsesión", "son como niños", "maze runner", "e.t.", "toy story"];

const actores = [];

// películas tristes con stock
const peliculas2 = [
    { nombre: "Bajo la misma estrella", stock: 3 },
    { nombre: "Siempre el mismo día", stock: 5 },
    { nombre: "Hachiko", stock: 0 },
    { nombre: "Titanic", stock: 4 },
    { nombre: "La vida es bella", stock: 6 }
];

// classes
class Pelicula {

    constructor(titulo, genero, vista, reseña) {
        this.titulo = titulo;
        this.genero = genero;
        this.vista = vista;
        this.reseña = reseña;
    }

    marcarComoVista() {
        this.vista = true;
        this.reseña = prompt("¿Qué te pareció " + this.titulo + "?");
    }
}


// function
function actorFavorito(mensaje) {

    let actor = prompt(mensaje);

    actores.push(actor);

    console.log(actores);
}


function verPeliculas() {

    let lista = "";
    let numero = 1;

    for (const pelicula of peliculas) {
        lista += numero + ". " + pelicula + "\n";
        numero++;
    }

    alert("Películas disponibles:\n\n" + lista);
}


function modificarPeliculas() {

    let accion = prompt(
        "¿Qué querés hacer?\n" +
        "1. Agregar una película\n" +
        "2. Quitar una película"
    );

    if (accion === "1") {

        agregarPelicula();

    } else if (accion === "2") {

        quitarPelicula();

    } else {

        alert("Opción inválida.");
    }
}


function agregarPelicula() {

    let nuevaPelicula = prompt("Ingresá el nombre de la película");

    peliculas.push(nuevaPelicula);

    alert("Película agregada correctamente.");
}


function quitarPelicula() {

    let pelicula = prompt("Ingresá el número de la película que querés quitar");

    peliculas.splice(parseInt(pelicula) - 1, 1);

    alert("Película eliminada correctamente.");
}


function recomendarPorGenero() {

    let genero = prompt(
        "¿Qué género querés ver?\n" +
        "1. Terror\n" +
        "2. Comedia\n" +
        "3. Romance\n" +
        "4. Acción"
    );

    switch (genero) {

        case "1":

            if (edad >= 18) {

                alert("Te recomiendo: Obsesión");

            } else {

                alert("No podés ver esta película porque es para mayores de 18 años.");
            }

            break;

        case "2":

            if (tiempo >= 90) {

                alert("Te recomiendo: Son como niños");

            } else {

                alert("No tenés suficiente tiempo para ver esta película.");
            }

            break;

        case "3":

            alert("Te recomiendo: Mensajes de voz para Isabelle");

            break;

        case "4":

            alert("Te recomiendo: Maze Runner");

            break;

        default:

            alert("No elegiste una opción válida.");
    }
}


function recomendarPorEstadoDeAnimo() {

    let animo = prompt(
        "¿Cómo estás de ánimo?\n" +
        "1. Feliz\n" +
        "2. Romántico/a\n" +
        "3. Con energía\n" +
        "4. Con ganas de asustarme\n" +
        "5. Triste"
    );

    let peliculaRecomendada = recomendarPorAnimo(animo);

    alert("Te recomiendo ver: " + peliculaRecomendada);
}


function recomendarPorAnimo(animo) {

    switch (animo) {

        case "1":
            return "Una de Adam Sandler";

        case "2":
            return "Una de Sofía Carson";

        case "3":
            return "Liam Neeson";

        case "4":
            return "Johnny Depp";

        case "5":
            return "Bajo la misma estrella";

        default:
            return "Opción no válida";
    }
}


// función para consultar stock
function consultarStock() {

    let respuesta = prompt(
        "¿Querés consultar el stock de nuestras películas tristes? (si/no)"
    );

   if (respuesta.toLowerCase() === "si") {

    // FIND
    const buscar = prompt("¿Qué película querés buscar?");

    const buscaTUPELI = peliculas2.find(
        peli => peli.nombre.toLowerCase() === buscar.toLowerCase()
    );

    if (buscaTUPELI) {
        console.log("Película encontrada:", buscaTUPELI);
    } else {
        console.log("No encontramos esa película.");
    }


    // FILTER
    const stockMinimo = parseInt(
        prompt("¿Qué cantidad mínima de stock querés buscar?")
    );

    const filtrapeli = peliculas2.filter(
        peli => peli.stock >= stockMinimo
    );

    if (filtrapeli.length > 0) {
        console.log("Películas con stock:", filtrapeli);
    } else {
        console.log("No hay películas con ese stock.");
    }


    // REDUCE
    const confirmarStock = prompt(
        "¿Querés saber el stock total de todas las películas? (si/no)"
    );

    if (confirmarStock.toLowerCase() === "si") {

        const stockTotal = peliculas2.reduce(
            (total, peli) => total + peli.stock,
            0
        );

        console.log("Stock total:", stockTotal);

    } else {
        console.log("No se calculó el stock total.");
    }


    // MAP
    const convertir = prompt(
        "¿Querés ver los nombres de las películas en MAYÚSCULAS? (si/no)"
    );

    if (convertir.toLowerCase() === "si") {

        const enmayus = peliculas2.map(
            peli => peli.nombre.toUpperCase()
        );

        console.log("Películas en mayúsculas:", enmayus);

    } else {
        console.log("No se modificaron los nombres.");
    }

} else {

    alert("No hay problema. Volviendo al menú.");
}

}  



function crearPelicula() {

    let titulo = prompt("¿Cuál es el título de la película?");
    let genero = prompt("¿Cuál es el género? (terror, comedia, romance, acción)");
    let yaLaVio = prompt("¿Ya la viste? (si/no)").toLowerCase();

    let vista = yaLaVio === "si";
    let reseña = "";

    if (vista) {
        reseña = prompt("¿Qué te pareció " + titulo + "?");
    }

    return new Pelicula(titulo, genero, vista, reseña);
}


function reseñaPeli() {

    alert("Ahora contanos sobre 3 películas que quieras guardar");

    const pelicula1 = crearPelicula();
    const pelicula2 = crearPelicula();
    const pelicula3 = crearPelicula();

    console.log(pelicula1);
    console.log(pelicula2);
    console.log(pelicula3);

    continuar = false;
}


function salir() {

    alert("¡Gracias por usar el simulador, " + nombre + "!");

    continuar = false;
}



// inicio
alert("Bienvenido a mi sitio web de pelis");

const nombre = prompt("Hola, ¿cuál es tu nombre?");

console.log(nombre);

let añoNacimiento = parseInt(
    prompt("Ingrese el año de su nacimiento")
);

let edad = 2026 - añoNacimiento;

console.log(edad);

alert("Hola, " + nombre);

let tiempo = parseInt(
    prompt("¿Cuántos minutos tenés disponibles?")
);

let continuar = true;

actorFavorito("Ingresá tu actor favorito");


// menu
while (continuar) {

    let opcion = prompt(
        "¿Qué querés hacer?\n" +
        "1. Ver películas o recomendación por genero\n" +
        "2. Agregar / Quitar una película\n" +
        "3.  Recomendación por estado de ánimo\n" +
        "4.  Agregar película con reseña\n" +
        "5.  Salir"
    );


    switch (opcion) {

        case "1":
            verPeliculas();
            recomendarPorGenero();
            break;

        case "2":
            modificarPeliculas();
            break;

        case "3":
            recomendarPorEstadoDeAnimo();
            consultarStock();
            break;

        case "4":
            reseñaPeli();
            break;

        case "5":
            salir();
            break;


        default:
            alert("Opción inválida. Elegí del 1 al 5");
    }
}