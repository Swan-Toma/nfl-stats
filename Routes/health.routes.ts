import express from 'express';
import { healthResource } from '../Controllers/health.controllers';

const healthRouter = express.Router();

healthRouter.get('/', healthResource);

export {
    healthRouter
}