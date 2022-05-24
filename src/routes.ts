import { Router,Request, Response } from "express";

const router = Router();

router.get('/base', (req: Request, res: Response) => {
  res.json({ message: 'Servidor Ok' })
})

export {router};