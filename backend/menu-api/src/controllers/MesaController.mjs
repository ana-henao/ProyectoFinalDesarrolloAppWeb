import { validationResult } from 'express-validator';
import { MesaService } from '../services/MesaService.mjs';
import { CustomError } from '../CustomError.mjs';

class MesaController {
  #service;
  constructor() {
    this.#service = new MesaService();
  }

  // Obtener la información de una mesa
  getOne = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ code: 400, message: "Falta el ID de la mesa" });
    }
    try {
      const mesa = await this.#service.getOne(id);
      if (!mesa) {
        return res.status(404).send({ message: "Mesa no encontrada" });
      }
      res.send(mesa);
    } catch (error) {
      return res.status(500).send({ code: error.code, message: error.message });
    }
  };

  // Registrar un mesero y un cliente a una mesa
  registerMeseroCliente = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ code: 400, message: "Falta el ID de la mesa" });
    }

    const { mesero_id, cliente_id } = req.body;
    try {
      const result = await this.#service.registerMeseroCliente(id, mesero_id, cliente_id);
      res.status(200).send(result);
    } catch (error) {
      if (error instanceof CustomError)
        return res.status(500).send({ code: error.code, message: error.message });
    }
  };
}

export { MesaController };
