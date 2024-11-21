import { validationResult, matchedData } from "express-validator";
import { MenuItemService } from "../services/MenuItemService.mjs";
import { CustomError } from "../CustomError.mjs";

class MenuItemController {
  #service;
  constructor() {
    this.#service = new MenuItemService();
  }

  getAll = async (req, res) => {
    const { type } = req.query;
    try {
          const result = await this.#service.getAll(type);
          res.send(result);
        } catch (error) {
            return res
              .status(500)
              .send({ code: error.code, message: error.message });
        }
  };

  createMenuItem = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { nombre, description, precio, tipo } = req.body;
    try {
      const result = await this.#service.createMenuItem(nombre, description, precio, tipo);
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof CustomError)
        return res
          .status(500)
          .send({ code: error.code, message: error.message });
    }
  };

  updateMenuItem = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ code: 400, message: "some data missing" });
    }

    const { nombre, description, precio, tipo } = req.body;

    const updated = await this.#service.updateMenuItem( id, nombre, description, precio, tipo);
    res.status(200).send(updated);
  };

  deleteMenuItem = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ code: 400, message: "some data missing" });
    }
    try {
      const deleted = await this.#service.deleteMenuItem(id);
      res.status(204).send(deleted);
    } catch (error) {
      if (error instanceof CustomError)
        return res
          .status(500)
          .send({ code: error.code, message: error.message });
    }
  };

  getOne = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ code: 400, message: "some data missing" });
    }
    try {
      const course = await this.#service.getOne(id);
      res.send(course);
    } catch (error) {
      if (error instanceof CustomError)
        return res
          .status(204)
          .send({ code: error.code, message: error.message });
    }
   
  };

}

export { MenuItemController };
