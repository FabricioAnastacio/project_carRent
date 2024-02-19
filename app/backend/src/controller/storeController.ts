import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import StoreService from '../services/storeService';

export default class StoreController {
  constructor(
    private serviceStore = new StoreService(),
  ) {}

  public async getAllStore(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.serviceStore.getAll();

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
