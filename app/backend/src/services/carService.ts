import ModelCar from '../models/carModel';
import { ICar, ICarModel } from '../Interfaces/ICar';
import { ServiceResponse } from '../Interfaces/serviceResponse';
import { validateDataCar } from './validation/validateInput';

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

  public async addCar(car: ICar, role: string): Promise<ServiceResponse<ICar>> {
    if (role !== 'admin') {
      return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
    }

    const error = validateDataCar(car);
    if (error) return { status: error.status, data: error.data };

    const newCar = await this.modelCar.AddCar(car);

    return { status: 'SUCCESSFUL', data: newCar };
  }

  public async upCar(car: ICar, id: number, role: string): Promise<ServiceResponse<ICar>> {
    if (role !== 'admin') {
      return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
    }

    await this.modelCar.updateCar(car, id);

    const carUpdated = await this.modelCar.findById(id) as ICar;

    return { status: 'SUCCESSFUL', data: carUpdated };
  }
}

export default CarService;
