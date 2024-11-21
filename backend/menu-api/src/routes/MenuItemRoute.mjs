// Mapeo el endpoint con el controlador correspondiente
import { Router } from "express";
import { body } from "express-validator";
import { MenuItemController } from "../controllers/MenuItemController.mjs";

class MenuItemRoutes {
  constructor() {
    this.router = Router();
    this.controller = new MenuItemController();
    this.router
      .route("/")
      .get(this.controller.getAll)
      .post(
        [
          body("nombre").trim().notEmpty(),
          body("description").trim().notEmpty(),
          body("precio").trim().isNumeric().notEmpty(),
          body("tipo").trim().notEmpty(),
        ],
        this.controller.createMenuItem
      );
    this.router
      .route("/:id")
      .get(this.controller.getOne)
      .put( [
          body("nombre").trim().notEmpty(),
          body("description").trim().notEmpty(),
          body("precio").trim().isNumeric().notEmpty(),
          body("tipo").trim().notEmpty(),
        ],
        this.controller.updateMenuItem)
      .delete(this.controller.deleteMenuItem);
  }
}
export { MenuItemRoutes };
