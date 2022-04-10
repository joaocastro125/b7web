type Products={
    title:string,
    price:number

}

const data:Products[]=[
    {title:"product x",price :3},
    {title:" product y",price:4},
    {title:" products z",price:10,}
]
// criando um objeto e dentro tem uma função

export const Products={
   getAll:():Products[]=>{
       return data;
   },getFromAffter:(price:number):Products[]=>{
       return data.filter(item=>{
           if(item.price>=price){
               return true;
           }else{
               return false
           }
       })
   }
}