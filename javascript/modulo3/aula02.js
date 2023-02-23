// elemento de click
function clicou(){
    alert("clicou em mim ")
}

// outro exemplo de click

let botao=document.querySelector(".botao").addEventListener('click',()=>{
    clicou()
})

