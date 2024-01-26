import { ICar, ICarModel } from '../Interfaces/ICar';
import CarModel from '../database/models/CarModel';

class ModelCar implements ICarModel {
  private model = CarModel;

  async findAllCars(): Promise<ICar[] | null> {
    const cars = await this.model.findAll();

    return cars;
  }

  async findById(id: string): Promise<ICar | null> {
    const car = await this.model.findOne({ where: { id } });

    return car;
  }

  async AddCar(car: ICar): Promise<void> {
    await this.model.create(car);
  }

  async updateCar(newCar: ICar, id: string): Promise<void> {
    await this.model.update(
      { ...newCar },
      { where: { id } },
    );
  }

  async deleteCar(id: string): Promise<void> {
    await this.model.destroy({ where: { id } });
  }
}

export default ModelCar;
