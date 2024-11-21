import { Router } from 'express';
import { body } from 'express-validator';
import { ClienteController } from '../controllers/ClienteController.mjs';

class ClienteRoutes {
  constructor() {
    this.router = Router();
    this.controller = new ClienteController();
    this.router
      .route('/')
      .post(
        [
          body('nombre').trim().notEmpty(),
          body('identificacion').trim().notEmpty()
        ],
        this.controller.createCliente
      );
  }
}

export { ClienteRoutes };
