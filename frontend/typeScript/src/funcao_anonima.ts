let names=['joao','pedro','tiago','cristina',90]
// faz um verificação se é uma string 
names.forEach((nome)=>{
    if(typeof nome === 'string'){
       console.log(nome.toLocaleUpperCase()) 
    }else{
        console.log(nome)
    }
    

})