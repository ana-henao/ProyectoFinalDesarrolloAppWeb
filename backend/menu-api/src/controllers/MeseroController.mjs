import { validationResult } from 'express-validator';
import { MeseroService } from '../services/MeseroService.mjs';
import { CustomError } from '../CustomError.mjs';

class MeseroController {
  #service;
  constructor() {
    this.#service = new MeseroService();
  }
    // Consultar si el mesero existe
  getOne = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ code: 400, message: "Falta el ID del mesero" });
    }
    try {
      const mesero = await this.#service.getOne(id);
      if (!mesero) {
        return res.status(404).send({ message: "Mesero no encontrado" });
      }
      res.send(mesero);
    } catch (error) {
      return res.status(500).send({ code: error.code, message: error.message });
    }
  };

  // Crear un mesero
  createMesero = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { nombre, identificacion } = req.body;
    try {
      const result = await this.#service.createMesero(nombre, identificacion);
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof CustomError)
        return res.status(500).send({ code: error.code, message: error.message });
    }
  };

  // Actualizar un mesero
  updateMesero = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ code: 400, message: "Falta el ID del mesero" });
    }

    const { nombre } = req.body;
    try {
      const updated = await this.#service.updateMesero(id, nombre);
      res.status(200).send(updated);
    } catch (error) {
      if (error instanceof CustomError)
        return res.status(500).send({ code: error.code, message: error.message });
    }
  };

  // Borrar un mesero
  deleteMesero = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ code: 400, message: "Falta el ID del mesero" });
    }
    try {
      const deleted = await this.#service.deleteMesero(id);
      res.status(204).send(deleted);
    } catch (error) {
      if (error instanceof CustomError)
        return res.status(500).send({ code: error.code, message: error.message });
    }
  };
}

export { MeseroController };
