const fileSistem = require("fs")


/*Existen varias funciones en JavaScript que realizan operaciones de archivos y pueden recibir un callback como argumento. Algunos ejemplos son:

fs.readFile(file, callback): lee el contenido de un archivo y lo pasa al callback como una cadena o un buffer, dependiendo de la opción de codificación especificada.

fs.writeFile(file, data, callback): escribe los datos especificados en un archivo, creando el archivo si no existe.

fs.appendFile(file, data, callback): agrega los datos especificados al final de un archivo, creando el archivo si no existe.

fs.unlink(path, callback): Elimina el archivo especificado.

fs.mkdir(path[, mode], callback): Crea un directorio.

Es importante destacar que existen versiones síncronas de las funciones mencionadas como fs.readFileSync o fs.appendFileSync que realizan la misma tarea pero detienen la ejecución del programa hasta que se completa la operación.

La biblioteca fs es nativa en NodeJs y se encarga de la manipulación de archivos, son muchas funciones más disponibles que no mencioné pero son similares a las mencionadas. */





//........Crear y leer un archivo de forma sincronica
/* 
try{
    fileSistem.writeFileSync("holass.txt","hola mundo")
    let leer = fileSistem.readFileSync("holass.txt","utf-8")
    console.log(leer)
}catch(error){
    console.log(error)
} */

//...............MODIFICAR UN ARCHIVO YA EXISTENTE DE FORMA SINCRONICA

try{
    fileSistem.appendFileSync("holass.txt","Segundo hola mundo",(err) => {
        if (err) throw err;//ESTO DETECTA EL ERRROR
        console.log('The "data to append" was appended to file!');
    });

}catch(error){//CATCH LO PROCESA
    console.log(error)
}


//...................ELIMINAR UN ARCHIVO YA EXISTENTE DE FORMA SINCRONICA

/* fileSistem.unlinkSync("holass.txt") */
//...............MODIFICAR UN ARCHIVO YA EXISTENTE
/* 
try{
    fileSistem.appendFile("holass.txt","Segundo hola mundo",(err) => {
        if (err) throw err;//ESTO DETECTA EL ERRROR
        console.log('The "data to append" was appended to file!');
    });

}catch(error){//CATCH LO PROCESA
    console.log(error)
}
let leer = fileSistem.readFileSync("holass.txt","utf-8")
console.log(leer)
 */
//.................CREAR Y LEER UN ARCHIVO con promesas

/* fileSistem.promises.writeFile("hola.txt","hola mundo").then(result=>{
    console.log("Hecho")
}).catch(console.log(error)) 

fileSistem.promises.readFile("hola.txt","utf-8").then(data=>{
    console.log(data)
}).catch(error=>console.log(error)) */

//......... Promesa asincronica

/* let readFile = async path =>{
    try {
        let data = await fileSistem.promises.readFile(path,"utf-8")//el await es para que espere a que resuelva la promesa
        console.log(data)
    } catch (error) {
        console.log(error)
    }
} */

