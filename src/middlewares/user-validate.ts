import { NextFunction, Request, Response } from 'express';
import * as z from 'zod';

export const schema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'O campo nome e obrigatorio' })
      .min(3, { message: 'O campo nome deve conter o minimo de 3 caracteres' })
      .trim(),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .trim()
      .min(1, 'Email cannot be empty')
      .email('Invalid email'),
    role: z.enum(['ADMIN', 'USER', 'MANAGER']),
    dataNasc: z
      .string({
        required_error: 'Data is required',
        invalid_type_error: 'Name must be a string',
      }).datetime({ precision: 1, offset: true }),
  }),
});

const Uservalidate = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (error) {
    let err = error;
    if (err instanceof z.ZodError) {
      err = err?.issues.map((e: { path: unknown[]; message: unknown; }) => ({ path: e.path[0], message: e.message }));
      return res.status(500).json({
        err,
      });
    } else {
      console.log('Unexpected error', err);
      return { status: 'failed', error: err };
    }
  }
};

export default Uservalidate;
