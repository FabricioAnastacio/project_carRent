import ModelMcycle from '../models/mcycleModel';
import { IMcycle, IMcycleModel } from '../Interfaces/IMcycle';
import { ServiceResponse } from '../Interfaces/serviceResponse';
import { validateDataVehicle, verifyRoleUser } from './validation/validateInput';

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

  public async createNewMcycle(mcycle: IMcycle, role: string): Promise<ServiceResponse<IMcycle>> {
    const validateRole = verifyRoleUser(role);
    if (validateRole) return { status: validateRole.status, data: validateRole.data };

    const error = validateDataVehicle(mcycle);
    if (error) return { status: error.status, data: error.data };

    const mcycles = (await this.getAll()).data as IMcycle[];

    const addMcycle = {
      id: mcycles[mcycles.length - 1].id! + 1,
      ...mcycle,
    };

    const newMcycle = await this.modelMcycle.AddMcycle(addMcycle);

    return { status: 'CREATED', data: newMcycle };
  }

  public async updateMcycle(
    mcycleInEdit: IMcycle,
    id: number,
    role: string,
  ): Promise<ServiceResponse<IMcycle>> {
    const validateRole = verifyRoleUser(role);
    if (validateRole) return { status: validateRole.status, data: validateRole.data };

    await this.modelMcycle.updateMcycle(mcycleInEdit, id);

    const newMcycle = await this.modelMcycle.findById(id) as IMcycle;

    return { status: 'SUCCESSFUL', data: newMcycle };
  }
}

export default McycleService;
