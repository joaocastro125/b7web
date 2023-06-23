// manipulação do documento
const input=document.querySelector("input")
const ul=document.querySelector("ul")



function Lista(e){
    // verificando a tecla enter 
    if(e.key==="Enter"){
  
    // criando um elemento 
    const novaLista=document.createElement('li')
    // depois para rederizar na tela 
    novaLista.innerHTML=input.value
    // adcionando a lista 
    ul.appendChild(novaLista)


   //rezetando e retornado branco 
   input.value=''
} 
}
// evento 
input.addEventListener("keyup",Lista)