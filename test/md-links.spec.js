const mdLinks = require('../index.js');
const processLinks = require ('../index.js');
let dir = ['C:/Users/Lenovo/Desktop/md/carpeta1'];
let route = [ 'C:\\Users\\Lenovo\\Desktop\\md\\carpeta1\\exampletest.md' ];
const array = [
{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: '1.-MarkdownIn',
  file: 'C:\\Users\\Lenovo\\Desktop\\md\\carpeta1\\exampletest.md'
},
{
  href: 'https://nodejs.org/',
  text: '2.-Node.jsIn',
  file: 'C:\\Users\\Lenovo\\Desktop\\md\\carpeta1\\exampletest.md'
},
{
  href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
  text: '3.-md-linksIn',
  file: 'C:\\Users\\Lenovo\\Desktop\\md\\carpeta1\\exampletest.md'
},
{
  href: 'https://nodejs.org/es/',
  text: '4.-Node.jsIn',
  file: 'C:\\Users\\Lenovo\\Desktop\\md\\carpeta1\\exampletest.md'
}
]

describe("mdLinks", () => {

  it("deberia ser una función", () => {
    expect(typeof mdLinks).toBe("function");
   
  });
  test('Debería retornar un array de obj ', () => {
         
    expect(mdLinks(dir)).toStrictEqual(route);
       
 });
  
    
}); 

 /*  test("mostrar los archivos .md", () => {
    expect(typeof mdLinks(dir)).toBe(route);
  }) */


 describe("processLinks", () => {
  
  it("deberia ser una función", () => {
    expect(typeof processLinks).toBe("function");
   
  });
  test('Debería retornar un array de obj ', () => {
         
     expect(processLinks(route)).toStrictEqual(array);
        
  });
 
}); 
