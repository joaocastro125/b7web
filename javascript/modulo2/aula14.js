// dando loop em array 


// let cores=['branco','azul','verde']
// cores.push('preto')
let cores=[
    {nome:'preto',qt:10},
    {nome:'azul',qt:5},
    {nome:'vermelho',qt:15}
]

// for(let n=0;n<cores.length;n++){
// console.log("cores: "+cores[n])


// }

// // pegando a chave

// for(let i in cores){
//     console.log(i+":"+cores[i])
// }

// pegando valores e pega tambem objeto 
// for(let cor of cores){
//     console.log("cores :"+cor)
// }


for(let cor of cores ){
    console.log(`Nome: ${cor.nome} - ${cor.qt}`)
}
 
for(let i in cores){
    cores[i].nome=cores[i].nome.toUpperCase()
    
}

console.log(cores)