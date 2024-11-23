import { Db } from "../config/db.mjs";
import { CustomError } from "../CustomError.mjs";
import { Mesero } from "../models/Mesero.mjs";

class MeseroService {
  // Consultar si el mesero existe
  getOne = async (meseroId) => {
    try {
      console.log("get one mesero");
      const results = await new Db().query(
        "SELECT * FROM Mesero WHERE identificacion = $1;",
        [meseroId]
      );
      if (results.rows.length === 0) {
        return null;
      }
      const { id, nombre, identificacion } = results.rows[0];
      return new Mesero(id, nombre, identificacion);
    } catch (error) {
      console.log("error getting mesero", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  // Crear un mesero
  createMesero = async (nombreMesero, identificacionMesero) => {
    try {
      console.log("create mesero");
      const newMesero = await new Db().query(
        `INSERT INTO Mesero (nombre, identificacion)
          VALUES ($1, $2)
          RETURNING *;`,
        [nombreMesero, identificacionMesero]
      );
      if (!newMesero.rowCount) throw new CustomError();

      const { id, nombre, identificacion } = newMesero.rows[0];
      return new Mesero(id, nombre, identificacion);
    } catch (error) {
      console.log("error in mesero creation", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  // Borrar un mesero
  deleteMesero = async (id) => {
    try {
      console.log("delete mesero");
      const result = await new Db().query(
        `DELETE FROM Mesero WHERE id = $1;`,
        [id]
      );
      if (!result.rowCount) return null;
      return result.rows[0];
    } catch (error) {
      console.log("mesero deletion error", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  // Actualizar un mesero
  updateMesero = async (idMesero, nombreMesero) => {
    try {
      console.log("update mesero");
      const updated = await new Db().query(
        `UPDATE Mesero 
        SET nombre = $2
          WHERE id = $1
          RETURNING *;`,
        [idMesero, nombreMesero]
      );
      if (!updated.rowCount) return null;
      const { id, nombre, identificacion } = updated.rows[0];
      return new Mesero(id, nombre, identificacion);
    } catch (error) {
      console.log("error updating mesero", error);
      throw new CustomError(error.code, error.detail);
    }
  };
}

export { MeseroService };
