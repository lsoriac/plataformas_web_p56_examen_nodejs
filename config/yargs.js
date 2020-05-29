const mostrar = {
    archivo: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    pais: {
        alias: 'c',
        default: 'ECU',
        desc: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3.'
    },
    anio: {
        alias: 'y',
        default: 1960,
        desc: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.'
    }

}
const guardar = {
    archivo: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    pais: {
        alias: 'c',
        default: 'ECU',
        desc: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3.'
    },
    anio: {
        alias: 'y',
        default: 1960,
        desc: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.'
    }
}

const argv = require('yargs').command('mostrar', ' Este comando publicará las estadísticas en una página web básica.', mostrar).command('guardar', ' Este comando almacenará los resultados de las estadísticas en un archivo json.', guardar).help().argv;

module.exports = {
    argv
}