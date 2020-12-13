import { Request, Response, NextFunction } from 'express';
import { File } from '../shared/lib/file.lib';
import { Utils } from '../shared/lib/utils.lib';
import App, { IApp } from '../shared/schemas/App';
import User, { UserHelper } from '../shared/schemas/User';
import { CurrentUser } from './../shared/lib/curren-user.lib';
import { HandlerError } from '../shared/lib/error.lib';

class UserController {
    public async discovery(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const token = req.header('x-access-token');
            const currentService = new CurrentUser();
            const email = currentService.current(token);

            const user = await User.find({ email }).populate(['apps']);
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }

    public async addApp(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const token = req.header('x-access-token');
            const currentService = new CurrentUser();
            const email = currentService.current(token);
            const utils = new Utils();
            const slug = utils.slug(req.body.name);

            const user = await User.findOne({ email }).populate(['apps']);

            if (!user) { throw new HandlerError(422, 'Usuário não encontrado'); }

            const alredyExits = user.apps.some(app => app.slug === slug );

            if (alredyExits) { throw new HandlerError(428, 'Já existe um app cadastro com este nome'); }

            const params: IApp = { ...req.body, slug };

            const file = new File();
            const data = await file.upload(email, params.slug, params.image, slug);
            const app = new App({ ...params, image: data });

            const errors = app.validateSync();

            if (errors) { throw new HandlerError(422, errors); }

            await app.save();

            const helper = new UserHelper();

            await helper.associateAppToUser(user._id, { apps: app });

            return res.json({ message: 'App criado com sucesso' });
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();