import { Request, Response } from 'express';
import CarService from '../services/carService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class CarController {
  constructor(
    private serviceCar = new CarService(),
  ) {}

  public async getCars(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.serviceCar.getAllCars();

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
