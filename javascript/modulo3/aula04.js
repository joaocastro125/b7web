// atributo 

// function clicou(){
// const input=document.querySelector("input")
// // O Element.hasAttribute()método retorna um valor booleano indicando se o elemento especificado possui o atributo especificado ou não.
// if(input.hasAttribute("placeholder")){
//     console.log("existe o atributo")
// }else{
//     console.log('não existe')
// }
// // pegando um elemento

// console.log(input.getAttribute('placeholder'))

// }


function clicou(){

    const input=document.querySelector('input')
    const botao=document.querySelector('.botao')
    if(input.getAttribute('type')=='text'){
        input.setAttribute('type','password')
        botao.innerHTML='ocultar senha'
    }else{
    // Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.    
        input.setAttribute('type','text')
        botao.innerHTML='mostrar senha'
    }
   
}