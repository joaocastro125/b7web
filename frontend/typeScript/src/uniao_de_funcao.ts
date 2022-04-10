// esse função faz com que podemos verificar se é um ou outro ex: string|number

function mostrarIdade(idade:string|number){
    if(typeof idade==='string'){
       console.log(idade.toUpperCase()) 
    }else{
        console.log(idade)
    }
    
}

console.log(90)
console.log('90')
