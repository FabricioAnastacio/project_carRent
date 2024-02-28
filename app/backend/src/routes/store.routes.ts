import { Router } from 'express';
import Validations from '../middleware/validations';
import StoreController from '../controller/storeController';

const store = new StoreController();

const storeRoute = Router();

storeRoute.get('/', Validations.validateJWT, (req, res) => store.getAllStore(req, res));
storeRoute.get('/:id', Validations.validateJWT, (req, res) => store.getStoreById(req, res));
storeRoute.post('/', Validations.validateJWT, (req, res) => store.addNewStore(req, res));
storeRoute.put('/:id', Validations.validateJWT, (req, res) => store.upDateStore(req, res));
storeRoute.delete('/:id', Validations.validateJWT, (req, res) => store.deleteStore(req, res));

export default storeRoute;
