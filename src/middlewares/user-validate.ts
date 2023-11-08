import { $Enums } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import yup from '../config/yup';

export const schema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .min(3, 'O campo nome deve conter o minimo de 3 caracteres')
      .required('O campo nome e obrigatorio'),
    email: yup.string().email('Infome um e-mail invalido para o campo E-mail:').required(),
    role: yup
      .mixed<$Enums.Role>()
      .oneOf(
        Object.values($Enums.Role),
        'O campo role deve ser preenchido com um dos seguintes valores: USER | ADMIN | MANAGER',
      )
      .required(),
    dataNasc: yup.date(),
  }),
  params: yup.object({
    id: yup.string().uuid('id invalido'),
  }),
});

const Uservalidate = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        type: err.name,
        message: err.message,
      });
    } else {
      console.log('Unexpected error', err);
    }
  }
};

export default Uservalidate;
