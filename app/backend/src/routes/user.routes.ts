import { Router } from 'express';
import Validations from '../middleware/validations';
import UserController from '../controller/userController';

const userController = new UserController();

const userRouter = Router();

userRouter.post('/', (req, res) => userController.createUser(req, res));
userRouter.get('/me', Validations.validateJWT, (req, res) => userController.getMeData(req, res));
userRouter.put('/', Validations.validateJWT, (req, res) => userController.updateUser(req, res));
userRouter.delete('/me', Validations.validateJWT, (req, res) => userController.delete(req, res));

export default userRouter;
