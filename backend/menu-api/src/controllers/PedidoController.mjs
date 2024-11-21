import { validationResult } from 'express-validator';
import { PedidoService } from '../services/PedidoService.mjs';
import { CustomError } from '../CustomError.mjs';

class PedidoController {
  #service;
  constructor() {
    this.#service = new PedidoService();
  }

  // Crear un pedido
  createPedido = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { total, cliente_id, mesa_id } = req.body;
    var fecha = new Date();
    try {
      const result = await this.#service.createPedido(fecha, total, cliente_id, mesa_id);
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof CustomError)
        return res.status(500).send({ code: error.code, message: error.message });
    }
  };

  // Ver todos los pedidos
  getAll = async (req, res) => {
    try {
      const result = await this.#service.getAll();
      res.send(result);
    } catch (error) {
      return res.status(500).send({ code: error.code, message: error.message });
    }
  };

  // Actualizar el total de un pedido
  updateTotal = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { id } = req.params;
    const { total } = req.body;
    if (!id || !total) {
      return res.status(400).send({ code: 400, message: "Faltan datos" });
    }

    try {
      const updated = await this.#service.updateTotal(id, total);
      res.status(200).send(updated);
    } catch (error) {
      if (error instanceof CustomError)
        return res.status(500).send({ code: error.code, message: error.message });
    }
  };

  // Traer el pedido de una mesa
  getByMesa = async (req, res) => {
    const { mesa_id } = req.params;
    if (!mesa_id) {
      return res.status(400).send({ code: 400, message: "Falta el ID de la mesa" });
    }
    try {
      const pedido = await this.#service.getByMesa(mesa_id);
      if (!pedido) {
        return res.status(404).send({ message: "Pedido no encontrado" });
      }
      res.send(pedido);
    } catch (error) {
      return res.status(500).send({ code: error.code, message: error.message });
    }
  };
}

export { PedidoController };
