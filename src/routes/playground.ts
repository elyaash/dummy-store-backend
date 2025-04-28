import express, { Request, Response } from "express";

const router = express.Router();

router.get("/log/:message?", (req: Request, res: Response) => {
  if (req.params.message) console.log(req.params.message);
  res.set('Content-Type', 'text/plain');
  res.status(200).send("Logged the message:" + req.params.message);
});
router.get("/error/:message?", (req: Request, res: Response) => {
  if (req.params.message) console.error(req.params.message);
  res.set('Content-Type', 'text/plain');
  res.status(200).send("Logged the error message:" + req.params.message);
});

router.get("/pug1", (req: Request, res: Response) => {
  res.render("example", { title: "Pug Template" });
});

router.get("/cookie", (req: Request, res: Response) => {
  let data = {
    cookie: req.cookies,
    signedCookie: req.signedCookies,
  };
  res.cookie("token", "some_secret_value", {
    maxAge: 900000, // 15 minutes
    httpOnly: true,
    secure: true,
    domain: "localhost",
  });
  res.cookie("username", "John Doe");
  res.status(200).json(data);
});

router.get("/cookie-session", (req: Request, res: Response) => {
  //@ts-ignore//
  req.session.counter = (req.session.counter ?? 0) + 1;
  //@ts-ignore//
  res.status(200).json(req.session.counter);
});
export default router;
