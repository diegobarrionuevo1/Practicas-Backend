const fin = ()=> console.log("termine")

const mostrarLetras = (string, funcion)=>{
    let letras = string
    let i = 0
    const intervalo= setInterval(() => {
                        console.log(letras[i])
                        i++
                        if (i == letras.length){
                            clearInterval(intervalo)
                            funcion() 
                        }
                    }, 500);
}
mostrarLetras("electroencefalograma", fin)
