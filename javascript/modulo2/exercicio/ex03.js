// crie uma funcao usuario e senha 
// usurio correto:pedro
// senha :123


function validador(usuario,senha){
  if(usuario==="joao" && senha==="123" ){
     return true;
  }else{
    return false;
  }
}

let usuario="joao";
let senha="123";
let validado=validador(usuario,senha);
if(validado){
    console.log("acesso concedido")
}else{
    console.log("acesso negado")
}
