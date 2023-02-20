// function resumo(usuario:{nome:string,idade:number}){
//    return `O meu é ${usuario.nome} e minha idade${usuario.idade}`
// }

// let u={
//     nome:'joao',
//     idade:33
// }

// console.log(resumo(u))

// fazendo quando o numero for opcional e utilizamos o ponto de interrogação
function resumo(usuario:{nome:string,idade?:number}){
    if(usuario.idade !== undefined){
      return `O meu é ${usuario.nome} e minha idade${usuario.idade}`  
    }else{
        return `O meu é ${usuario.nome}`
    }
    
 }
 
 let u={
     nome:'joao'
 }
 resumo(u)