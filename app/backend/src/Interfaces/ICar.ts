import { IMcycle } from './IMcycle';

export interface ICar extends IMcycle {}

export interface ICarModel {
  findAllCars(): Promise<ICar[] | null>,
  findById(id: number): Promise<ICar | null>,
  AddCar(car: ICar): Promise<void>,
  updateCar(newCar: ICar, id: number): Promise<void>,
  deleteCar(id: number): Promise<void>
}
