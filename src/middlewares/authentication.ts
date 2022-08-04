import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserInfo } from '../types';

declare module 'express' {
  interface Request {
    user?: any;
  }
}

export const isLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split(" ")[1];
    try {
      let decode = jwt.verify(token, process.env.JWT_KEY!)
      req.user = decode;
      return next();
    } catch (err) {
      return res.status(403).send({ success: false, message: 'Invalid Token' });
    }
  }
  return res.status(403).send({ success: false, message: 'No Token' });
};

export const generateToken = (payload: UserInfo) => {
  const pass = process.env.JWT_KEY!;
  return jwt.sign(payload, pass, { expiresIn: process.env.JWT_EXPIRES_IN! });
};
