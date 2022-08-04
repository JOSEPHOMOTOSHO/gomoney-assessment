import { Request, Response } from 'express';
import { parseValidationErrors, generateToken } from '../../middlewares';
import { User } from '../../models';
import { comparePassword } from '../../utils';
import { bodySchema } from './schemas';

declare module 'express-session' {
  export interface SessionData {
    email: { [key: string]: any };
    password: { [key: string]: any }
  }
}

export const login = async (req: Request, res: Response) => {
  const { body } = req;
  const { error, value } = bodySchema.validate(body);

  if (error) {
    return res.status(400).json({
      error: {
        success: false,
        message: parseValidationErrors(error),
      },
    });
  }

  const { email, password } = value;
  try {
    const user = await User.findOne({ email });
    const sess = req.session;
    sess.email = email
    sess.password = password

    if (!user) {
      return res.status(401).json({ message: 'User Not found' });
    }
    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid login details' });
    }
    return res.status(200).json({
      data: { user, token: generateToken(user.toObject()) },
    });
  } catch (err: any) {
    return res.status(500).json({ error: { message: err.message } });
  }
};
