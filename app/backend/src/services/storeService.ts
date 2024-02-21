import { ServiceResponse } from '../Interfaces/serviceResponse';
import { IModelStore, IStore } from '../Interfaces/IStore';
import ModelStore from '../models/storeModel';
import { valudateDataConcessionaire, verifyRoleUser } from './validation/validateInput';

class StoreService {
  constructor(
    private modelStore: IModelStore = new ModelStore(),
  ) {}

  public async getAll(): Promise<ServiceResponse<IStore[]>> {
    const stores = await this.modelStore.findByAll();

    if (!stores) return { status: 'NOT_FOUND', data: { message: 'Error, store not found' } };

    return { status: 'SUCCESSFUL', data: stores };
  }

  public async getById(id: number): Promise<ServiceResponse<IStore>> {
    const store = await this.modelStore.findById(id);

    if (!store) return { status: 'NOT_FOUND', data: { message: 'Error, store not found' } };

    return { status: 'SUCCESSFUL', data: store };
  }

  public async addStore(concessionaire: IStore, role: string): Promise<ServiceResponse<IStore>> {
    const validateRole = verifyRoleUser(role);
    if (validateRole) return { status: validateRole.status, data: validateRole.data };

    const error = valudateDataConcessionaire(concessionaire);
    if (error) return { status: error.status, data: error.data };

    const allStore = (await this.getAll()).data as IStore[];

    const isStore = allStore.find((store) => store.name === concessionaire.name);
    if (isStore) return { status: 'CONFLICT', data: { message: 'concessionaire already exist' } };

    const newDtaConcessionaire = {
      id: allStore[allStore.length - 1].id! + 1,
      ...concessionaire,
    };

    const addNewStore = await this.modelStore.createStore(newDtaConcessionaire);

    return { status: 'SUCCESSFUL', data: addNewStore };
  }
}

export default StoreService;
