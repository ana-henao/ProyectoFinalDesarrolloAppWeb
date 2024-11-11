// Llamados a la DB
// import { Db } from "../config/db.mjs";
import { MenuItem } from "../models/MenuItem.mjs";
import { CustomError } from "../CustomError.mjs";

class MenuItemService {
  getAll = async (type) => {
    try {
      console.log("get all menu items");
      //const resultados = await new Db().query("SELECT * FROM menuItems");
      // return resultados.rows.map(
      //   ({ name, code, credits }) => new Course(name, code, credits)
      // );
      return [new MenuItem(1,"Empanadas","6 Empanadas con hogao", 8000, "Entrada")];
    } catch (error) {
      console.log("error al listar cursos", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  createMenuItem = async (itemCode, itemName, itemDescription, itemPrice, itemType) => {
    try {
      console.log("create menu item");
      // const newCourse = await new Db().query(
      //   `INSERT INTO course (code, name, credits) VALUES ($1, $2, $3) RETURNING *`,
      //   [courseCode, courseName, courseCredits]
      // );
      // if (!newCourse.rowCount) throw new CustomError();
      // const { code, name, credits } = newCourse.rows[0];
      return new MenuItem( itemCode, itemName, itemDescription, itemPrice, itemType);
    } catch (error) {
      console.log("error in menu item creation", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  updateMenuItem = async (itemCode, itemName, itemDescription, itemPrice, itemType) => {
    try {
      console.log("update menu item");
      // const updated = await new Db().query(
      //   `UPDATE course SET name=$1, credits=$2 WHERE code = $3 RETURNING code,name,credits;`,
      //   [courseName, courseCredits, courseCode]
      // );
      // if (!updated.rowCount) return null;
      //const { code, name, credits } = updated.rows[0];
      return new MenuItem( itemCode, itemName, itemDescription, itemPrice, itemType);
    } catch (error) {
      console.log("error al actualizar cursos", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  deleteMenuItem = async (itemCode) => {
    try {
      console.log("delete menu item");
      // const result = await new Db().query(
      //   `delete FROM cursos WHERE codigo = $1 RETURNING code;`,
      //   [codigo]
      // );
      // if (!result.rowCount) return null;
      // return result.rows[0];
      return null;
    } catch (error) {
      console.log("menu item deletion error", error);
      throw new CustomError(err.code, err.detail);
    }
  };

  getOne = async (courseCode) => {
    try {
      console.log("get one menu item");
      // const results = await new Db().query(
      //   "SELECT * FROM course WHERE code = $1",
      //   [courseCode]
      // );
      //const { code, name, credits } = results.rows[0];
      // console.log(results.rows);
      return new MenuItem(courseCode,"Empanadas","6 Empanadas con hogao", 8000, "Entrada");
    } catch (error) {
      console.log("error listing menu items", error);
      throw new CustomError(error.code, error.detail);
    }
  };
}

export { MenuItemService };
