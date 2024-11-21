import { validationResult } from 'express-validator';
import { ClienteService } from '../services/ClienteService.mjs';
import { CustomError } from '../CustomError.mjs';

class ClienteController {
  #service;
  constructor() {
    this.#service = new ClienteService();
  }

  // Registrar un cliente
  createCliente = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { nombre, identificacion } = req.body;
    try {
      const result = await this.#service.createCliente(nombre, identificacion);
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof CustomError)
        return res.status(500).send({ code: error.code, message: error.message });
    }
  };
}

export { ClienteController };
