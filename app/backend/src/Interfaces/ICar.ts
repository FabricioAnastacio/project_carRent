import { IMcycle } from './IMcycle';

export interface ICar extends IMcycle {}

export interface ICarModel {
  findAllCars(): Promise<ICar[] | null>,
  findById(id: string): Promise<ICar | null>,
  AddCar(car: ICar): Promise<void>,
  updateCar(newCar: ICar, id: string): Promise<void>,
  deleteCar(id: string): Promise<void>
}
