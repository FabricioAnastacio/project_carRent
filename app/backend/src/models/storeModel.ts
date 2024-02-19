import CarModel from '../database/models/CarModel';
import McycleModel from '../database/models/McycleModel';
import StoreModel from '../database/models/StoreModel';
import { IModelStore, IStore } from '../Interfaces/IStore';

class ModelStore implements IModelStore {
  private model = StoreModel;

  async findByAll(): Promise<IStore[] | null> {
    const stores = await this.model.findAll({
      include: [
        {
          model: McycleModel,
          as: 'mcycles',
          attributes: ['id', 'model'],
        },
        {
          model: CarModel,
          as: 'cars',
          attributes: ['id', 'model'],
        },
      ],
    });

    return stores;
  }

  async findById(id: number): Promise<IStore | null> {
    const store = await this.model.findOne({ where: { id } });

    return store;
  }

  async createStore(store: IStore): Promise<void> {
    await this.model.create(store);
  }

  async updateStore(newDtaUser: IStore, id: number): Promise<void> {
    await this.model.update(
      { ...newDtaUser },
      { where: { id } },
    );
  }

  async delete(id: number): Promise<void> {
    await this.model.destroy({ where: { id } });
  }
}

export default ModelStore;
