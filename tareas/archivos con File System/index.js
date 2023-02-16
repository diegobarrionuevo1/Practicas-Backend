const fs = require("fs")
class Contenedor{
    constructor(path){
        this.nombre =  path;
    }
    async save(objet){ 
                const  write = async (data)=>{
                    let jsonData = JSON.parse(data);
                    objet.id = jsonData.length
                    jsonData.push(objet);
                    await fs.promises.writeFile(this.nombre , JSON.stringify(jsonData,null,2) ,(error)=>{
                        if (error) throw error
                        console.log("producto añadido")
                    })
                }
                try {
                    await fs.promises.access(this.nombre)
                    let data = await fs.promises.readFile(this.nombre, "utf8");
                    write(data)
                } catch (error) {
                    let jsonData = [objet];
                    objet.id = jsonData.length - 1
                    await fs.promises.writeFile(this.nombre, JSON.stringify(jsonData,null,2));
                    console.log(error + "\n Se creo un nuevo archivo")
                }
            }
    async getById(number){
            try {
                await fs.promises.access(this.nombre)
                let data = await fs.promises.readFile(this.nombre, "utf8");
                let parce = JSON.parse(data)
                if (parce.length > number && number >0){
                    console.log(parce[number])
                }
                else{
                    console.log ("El archivo que buscas no existe")
                }
            } catch (error) {
                console.log(error + "\n El archivo al que intentas acceder no existe, utiliza el metodo save() agregando un objeto para crear uno nuevo")
            }
    }
    async getAll(){
        try {
            await fs.promises.access(this.nombre)
            let data = await fs.promises.readFile(this.nombre, "utf8");
            let parce = JSON.parse(data)
            console.log(parce)
        } catch (error) {
            console.log(error + "\n El archivo al que intentas acceder no existe, utiliza el metodo save() agregando un objeto para crear uno nuevo")
        }
    }
    async deleteById(number){
        try {
            await fs.promises.access(this.nombre)
            let data = await fs.promises.readFile(this.nombre, "utf8");
            let parce = JSON.parse(data)
            if (parce.length > number && number >0){
                parce.splice(number,1)
                parce.forEach((element,index)=>{
                    element.id = index
                })
                await fs.promises.writeFile(this.nombre , JSON.stringify(parce,null,2) ,(error)=>{
                    if (error) throw error
                })
            }
            else{
                console.log ("El producto que buscas no existe")
            }
        } catch (error) {
            console.log(error + "\n El archivo al que intentas acceder no existe, utiliza el metodo save() agregando un objeto para crear uno nuevo")
        }
    }
    async deleteAll(){
        try {
            await fs.promises.access(this.nombre)
            await fs.promises.writeFile(this.nombre , "[]" ,(error)=>{
                if (error) throw error
                console.log("producto añadido")
            })
        } catch (error) {
            console.log(error + "\n El archivo al que intentas acceder no existe, utiliza el metodo save() agregando un objeto para crear uno nuevo")
        }
    }
}
let contenedor = new Contenedor("Productos.json")

contenedor.save({
    title: "arroz",
    price: 123,
    thumbnail: "balñbalbalbal"
})



contenedor.deleteAll()