# Markdown Links

## Índice

- [1. Preámbulo](#1-preámbulo)
- [2. Flujograma](#2-Flujograma)
- [3. Instalacion](#3-Instalacion)
- [4. Funcionalidad](#4-Funcionalidad)
- [5. Herramientas](#5-Herramientas)
- [6. Autoras](#6-Autoras)



---

## 1. Preámbulo

[Markdown]
Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

![md-links](https://github.com/YarimarDiaz/SCL013-md-links/blob/master/img/links.jpg)

## 2. Flujograma

![Flujo](https://github.com/YarimarDiaz/SCL013-md-links/blob/master/img/Fujograma%20Markdown%20Links.png)

## 3. Instalacion

* Instalar Node.

* Instalar librería.
#### `npm i md-links`

## 4. Funcionalidad
#### Para hacer uso de la librería:

* Import mdLinks
#### `import { mdLinks } from 'md-Links nombre';`

* Require mdLinks
#### `const mdLinks = requeri ('md-Links nombre');`

Una vez la librería se encuentre importada (import) ó requerida (requeri)
#### `md-links <path - ejemplo:C:\Users\Lenovo\Desktop\md\carpeta1> --validate --stats;`

* Opciones de uso:

md-links path : Provee una lista de links con path de origen, url y texto

```
href: 'https://es.wikipedia.org/wiki/Markdown'
text: '1.-MarkdownIn'
file: ' file: 'C:\\Users\\Lenovo\\Desktop\\md\\carpeta1\\exampletest.md'
```

md-links path --validate ó -v: Provee una lista de links con path de origen, url, texto, mensaje de status:

```
File: C:\Users\Yarimar Diaz\Desktop\Laboratorias\SCL013-md-links\md\test.md'
Link: https://nodejs.org/
✔ 200
```

```
File: C:\Users\Yarimar Diaz\Desktop\Laboratorias\SCL013-md-links\md\test.md'
Link: https://www.google.com/5500`
✖ 404
```

md-links path --stats ó -v: Provee una lista con la cantidad de links en el archivo y sus links únicos.

```
'C:\\Users\\Yarimar Diaz\\Desktop\\Laboratorias\\SCL013-md-links\\md\\test.md'
✔ Total :8
✔ Unique :4
```

md-links path --stats --validate: Provee una lista con la cantidad de links en el archivo, sus links únicos y rotos.

```
'C:\\Users\\Yarimar Diaz\\Desktop\\Laboratorias\\SCL013-md-links\\md\\test.md'
✔ Total :8
✔ Unique :4
✖ Broken :4
```
## 5. Herramientas

* Node.js
* Javascript

## 6. Autoras

* Silva Magally.
* Díaz Yarimar.
