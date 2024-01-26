import { Router } from 'express';
import loginRouter from './login.routes';
import userRouter from './user.routes';
import carRouter from './car.routes';

const router = Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/car', carRouter);

export default router;
