import ModelMcycle from '../models/mcycleModel';
import { IMcycle, IMcycleModel } from '../Interfaces/IMcycle';
import { ServiceResponse } from '../Interfaces/serviceResponse';

class McycleService {
  constructor(
    private modelMcycle: IMcycleModel = new ModelMcycle(),
  ) {}

  public async getAll(): Promise<ServiceResponse<IMcycle[]>> {
    const mcycle = await this.modelMcycle.findAllMcycle();

    if (!mcycle) return { status: 'NOT_FOUND', data: { message: 'Error, motocycle not found' } };

    return { status: 'SUCCESSFUL', data: mcycle };
  }

  public async getById(id: number): Promise<ServiceResponse<IMcycle>> {
    const mcycle = await this.modelMcycle.findById(id);

    if (!mcycle) return { status: 'NOT_FOUND', data: { message: 'Error, motocycle not found' } };

    return { status: 'SUCCESSFUL', data: mcycle };
  }
}

export default McycleService;
