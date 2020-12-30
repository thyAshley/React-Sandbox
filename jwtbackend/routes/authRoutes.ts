import express from 'express';

const AuthRouter = express.Router();

import * as AuthController from '../controllers/authController';

AuthRouter.get('/signup', AuthController.getSignup);
AuthRouter.post('/signup', AuthController.postSignup);
AuthRouter.get('/login', AuthController.getLogin);
AuthRouter.post('/login', AuthController.postLogin);

export default AuthRouter;
