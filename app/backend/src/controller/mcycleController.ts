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
}
