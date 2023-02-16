const fs = require("fs")

try {
    let date = new Date().toLocaleString()
    fs.writeFileSync("fyh.txt", date, (error)=>{
        if (error) throw error
    })
    let read =fs.readFileSync("fyh.txt","utf-8")
    console.log(read)
} catch (error) {
    console.log("que culiaaaaaaaaaaaaaaaaa" + error)
}