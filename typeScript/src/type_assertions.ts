// // a ujuda o typesscript ser mais especifico
// let idadeField=document.getElementById('idade')


// // precisamos ver mais especifico onde queremos que o type scripts quer que faça 
// console.log(idadeField.value)

let idadeField=document.getElementById('idade')as HTMLInputElement


 // corrigindo so utilizar o campo que queremos asHTMLinputElement
console.log(idadeField.value)