// ordenação de array 

let fruits=["laranjas","uvas","banana"]

//ordenar a ordem 
console.log(fruits.sort())

//ordenar a reverter a ordem 
console.log(fruits.reverse())


let cars=[
    {brand:"Fiat",year:2022},
    {brand:"Bmw",year:2018},
    {brand:"Ferrari",year:2020}
]

// ordendando qual é o menor para o maior 
cars.sort((a,b)=>{
  if(a.year>b.year){
    return 1
  }else if(a.year<b.year){
    return -1
  }else{
    return 0
  }
})

console.log(cars)