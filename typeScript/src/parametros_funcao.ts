function firstLetterUpperCase(name:string){
   // O método charAt() retorna o caractere especificado a partir de uma string. toUpperCase() retorna a primeira letra em maiusculo
   let fisrtLetter=name.charAt(0).toUpperCase()
   // O método toString() retorna uma string representando o objeto Number especificado.
   return fisrtLetter+name.substring(1)
}
