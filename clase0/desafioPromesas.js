const fs = require("fs")

const leer = async (path)=>{
    try {
        let data = await fs.promises.readFile(path,"utf-8")
        console.log(data)
        let objet = JSON.parse(data)

        objet.contenidoObjeto.author = "Coderhouse"
        await fs.promises.writeFile("package.json.coder", JSON.stringify(objet,null,2),(error)=>{
            if (error) throw "error"
            console.log("hecho")
        })
        
    } catch (error) {
        console.log(error)
    }
    
}

leer("info.json")
