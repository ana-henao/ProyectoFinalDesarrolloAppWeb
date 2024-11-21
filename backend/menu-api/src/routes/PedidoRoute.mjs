import { Router } from 'express';
import { body } from 'express-validator';
import { PedidoController } from '../controllers/PedidoController.mjs';

class PedidoRoutes {
  constructor() {
    this.router = Router();
    this.controller = new PedidoController();
    this.router
      .route('/')
      .get(this.controller.getAll)
      .post(
        [
          body('total').isFloat({ min: 0 }).withMessage('El total debe ser un número positivo'),
          body('cliente_id').isInt().withMessage('El ID del cliente es obligatorio'),
          body('mesa_id').isInt().withMessage('El ID de la mesa es obligatorio')
        ],
        this.controller.createPedido
      );
    this.router
      .route('/:id')
      .put(
        [
          body('total').isFloat({ min: 0 }).withMessage('El total debe ser un número positivo')
        ],
        this.controller.updateTotal
      );
    this.router
      .route('/mesa/:mesa_id')
      .get(this.controller.getByMesa);
  }
}

export { PedidoRoutes };
