import { Router } from 'express';
import Validations from '../middleware/validations';
import McycleController from '../controller/mcycleController';

const mcycleController = new McycleController();

const mcycleRoute = Router();

mcycleRoute.get(
  '/',
  Validations.validateJWT,
  (req, res) => mcycleController.getAllMcycle(req, res),
);

export default mcycleRoute;
