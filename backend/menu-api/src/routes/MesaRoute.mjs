import { Router } from 'express';
import { body } from 'express-validator';
import { MesaController } from '../controllers/MesaController.mjs';

class MesaRoutes {
  constructor() {
    this.router = Router();
    this.controller = new MesaController();
    this.router
      .route('/:id')
      .get(this.controller.getOne)
      .put(
        [
          body('mesero_id').notEmpty(),
          body('cliente_id').notEmpty()
        ],
        this.controller.registerMeseroCliente
      );
  }
}

export { MesaRoutes };
