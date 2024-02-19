import { Router } from 'express';
import Validations from '../middleware/validations';
import StoreController from '../controller/storeController';

const store = new StoreController();

const storeRoute = Router();

storeRoute.get('/', Validations.validateJWT, (req, res) => store.getAllStore(req, res));

export default storeRoute;
