import { IMcycle } from './IMcycle';

export interface ICar extends Omit<IMcycle, 'cc'> {
  cv: number,
}

export interface ICarModel {
  findAllCars(): Promise<ICar[] | null>,
  findById(id: number): Promise<ICar | null>,
  AddCar(car: ICar): Promise<ICar>,
  updateCar(newCar: ICar, id: number): Promise<void>,
  deleteCar(id: number): Promise<void>
}
