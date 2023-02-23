// interação com javascript


let fruits=["laranjas","uvas","banana"]

// filter vai fazer um filtro no array

let result=fruits.filter((item)=> {
    return item.length>4
})

console.log(result)

// vai retornar true every retorna todo o some vai retornar pelo menos um 

let filtro=fruits.every((item)=>{
    return item.length>1
})

console.log(filtro)


let veficar=fruits.some((item)=>{
    return item.length>4
})

console.log(veficar)

// includes faz uma busca 
let incluir=fruits.includes("pera")

if(fruits.includes("pera")){
    console.log("encontrei a pera")
}else{
    console.log("não há frutas selecionadas em questão")
}

console.log(incluir)




