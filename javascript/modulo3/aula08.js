// evento de mouse 


function clickMouse(){
    console.log("clicou")
}

function passouMouse(){
    console.log("passou o mouse")

}

function tirouMouse(){
    console.log("tirou o mouse")
}

// verificar qual tela foi apertada 
function soltou(Event){
  console.log(Event.enter)
  console.log(Event)
}
const input=document.querySelector("input")
input.addEventListener("keyup",soltou)