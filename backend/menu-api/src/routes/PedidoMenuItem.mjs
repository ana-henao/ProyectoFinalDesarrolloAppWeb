import { Router } from 'express';
import { body } from 'express-validator';
import {PedidoMenuItemController } from "../controllers/PedidoMenuItemController.mjs";

class PedidoMenuItemRoutes {
  constructor() {
    this.router = Router();
    this.controller = new PedidoMenuItemController();
    this.router
      .route('/')
      .post(
        [
          body('pedido_id').isInt(),
          body('menu_item_id').isInt()
        ],
        this.controller.addMenuItemToPedido
      );
    this.router
      .route('/:pedido_id')
      .get(this.controller.getMenuItemsByPedido);
  }
}

export { PedidoMenuItemRoutes };
