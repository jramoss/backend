import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export const schema = z.object({
  body: z.object({
    title: z.string().min(3, 'O campo nome deve conter o minimo de 3 caracteres'),
    published: z.boolean(),
    authorId: z.string().uuid(),
  }),
});

const postValidate = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parse({
      body: req.body,
      params: req.params,
    });
    return next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ name: error.name, message: { campos: error.message[0] } });
    } else {
      console.log('Unexpected error', error);
    }
  }
};

export default postValidate;
