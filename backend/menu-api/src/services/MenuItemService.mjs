import { Db} from "../config/db.mjs";
import { MenuItem } from "../models/MenuItem.mjs";
import { CustomError } from "../CustomError.mjs";

class MenuItemService {
  getAll = async (tipo) => {
    try {
      console.log("get all menu items");
      let resultados;
      console.log(tipo);
      if(tipo){
        resultados = await new Db().query(
          `SELECT * FROM MenuItem WHERE tipo_item_menu_id = $1;`,
          [tipo]
        );
      }
      else{
        resultados = await new Db().query("SELECT * FROM MenuItem");
      } 
      return resultados.rows.map(
        ({id, nombre, precio, descripcion, tipo_item_menu_id }) => new MenuItem(id, nombre, precio, descripcion, tipo_item_menu_id)
      );
    } catch (error) {
      console.log("error al listar cursos", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  createMenuItem = async (itemNombre, itemDescription, itemprecio, itemtipo) => {
    try {
      console.log("create menu item");
      const newCourse = await new Db().query(
        `INSERT INTO MenuItem (nombre, precio, descripcion, menu_id, tipo_item_menu_id)
          VALUES ($1, $2, $3, 1, $4)
          RETURNING *;`,
        [itemNombre, itemprecio, itemDescription, itemtipo]
      );
      if (!newCourse.rowCount) throw new CustomError();

      const { id, nombre, precio, descripcion, tipo_item_menu_id } = newCourse.rows[0];

      return new MenuItem( id, nombre, precio, descripcion, tipo_item_menu_id);
    } catch (error) {
      console.log("error in menu item creation", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  updateMenuItem = async (itemid, itemNombre, itemDescription, itemprecio, itemtipo) => {
    try {
      console.log("update menu item");
      const updated = await new Db().query(
        `UPDATE MenuItem 
        SET nombre = $2, 
            precio = $3, 
            descripcion = $4, 
            menu_id = 1, 
            tipo_item_menu_id = $5
          WHERE id = $1
          RETURNING *;`,
        [itemid, itemNombre, itemprecio, itemDescription, itemtipo]
      );
      if (!updated.rowCount) return null;
      const {  id, nombre, precio, descripcion, tipo_item_menu_id  } = updated.rows[0];
      return new MenuItem(  id, nombre, precio, descripcion, tipo_item_menu_id );
    } catch (error) {
      console.log("error al actualizar cursos", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  deleteMenuItem = async (id) => {
    try {
      console.log("delete menu item");
      const result = await new Db().query(
        `DELETE FROM MenuItem WHERE id = $1;`,
        [id]
      );
      if (!result.rowCount) return null;
      return result.rows[0];
      return null;
    } catch (error) {
      console.log("menu item deletion error", error);
      throw new CustomError(err.code, err.detail);
    }
  };

  getOne = async (itemid) => {
    try {
      console.log("get one menu item");
      const results = await new Db().query(
        "SELECT * FROM MenuItem WHERE id = $1;",
        [itemid]
      );
      const {id, nombre, precio, descripcion, tipo_item_menu_id  } = results.rows[0];
      console.log(results.rows);
      return new MenuItem(id, nombre, precio, descripcion, tipo_item_menu_id);
    } catch (error) {
      console.log("error getting menu item", error);
      throw new CustomError(error.code, error.detail);
    }
  };
}

export { MenuItemService };
