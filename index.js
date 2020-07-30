// Modulos requeridos
let fs = require("fs"); // Módulo  de sistema de archivos
let dir = require("node-dir"); // Lee Archivos y subdirectorios
let path = require("path"); // Resuelve la ruta a absoluta

// Variables requeridas
let regEx = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g; // Patrón para encontrar links
let ruta = process.argv[2];
let expectMDLink = /\[([^\]]*)\]\(([^)]*)\)/g;
let filesMDLinks = []; //Array para guardar la inf (URL, Text, File)
console.log("Ruta desde la declaracion ", ruta);

// Extrae lo link de cada archivo recibido
const readFile = (files) => {
  files.forEach((element) => {
    fs.readFile(element, "utf-8", (e, file) => {
      if (e) {
        console.error(e);
      } else {
        const linksFound = file.match(regEx);
         const textLinks = file
          .match(expectMDLink)
          .map((v) => v.split("](")[0].slice(1));
        linksFound.forEach((link, i) =>
          filesMDLinks.push({
            href: link,
            text: textLinks[i],
            file: element,
          })
        );
        console.log(`Links encontrados en directorio ${element}`, filesMDLinks);
        filesMDLinks = [];
        //console.log(`links encontrados en ${element}`, linksFound);
      }
    });
  });
};

// Coincide con los nombres de archivo con una extensión .md y excluye los dir node_modules
const mdLinks = (route) => {
  return new Promise((resolve, reject) => {
    rutaAbsRel = path.resolve(route);
    console.log("Ruta Convertida por resolve ", rutaAbsRel);
    console.log("Procesando informacion por favor espere.....");
    if (rutaAbsRel) {
      resolve(rutaAbsRel);
    } else {
      reject("ruta Invalida");
    }
  });
};

mdLinks(ruta)
  .then((respuesta) => {
    dir.readFiles(
      respuesta,
      { match: /.md$/, excludeDir: ["node_modules"] },
      (err, content, next) => {
        if (err) {
          console.log("error 1");
        }
        next();
      },
      (err, files) => {
        if (err) {
          console.log("Error al leer la ruta de archivos");
        } else {
          console.log("Rutas de archivos encontrados: ", files);
          readFile(files);
        }
      }
    );
  })
  .catch((error) => {
    console.log(error);
  });
