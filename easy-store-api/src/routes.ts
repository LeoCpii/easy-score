import { Router } from 'express';
import HealthController from './controller/health.controller';

const routes = Router();

// HEALTH
routes.get('/health', HealthController.discovery);

export default routes;