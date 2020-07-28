let fs = require("fs"); // Módulo  de sistema de archivos
let regEx = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g; // Patrón para encontrar links
let dir = require("node-dir"); // Lee Archivos y subdirectorios

// Extrae lo link de cada archivo recibido
const readFile = (files) => {
  files.forEach((element) => {
    fs.readFile(element, "utf-8", (e, file) => {
      if (e) {
        console.error(e);
      } else {
        const linksFound = file.match(regEx);
        console.log(`links encontrados en ${element}` , linksFound);
      }
    });
  });
};

// Coincide con los nombres de archivo con una extensión .md y excluye los dir node_modules
dir.readFiles(
  __dirname,
  { match: /.md$/, excludeDir: ["node_modules"] },
  (err, content, next) => {
    if (err) throw err;
    //console.log("content:", content);
    next();
  },
  (err, files) => {
    if (err) throw err;
    console.log("Rutas de archivos encontrados: ", files);
    readFile(files);
  }
);
