// calcule o preço de um imovel 
// -m2=3000
// se tiver 1 quartos ,m2 é 1x 
// se tiver 2 quartos , m2 é 1.2x
// se tiver 3 quartos , m2 é 1.5x
// USO DA FUNCAO


function calcularImovel(metragem , quartos){
    let m2=3000;
    let preco=metragem*m2;

     switch(quartos){
        case 1:
            preco=metragem*m2;
            break;
        case 2:
            preco=metragem*(m2*1.2);
            break;
        case 3:
            preco=metragem*(m2*1.5);
            break;
        default:
            console.log("essa opcao não existe");

     }
     return preco;


     
}


let metragem=123
let quarto=3
let preco=calcularImovel(metragem,quarto);
console.log(`a casa custa R$=${preco}`)