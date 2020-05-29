//Importación de módulos
const argv = require('./Config/yargs').argv;
const { analizar } = require('./buscador/buscar')
let comando = argv._[0]
let path = argv.archivo
let pais = argv.pais
let year = argv.anio
let data = ""
let procesar = (callback) => {
    if (comando != 'mostrar' && comando != 'guardar') {
        console.log("Comando no reconocido");
    } else {
        analizar(pais, year, path)
            .then(datos => {
                data = datos
                console.log(datos);
                callback();
            })
            .catch(err => console.log(err.message))
            //poneeeeer colllooooor rojjooooo
    }
}

function switchF() {

    switch (comando) {
        case 'mostrar':
            console.log("MOstrar");
            console.log(year);
            break;
        case 'guardar':
            console.log("Guardarr----");
            console.log(year);

            break;

        default:
            console.log("Comando no reconocido");
    }
}

procesar(switchF)