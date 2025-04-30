import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

/* GET health page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.json({ status: "OK" });
});

export default router;
