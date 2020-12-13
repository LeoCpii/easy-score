import { Request, Response, NextFunction } from 'express';
import { File } from '../shared/lib/file.lib';
import { Utils } from '../shared/lib/utils.lib';
import App, { IApp } from '../shared/schemas/App';
import User from '../shared/schemas/User';
import { CurrentUser } from './../shared/lib/curren-user.lib';

class UserController {
    public async discovery(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const users = await User.find();
            return res.json({ users });
        } catch (error) {
            next(error);
        }
    }

    public async addApp(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const token = req.header('x-access-token');
        const currentService = new CurrentUser();
        const email = currentService.current(token);

        const utils = new Utils();
        const slug = utils.slug(req.body.name);

        const params: IApp = { ...req.body,  slug };

        const file = new File();

        const data = await file.upload(email, params.slug, params.image, slug);
        
        const app = new App({...params, image: data});

        return res.json(app);
    }
}

export default new UserController();