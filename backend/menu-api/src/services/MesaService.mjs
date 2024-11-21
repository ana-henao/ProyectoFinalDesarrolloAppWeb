import { Db } from "../config/db.mjs";
import { CustomError } from "../CustomError.mjs";
import { Mesa } from "../models/Mesa.mjs";

class MesaService {
  // Obtener la información de una mesa
  getOne = async (mesaId) => {
    try {
      console.log("get one mesa");
      const results = await new Db().query(
        "SELECT * FROM Mesa WHERE Id = $1;",
        [mesaId]
      );
      if (results.rows.length === 0) {
        return null;
      }
      const { Id, numero, mesero_id, cliente_id } = results.rows[0];
      return new Mesa(Id, numero, mesero_id, cliente_id);
    } catch (error) {
      console.log("error getting mesa", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  // Registrar un mesero y un cliente a una mesa
  registerMeseroCliente = async (mesaId, meseroId, clienteId) => {
    try {
      console.log("register mesero and cliente to mesa");
      const updated = await new Db().query(
        `UPDATE Mesa 
        SET mesero_id = $2, 
            cliente_id = $3
          WHERE Id = $1
          RETURNING *;`,
        [mesaId, meseroId, clienteId]
      );
      if (!updated.rowCount) return null;
      const { Id, numero, mesero_id, cliente_id } = updated.rows[0];
      return new Mesa(Id, numero, mesero_id, cliente_id);
    } catch (error) {
      console.log("error registering mesero and cliente to mesa", error);
      throw new CustomError(error.code, error.detail);
    }
  };
}

export { MesaService };
