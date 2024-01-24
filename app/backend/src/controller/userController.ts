import { Request, Response } from 'express';
import UserService from '../services/userService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(
    private serviceUser = new UserService(),
  ) {}

  public async CreateUser(req: Request, res: Response): Promise<Response> {
    const newDtaPeople = req.body;
    const { status, data } = await this.serviceUser.addNewUser(newDtaPeople);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
