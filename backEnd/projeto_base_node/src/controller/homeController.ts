import {Request,Response} from 'express';
import {Products} from '../modelrs/Products'




export const Home=(request: Request, response: Response) => {
    let age: number = 90;
    let maiorIdade: boolean = false;
    if (age > 90) {
      maiorIdade = true
    }
   let list= Products.getAll()
   let expensiveList=Products.getFromAffter(9)
    return response.render('pages/home', {
      name: 'joao',
      falseOuTrue: false,
      maiorIdade,
      produtos: [
        { title: 'cola-cola', price: 10 }
      ],
      frasesDodia: [
        'frases qualquer',
        'outra frases qualquer',
        'nada para fazer'
      ],
      listagem: [
        'nao a messagem hoje'
      ],
      list,
      expensiveList
    })
}

export const Contato=(request: Request, response: Response)=>{
    response.render('pages/contato')

}
export const Name=(request: Request, response: Response) => {
    let { nome } = request.query;
    console.log("status da query", request.query)
    return response.render('pages/nome', {
      nome
    });
}
export const Idade=(request: Request, response: Response) => {

    return response.render('pages/idade', {
      
  
    });
}
export const idadeAction=(request: Request, response: Response)=>{
    let mostrarIdade: boolean = false;
    let idade: number = 0;
    if (request.body.ano) {
      let AnoNascimento: number = parseInt(request.body.ano as string)
      // O método getFullYear() retorna o ano da data especificada de acordo com a hora local.
      let AnoAtual: number = new Date().getFullYear();
      idade= AnoAtual - AnoNascimento;
      mostrarIdade = true
  
  
    }
    return response.render('pages/idade', {
      idade,
      mostrarIdade
  
    });
}
export const Noticia=(request: Request, response: Response) => {
    let { slug } = request.params;
    return response.render('pages/noticia',{
        slug:`noticia do dia ${slug}`
    });
  }

  export const Destino =(request: Request, response: Response) => {
    let { origem, destino } = request.params;
    return response.send(`procurando voo de  ${origem} ate ${destino}`);
  }
