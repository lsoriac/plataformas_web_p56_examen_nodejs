const argv = require('./config/yargs').argv
    //const busca = require('./buscador/buscar')

let comando = argv._[0];
let path = argv.archivo
let pais = argv.pais
let year = argv.anio

switch (comando) {
    case 'mostrar':
        console.log("=============mostrar==========");
        console.log(path);
        break;
    case 'guardar':
        console.log("=============guardar==========");
        console.log(pais);
        break;
    default:
        'comando no reconocido'
}