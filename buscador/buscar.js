const lookup = require('country-data').lookup
var fs = require("fs");
const csv = require('csvtojson/v2')

let readCSV = async(path) => {
    var csvStr
    try {
        csvStr = fs.readFileSync(path, "utf-8");
    } catch (error) {
        throw new Error(`El archivo csv no existe`)
    }
    if (csvStr.indexOf("IT.NET.USER.ZS") > 0 && csvStr.indexOf("Country") > 0 && csvStr.indexOf("IT.NET.USER.ZS") && csvStr.indexOf("Country") == 94) {
        csvStr = csvStr.substring(csvStr.indexOf("Country") - 1);
        return csv().fromString(csvStr).then((jsonObj) => jsonObj)
    } else {
        throw new Error(`El Archivo no tiene el formato correcto`);
    }



}
let getJSON = async(path) => {
    let data = await readCSV(path);
    return data;
}


async function analizar(pais, year, csvpath) {
    let errorCode = 'El parámetro country debe ser un código ISO 3166 ALPHA-3.'

    try {
        pais = pais.toUpperCase()
        let codeP = lookup.countries({ alpha3: pais })[0];
        if (codeP == undefined) {
            throw new Error(errorCode)
        }
    } catch (error) { //ISO 3166 ALPHA-3
        throw new Error(errorCode)
    }
    let msg
    let jsonOB = await getJSON(csvpath).then().catch(err => msg = err.message);
    try {
        let paisOB = await buscarPais(pais, year, jsonOB)
            //Verificar existencia de registros
        if (!Number.isInteger(year) || year < 1960) {
            msg = `El valor del parámetro year deber ser un número mayor o igual a 1960`
            throw new Error(msg)
        }
        return paisOB
    } catch (error) {
        throw new Error(msg)
    }
}

async function buscarPais(pais, year, json) {
    var jsonOB = json
    let aux
    for (var item in jsonOB) {
        temp = jsonOB[item]['Country Code']
        if (pais == temp) {
            aux = jsonOB[item]
            break;
        }
    }
    return { name: aux['Country Name'], code: pais, indicador: aux['Indicator Name'], uso_internet: aux[year], anio: year }

}



module.exports = {
    analizar,
    buscarPais
}