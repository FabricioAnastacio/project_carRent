import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import McycleService from '../services/mcycleService';

export default class McycleController {
  constructor(
    private serviceMcycle = new McycleService(),
  ) {}

  public async getAllMcycle(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.serviceMcycle.getAll();

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getMcycle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, data } = await this.serviceMcycle.getById(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async addMcycle(req: Request, res: Response): Promise<Response> {
    const { payload, ...newMcycle } = req.body;

    const { status, data } = await this.serviceMcycle.createNewMcycle(newMcycle, payload.role);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async editMcycle(req: Request, res: Response): Promise<Response> {
    const { payload, ...mcycleInEdit } = req.body;
    const { id } = req.params;

    const { status, data } = await this.serviceMcycle.updateMcycle(
      mcycleInEdit,
      Number(id),
      payload.role,
    );

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
