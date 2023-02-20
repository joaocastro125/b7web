// funcao com parametro 

function soma(x,y){
    let soma=x+y;
    return soma;
}

function nomeCompleto(nome,sobreNome){
    console.log(` meu nome :${nome} e o sobrenome é ${sobreNome}`);
}

let result=soma(10,20);

console.log(result);

nomeCompleto('joao','castro');