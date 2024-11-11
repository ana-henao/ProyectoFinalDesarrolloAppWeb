// Mapeo el endpoint con el controlador correspondiente
import { Router } from "express";
import { body } from "express-validator";
import { MenuItemController } from "../controllers/MenuItemController.mjs";

class ClientRoutes {
  constructor() {
    this.router = Router();
    this.controller = new MenuItemController();
    this.router
      .route("/")
      .post(
        [
          body("id").trim().notEmpty(),
          body("name").trim().notEmpty(),
          body("description").trim().notEmpty(),
          body("price").trim().isNumeric().notEmpty(),
          body("type").trim().notEmpty(),
        ],
        this.controller.createMenuItem
      );
    this.router
      .route("/:id")
      .get(this.controller.getOne)
      .put(this.controller.updateMenuItem)
      .delete(this.controller.deleteMenuItem);
  }
}
export { MenuItemRoutes };