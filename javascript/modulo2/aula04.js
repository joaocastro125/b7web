// condicional em funcao 

function maiorDeIdade(idade){
    if(idade>=18){
        return true;
    }else{
        return false;
    }
}

let idade=14;

let verificacaoIdade=maiorDeIdade(idade);

console.log(verificacaoIdade)