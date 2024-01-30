import ModelCar from '../models/carModel';
import { ICar, ICarModel } from '../Interfaces/ICar';
import { ServiceResponse } from '../Interfaces/serviceResponse';
import { validateDataCar, verifyRoleUser } from './validation/validateInput';

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
    const validateRole = verifyRoleUser(role);
    if (validateRole) return { status: validateRole.status, data: validateRole.data };

    const error = validateDataCar(car);
    if (error) return { status: error.status, data: error.data };

    const cars = (await this.getAllCars()).data as ICar[];

    const addCar = {
      id: cars[cars.length - 1].id! + 1,
      ...car,
    };

    const newCar = await this.modelCar.AddCar(addCar);

    return { status: 'SUCCESSFUL', data: newCar };
  }

  public async upCar(car: ICar, id: number, role: string): Promise<ServiceResponse<ICar>> {
    const validateRole = verifyRoleUser(role);
    if (validateRole) return { status: validateRole.status, data: validateRole.data };

    await this.modelCar.updateCar(car, id);

    const carUpdated = await this.modelCar.findById(id) as ICar;

    return { status: 'SUCCESSFUL', data: carUpdated };
  }

  public async destroyCar(id: number, role: string): Promise<ServiceResponse<void>> {
    const validateRole = verifyRoleUser(role);
    if (validateRole) return { status: validateRole.status, data: validateRole.data };

    await this.modelCar.deleteCar(id);

    return { status: 'DELETED', data: { message: '' } };
  }
}

export default CarService;
