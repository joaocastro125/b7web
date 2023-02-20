// a diferença do interface e type que na interface podemos alterar o type puro não 
 interface user{
    nome:string,
    idade:number
 }

//  type usuario =string |number
function resumo(usuario:user){
    return ` olá ${usuario.nome} e minha idade ${usuario.idade}`
}

resumo({
    nome:'joao',
    idade:33
})