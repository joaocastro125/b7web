// funcao dentro de uma funçao


function addSquare(a,b ){
    function square(x){
        return x*x;
    }
    let sqrA=square(a);
    let sqrB=square(b);
    return sqrA+sqrB;

}




console.log(addSquare(2,3));

