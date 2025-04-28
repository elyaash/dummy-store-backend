import express,{ Request, Response } from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next) {
  res.send(JSON.stringify([1,2,3,4]));
});

router.get('/posts/:userId?',(req: Request,res: Response) => {
  const userId = req.params.userId;
  res.set('Content-Type', 'text/plain');
  if (userId) {
    res.send(`User ID: ${userId}`);
  } else {
    res.send('All users');
  }
})
router.get('/:year/:month',(req: Request,res:Response) => {
  res.set('Content-Type', 'text/plain');
  res.send("Request Param <br>Year:"+req.params.year+"<br>Month:"+req.params.month);
})

export default router;

