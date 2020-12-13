import { Router } from 'express';
import HealthController from './controller/health.controller';
import SecurityController from './controller/security.controller';
import UserController from './controller/user.controller';
import Auth from './auth/auth.service';

const routes = Router();

// HEALTH
routes.get('/health', HealthController.discovery);

// SECURITY
routes.post('/security/signIn', SecurityController.login);
routes.post('/security/create-user', SecurityController.createUser);

// USER
routes.get('/users', UserController.discovery);
routes.post('/user/add-app', Auth.autorize, UserController.addApp);

export default routes;