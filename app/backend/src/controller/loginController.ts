import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import UserService from '../services/userService';

export default class LoginController {
  constructor(
    private serviceUser = new UserService(),
  ) {}

  public async loginUser(req: Request, res: Response): Promise<Response> {
    const people = req.body;
    const { status, data } = await this.serviceUser.validateUser(people);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
