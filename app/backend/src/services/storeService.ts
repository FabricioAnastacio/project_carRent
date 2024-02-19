import { ServiceResponse } from '../Interfaces/serviceResponse';
import { IModelStore, IStore } from '../Interfaces/IStore';
import ModelStore from '../models/storeModel';

class StoreService {
  constructor(
    private modelStore: IModelStore = new ModelStore(),
  ) {}

  public async getAll(): Promise<ServiceResponse<IStore[]>> {
    const stores = await this.modelStore.findByAll();

    if (!stores) return { status: 'NOT_FOUND', data: { message: 'Error, store not found' } };

    return { status: 'SUCCESSFUL', data: stores };
  }
}

export default StoreService;
