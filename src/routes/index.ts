import express, { Request, Response, NextFunction } from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res:Response, next: NextFunction) {
  //res.render('index', { title: 'Express' });
  res.send("This is homepage ");
});

export default router;
