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

  public async getByIdCar(id: number): Promise<ServiceResponse<ICar>> {
    const car = await this.modelCar.findById(id);

    if (!car) return { status: 'NOT_FOUND', data: { message: 'Error, car not found' } };

    return { status: 'SUCCESSFUL', data: car };
  }
}

export default CarService;
