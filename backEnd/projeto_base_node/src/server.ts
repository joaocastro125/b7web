import express, { Request,Response } from 'express';
// uma dependencia interna do proprio node  
import path from 'path';
import routes from'./router/routes'; 
import mustache from 'mustache-express'



const app=express();
app.use(express.urlencoded({extended:true}));

app.use(routes)

app.engine('mustache', mustache());
app.set('view engine','mustache');
app.set('views',path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname,'../public')));// essa é a raiz do hd e o __dirname é o diretorio onde se encontra
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((request:Request,response:Response)=>{
    response.send("pagina não encontrada")
    
})
app.listen(4000,()=>console.log('servidor rodando'));