import { Request, Response } from 'express';
import User from '../models/User';

export const getSignup = (req: Request, res: Response) => {
  res.render('signup');
};
export const postSignup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).send('user not created');
  }
};
export const getLogin = (req: Request, res: Response) => {
  res.render('login');
};
export const postLogin = async (req: Request, res: Response) => {
  res.send('login');
};
