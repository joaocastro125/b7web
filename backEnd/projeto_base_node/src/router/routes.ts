import {Request,Response,Router }  from 'express';
import*as homeController from '../controller/homeController'


const router = Router()


router.get("/",homeController.Home)
router.get("/contatos", homeController.Contato)
router.get("/nome",homeController.Name );
router.get("/idade", homeController.Idade);
router.post("/idade_resultado",homeController.idadeAction)
router.get("/noticia/:slug", homeController.Noticia);
router.get("/voo/:origem-:destino", homeController.Destino);

export default router;

