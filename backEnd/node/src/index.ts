// let Name:string='joao castro'
// let year=90;

// console.log(`meu nome é ${Name} e minha idade ${year}`)
// o import e export
// const matematica=require('./matematica')
// let n1:number=10;
// let n2:number=20;

// console.log(`SOMA ${matematica.soma(n1,n2)}`);
// console.log(`SUB ${matematica.sub(n1,n2)}`);
// console.log(`MULT ${matematica.mult(n1,n2)}`);
// console.log(`DIV ${matematica.div(n1,n2)}`);

// nova versão do import e export 
// obs para pega todos utilizamos * as e para individual utilizamos o {}

import *as matematica from './matematica';
import validator from 'validator';
let n1:number=10;
let n2:number=20;

console.log(`SOMA ${matematica.soma(n1,n2)}`);
console.log(`SUB ${matematica.sub(n1,n2)}`);
console.log(`MULT ${matematica.mult(n1,n2)}`);
console.log(`DIV ${matematica.div(n1,n2)}`);

console.log(validator.isEmail('joaocastro_125@hotmail.com'));

let name:string='joao';
if(validator.isLowercase(name)){
   console.log(`A string todo em ${name} minusculo`);
}else{
    console.log(`A string todo em ${name} maiusculo`);
}


