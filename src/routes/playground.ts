import express, {Request, Response} from 'express'

let router = express.Router();

router.get('/pug1',(req: Request,res: Response) => {
    res.render('example',{title: 'Pug Template'});
})

export default router;