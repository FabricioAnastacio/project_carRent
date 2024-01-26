import ModelCar from '../models/carModel';
import { ICar, ICarModel } from '../Interfaces/ICar';
import { ServiceResponse } from '../Interfaces/serviceResponse';

class CarService {
  constructor(
    private modelCar: ICarModel = new ModelCar(),
  ) {}

  public async getAllCars(): Promise<ServiceResponse<ICar[]>> {
    const cars = await this.modelCar.findAllCars();

    if (!cars) return { status: 'NOT_FOUND', data: { message: 'Error, cars not found' } };

    return { status: 'SUCCESSFUL', data: cars };
  }
}

export default CarService;
