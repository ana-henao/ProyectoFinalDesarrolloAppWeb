import { validationResult, matchedData } from "express-validator";
import { MenuItemService } from "../services/MenuItemService.mjs";
import { CustomError } from "../CustomError.mjs";

class MenuItemController {
  #service;
  constructor() {
    this.#service = new MenuItemService();
  }

  getAll = async (req, res) => {
    const { type } = req.params;
    const list = await this.#service.getAll(type);
    res.send(list);
  };

  createMenuItem = async (req, res) => {
    const validated = validationResult(req);
    if (!validated.isEmpty()) {
      console.log("No valid");
      return res.status(400).send({ errors: validated.array() });
    }
    const { id, name, description, price, type } = req.body;
    try {
      const result = await this.#service.createMenuItem(id, name, description, price, type);
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof CustomError)
        return res
          .status(500)
          .send({ code: error.code, message: error.message });
      throw error;
    }
  };

  updateMenuItem = async (req, res) => {
    const {id, name, description, price, type } = req.body;
    if (!id || !name || !description || !price || !type) {
      return res.status(400).send({ code: 400, message: "some data missing" });
    }
    const updated = await this.#service.updateMenuItem(id,name, description, price, type);
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
      throw error;
    }
  };

  getOne = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ code: 400, message: "some data missing" });
    }
    const course = await this.#service.getOne(id);
    res.send(course);
  };

}

export { MenuItemController };
