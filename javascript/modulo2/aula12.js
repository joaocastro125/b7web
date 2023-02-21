// objeto dentro de função


let pessoa3={
    nome:'joao',
    idade:34,
    sobrenome:'castro',
    nomeCompleto:function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa3.nomeCompleto())