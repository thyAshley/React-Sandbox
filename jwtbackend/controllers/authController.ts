import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import User from '../models/User';

const handleErrors = (err: Error) => {
  console.log(err.message);
};

const createToken = (id: string) => {
  return jwt.sign({ id }, 'the secret signature', { expiresIn: 3600 * 24 });
};

export const getSignup = (req: Request, res: Response) => {
  res.render('signup');
};
export const postSignup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: 3600 * 24 });
    res.status(201).json({ user: user._id });
  } catch (error) {
    handleErrors(error);
    res.status(400).send('user not created');
  }
};
export const getLogin = (req: Request, res: Response) => {
  res.render('login');
};
export const postLogin = async (req: Request, res: Response) => {
  res.send('login');
};
