import { Request, Response, NextFunction } from 'express';
import User from '../shared/schemas/User';

class UserController {
    public async discovery(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const users = await User.find();
            return res.json({ users });
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();