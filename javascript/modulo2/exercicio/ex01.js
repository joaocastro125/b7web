// calcule uma porcetagem entre dois numeros 
// exemplo: 25% de 40 é 10 
// formula da porcentagem:(x/y)*100


function calPortentagem(n1,n2){
   return (n2/n1)*100;
}

let x=50;
let y=20;
let pct=calPortentagem(x,y)

console.log(`${pct} % de ${x} é ${y}`)

