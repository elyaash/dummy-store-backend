import express, {Request, Response } from 'express';
import redisClient from '../shared/RedisClient'

const router = express.Router();

const sendErrorResponse = (res:Response) => {
  res.status(500).json({
    success: false,
    message: 'An error occurred while processing the request',
  });
}
router.get("/delkey",async (req: Request,res: Response) => {
  try {
    const result = await redisClient.del("test");
    res.send("Done")
  } catch(error) {
    sendErrorResponse(res);
  }  
});
router.get("/setkey", async (req: Request,res: Response) => {
    try {
      
        const key = 'myKey';
        const value = 'myValue';
        const expirationTime = 60; 
        const result = await redisClient.setEx("test",expirationTime,"dummy");
        
        res.status(200).json({
          success: true,
          data: result,
        });

      } catch (error) {
        sendErrorResponse(res);
      }
})
router.get("/getkeys", async (req: Request,res: Response) => {
 
    try {
        const result = await redisClient.get("test")
        res.status(200).json(result);
      } catch (error) {
        sendErrorResponse(res);
      }
})


export default router;