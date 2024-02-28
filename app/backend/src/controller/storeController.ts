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

  public async getStoreById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, data } = await this.serviceStore.getById(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async addNewStore(req: Request, res: Response): Promise<Response> {
    const { payload, ...newDtaStore } = req.body;

    const { status, data } = await this.serviceStore.addStore(newDtaStore, payload.role);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async upDateStore(req: Request, res: Response): Promise<Response> {
    const { payload, ...newData } = req.body;
    const { id } = req.params;

    const { status, data } = await this.serviceStore.editStore(Number(id), newData, payload.role);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async deleteStore(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { payload } = req.body;

    const { status } = await this.serviceStore.deleteDtaStore(Number(id), payload.role);

    return res.status(mapStatusHTTP(status)).json();
  }
}
