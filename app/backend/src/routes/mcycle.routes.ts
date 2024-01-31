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

mcycleRoute.get(
  '/:id',
  Validations.validateJWT,
  (req, res) => mcycleController.getMcycle(req, res),
);

mcycleRoute.post(
  '/',
  Validations.validateJWT,
  (req, res) => mcycleController.addMcycle(req, res),
);

mcycleRoute.put(
  '/:id',
  Validations.validateJWT,
  (req, res) => mcycleController.editMcycle(req, res),
);

export default mcycleRoute;
