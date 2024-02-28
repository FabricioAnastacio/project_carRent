import { Request, Response } from 'express';
import UserService from '../services/userService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(
    private serviceUser = new UserService(),
  ) {}

  public async createUser(req: Request, res: Response): Promise<Response> {
    const newDtaPeople = req.body;
    const { status, data } = await this.serviceUser.addNewUser(newDtaPeople);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getMeData(req: Request, res: Response): Promise<Response> {
    const { payload } = req.body;

    const { status, data } = await this.serviceUser.getAllDataUser(payload.email);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async updateUser(req: Request, res: Response): Promise<Response> {
    const { payload, ...dataUpdate } = req.body;
    const { status, data } = await this.serviceUser.updateDataUser(dataUpdate, payload.email);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async editMoneyUser(req: Request, res: Response): Promise<Response> {
    const { payload, ...dataEdit } = req.body;
    const { status, data } = await this.serviceUser.updateBalance(dataEdit, payload.email);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { payload } = req.body;
    const { status } = await this.serviceUser.deleteUser(payload.email);

    return res.status(mapStatusHTTP(status)).json();
  }
}
