import { Router } from 'express';
import Validations from '../middleware/validations';
import CarController from '../controller/carController';

const carController = new CarController();

const carRouter = Router();

carRouter.get('/', Validations.validateJWT, (req, res) => carController.getCars(req, res));
carRouter.get('/:id', Validations.validateJWT, (req, res) => carController.getCarById(req, res));

export default carRouter;
