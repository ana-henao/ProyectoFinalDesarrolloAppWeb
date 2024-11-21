import { Router } from 'express';
import { body } from 'express-validator';
import { MeseroController } from '../controllers/MeseroController.mjs';

class MeseroRoutes {
  constructor() {
    this.router = Router();
    this.controller = new MeseroController();
    this.router
      .route('/')
      .post(
        [
          body('nombre').trim().notEmpty(),
          body('identificacion').trim().notEmpty()
        ],
        this.controller.createMesero
      );
    this.router
      .route('/:id')
      .get(this.controller.getOne)
      .put(
        [
          body('nombre').trim().notEmpty()
        ],
        this.controller.updateMesero
      )
      .delete(this.controller.deleteMesero);
  }
}

export { MeseroRoutes };
