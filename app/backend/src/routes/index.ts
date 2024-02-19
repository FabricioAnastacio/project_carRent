import { Router } from 'express';
import loginRouter from './login.routes';
import userRouter from './user.routes';
import carRouter from './car.routes';
import mcycleRoute from './mcycle.routes';
import storeRoute from './store.routes';

const router = Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/car', carRouter);
router.use('/mcycle', mcycleRoute);
router.use('/store', storeRoute);

export default router;
