import { Request, Response, NextFunction } from 'express';
import { Database } from '../database';


class HealthController {
    public async discovery(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const database = new Database();

        const data = {
            database: database.isHealthConnetion()
        }

        return res.json(data);
    }
}

export default new HealthController();