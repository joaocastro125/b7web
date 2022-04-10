"use strict";
// let Name:string='joao castro'
// let year=90;
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const matematica = __importStar(require("./matematica"));
const validator_1 = __importDefault(require("validator"));
let n1 = 10;
let n2 = 20;
console.log(`SOMA ${matematica.soma(n1, n2)}`);
console.log(`SUB ${matematica.sub(n1, n2)}`);
console.log(`MULT ${matematica.mult(n1, n2)}`);
console.log(`DIV ${matematica.div(n1, n2)}`);
console.log(validator_1.default.isEmail('joaocastro_125@hotmail.com'));
let name = 'joao';
if (validator_1.default.isLowercase(name)) {
    console.log(`A string todo em ${name} minusculo`);
}
else {
    console.log(`A string todo em ${name} maiusculo`);
}
