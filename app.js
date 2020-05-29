//Importación de módulos
const argv = require('./Config/yargs').argv;
const colors = require('colors/safe');
const { analizar } = require('./buscador/buscar')
fs = require('fs')
    //almacenar los comandos argv en variables
let comando = argv._[0]
let path = argv.archivo
let pais = argv.pais
let year = argv.anio
let data = ""
let main = () => {
        //condición de comandos válidos para esta aplicacion
        if (comando != 'mostrar' && comando != 'guardar') {
            console.log(colors.red("Comando no reconocido.. Si requiere ayuda consulte con el comando --help"));
        } else {
            //llamada de la función analizar de otro módulo
            analizar(pais, year, path)
                .then(datos => {
                    data = datos
                    if (comando == 'mostrar') {
                        //impresión por consola de los datos consultados con colores
                        console.log(colors.cyan("Datos :"), colors.green(datos['indicador']))
                        console.log(colors.cyan("Pais :"), colors.green(datos['name']))
                        console.log(colors.cyan("Año :"), colors.green(datos['anio']))
                        console.log(colors.cyan("Valor :"), colors.green(datos['valor']))
                    } else {
                        //formato mensaje de salida por consola
                        let salida = `Datos: ${datos['indicador']} \n Pais: ${datos['name']} \n Año: ${datos['anio']} \n Valor: ${datos['valor']} `
                            //armar nombre del archivo txt
                        let nombre_dir_archivo = `./resultados/${datos['code']}-${datos['anio']}.txt`
                            //Creación del archivo .txt
                        fs.writeFile(nombre_dir_archivo, salida, function(err, data) {
                            if (err) {
                                return console.log(err);
                            } else {
                                console.log(colors.green(`Archivo Guardado Exitosamente: ${nombre_dir_archivo}`));
                            }
                        });
                    }
                })
                .catch(err => console.log(colors.red(err.message))) //recuperación de los posibles errores producidos y lanzados con color rojo 
        }
    }
    //llamada a la función principal
main()