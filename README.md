# Examen Plataformas Web
# Universidad Politécnica Salesiana


_Crear una Aplicación en NodeJS con vista de consola que permite leer los datos de las Suscripciones a telefonía celular móvil, publicadas por el Banco Mundial y mostrar la búsqueda de un determinado país en un año específico._

## Comenzando 🚀

### Pre-requisitos 📋
#### Descarga e instala Node.js y npm
1. Linux <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" alt="Lin Logo" width="25" height="25" /> o Windows <img src="https://es.seaicons.com/wp-content/uploads/2015/10/OS-Windows-icon.png" alt="Win Logo" width="25" height="25" /> 

  - _[Node.js 12.16.3 LTS](https://nodejs.org/es/) o superior._
  
  - _Mediante una terminal._
```
sudo apt install nodejs
```

  - _Gestor de paquetes npm 6.14.4 o superior._
```
sudo install npm@latest -g
```
  - _Actualizar y Upgrade_
```
sudo apt-get update
sudo apt-get upgrade
```
3. Datos Banco Mundial
  - _Descarga de los datos en formato [CSV](https://datos.bancomundial.org/indicador/IT.CEL.SETS)._

### Ayuda / Comandos ⚙️ 📦
* _**-f** *archivo* Path(Ruta) de los datos del Banco Mundial._
* _**-c** *pais* Código ISO 31 ALPHA-3 de los paises._
* _**-y** *anio* Año (Desde 1960 - Hasta 2019)._
```
mobile-subs --help
mobile-subs publicar -f -c -y 
mobile-subs guardar -f -c -y 
```

### Ejemplo 🔩

_La ejecución se lleva a cabo con el siguiente comando **Asegurate** de haber descargado los datos del banco mundial y **también** colocar correctamente el path(ruta)_
```
mobile-subs publicar -c ECU -f './API_IT.CEL.SETS_DS2_es_csv_v2_1072836.csv'
```

## Construido con 🛠️

_Las herramientas utilizadas en el desarrollo del proyecto son las siguientes:._

* [NodeJS](https://nodejs.org/) - Entorno de ejecución para JavaScript
* [NPM](https://www.npmjs.com/) - Manejador de dependencias
* [VisualStudio](https://code.visualstudio.com/?wt.mc_id=DX_841432) - Editor de código

## Autor ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_
* **Santiago Soria** - *Trabajo Inicial* - [lsoriac](https://github.com/lsoriac)


## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles


☕ 🍺 📢 🍺 🎁



---
Plantilla README:
[Villanuevand](https://github.com/Villanuevand)
