// MANIPULAÇÃO DE ELEMENTOS

function clicou(){
   const teste= document.querySelector('#teste')
//    // mostra os filhos do elemento
//     console.log(teste.children)
//     // acessando o primeiro elemento do filho 

//     console.log(teste.children[0])

    // fazendo alteração 

    const ul=teste.querySelector("ul")
    // ul.innerHTML+="<li>item alterado</li>";
    // utilizando a concatenação 

    // quando utilizamos o outHTML ele faz mostra o elemento externo no html

    // outro para adcionar 

    // ul.children[4].append("outro adcionado"+"\n")

   // ADD UM ELEMENTO  

   let new1=document.createElement("li");
   new1.innerText="item adcionado"

   ul.appendChild(new1)

//    O Element.after()método insere um conjunto de Nodeobjetos string na lista de filhos do Elementpai de , logo após o Element. Objetos string são inseridos como Textnós equivalentes. ou seja vai adcionar depois elemento 

   ul.after("<button>")
   // antes 
   ul.before("tipo")
}

