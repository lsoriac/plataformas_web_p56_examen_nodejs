//Importación de módulos
const argv = require('./Config/yargs').argv;
const colors = require('colors/safe');
const { analizar } = require('./buscador/buscar')
fs = require('fs')

let comando = argv._[0]
let path = argv.archivo
let pais = argv.pais
let year = argv.anio
let data = ""
let main = () => {
    if (comando != 'mostrar' && comando != 'guardar') {
        console.log("Comando no reconocido");
    } else {
        analizar(pais, year, path)
            .then(datos => {
                data = datos
                if (comando == 'mostrar') {
                    console.log(colors.cyan("Datos :"), colors.green(datos['indicador']))
                    console.log(colors.cyan("Pais :"), colors.green(datos['name']))
                    console.log(colors.cyan("Año :"), colors.green(datos['anio']))
                    console.log(colors.cyan("Valor :"), colors.green(datos['valor']))
                } else {
                    let salida = `Datos: ${datos['indicador']} \n Pais: ${datos['name']} \n Año: ${datos['anio']} \n Valor: ${datos['valor']} `
                    let nombre_dir_archivo = `./resultados/${datos['code']}-${datos['anio']}.txt`

                    fs.writeFile(nombre_dir_archivo, salida, function(err, data) {
                        if (err) {
                            return console.log(err);
                        } else {
                            console.log(colors.green(`Archivo Guardado Exitosamente: ${nombre_dir_archivo}`));
                        }
                    });
                }
            })
            .catch(err => console.log(colors.red(err.message)))
    }
}

main()