import { IMcycle, IMcycleModel } from '../Interfaces/IMcycle';
import McycleModel from '../database/models/McycleModel';

class ModelMcycle implements IMcycleModel {
  private model = McycleModel;

  async findAllMcycle(): Promise<IMcycle[] | null> {
    const mcycles = await this.model.findAll();

    return mcycles;
  }

  async findById(id: number): Promise<IMcycle | null> {
    const mcycle = await this.model.findOne({ where: { id } });

    return mcycle;
  }

  async AddMcycle(mcycle: IMcycle): Promise<IMcycle> {
    const newMcycle = await this.model.create(mcycle);

    return newMcycle;
  }

  async updateMcycle(newMcycle: IMcycle, id: number): Promise<void> {
    await this.model.update(
      { ...newMcycle },
      { where: { id } },
    );
  }

  async deleteMcycle(id: number): Promise<void> {
    await this.model.destroy({ where: { id } });
  }
}

export default ModelMcycle;
