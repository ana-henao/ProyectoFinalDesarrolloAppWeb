import { validationResult } from 'express-validator';
import { PedidoMenuItemService } from '../services/PedidoMenuItemService.mjs';
import { CustomError } from '../CustomError.mjs';

class PedidoMenuItemController {
  #service;
  constructor() {
    this.#service = new PedidoMenuItemService();
  }

  // Agregar un menu item a un pedido
  addMenuItemToPedido = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { pedido_id, menu_item_id } = req.body;
    try {
      const result = await this.#service.addMenuItemToPedido(pedido_id, menu_item_id);
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof CustomError)
        return res.status(500).send({ code: error.code, message: error.message });
    }
  };

  // Obtener los menu items completos de un pedido
  getMenuItemsByPedido = async (req, res) => {
    const { pedido_id } = req.params;
    if (!pedido_id) {
      return res.status(400).send({ code: 400, message: "Falta el ID del pedido" });
    }
    try {
      const result = await this.#service.getMenuItemsByPedido(pedido_id);
      res.send(result);
    } catch (error) {
      return res.status(500).send({ code: error.code, message: error.message });
    }
  };
}

export { PedidoMenuItemController };
