import { Db } from "../config/db.mjs";
import { CustomError } from "../CustomError.mjs";
import { PedidoMenuItem } from "../models/PedidoMenuItem.mjs";
import { MenuItem } from "../models/MenuItem.mjs";

class PedidoMenuItemService {
  // Agregar un menu item a un pedido
  addMenuItemToPedido = async (pedidoid, menuitemid) => {
    try {
      console.log("add menu item to pedido");
      const newPedidoMenuItem = await new Db().query(
        `INSERT INTO PedidoMenuItem (pedido_id, menu_item_id)
          VALUES ($1, $2)
          RETURNING *;`,
        [pedidoid, menuitemid]
      );
      if (!newPedidoMenuItem.rowCount) throw new CustomError();

      const { pedido_id, menu_item_id } = newPedidoMenuItem.rows[0];
      return new PedidoMenuItem(pedido_id, menu_item_id);
    } catch (error) {
      console.log("error adding menu item to pedido", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  // Obtener los menu items completos de un pedido
  getMenuItemsByPedido = async (pedidoid) => {
    try {
      console.log("get menu items by pedido");
      const results = await new Db().query(
        `SELECT mi.* FROM PedidoMenuItem pmi
        JOIN MenuItem mi ON pmi.menu_item_id = mi.Id
        WHERE pmi.pedido_id = $1;`,
        [pedidoid]
      );
      return results.rows.map(
        ({ Id, nombre, precio, descripcion, tipo_item_menu_id }) => 
          new MenuItem(Id, nombre, precio, descripcion, tipo_item_menu_id)
      );
    } catch (error) {
      console.log("error getting menu items by pedido", error);
      throw new CustomError(error.code, error.detail);
    }
  };
}

export { PedidoMenuItemService };
