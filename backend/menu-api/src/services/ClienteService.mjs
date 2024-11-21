import { Db } from "../config/db.mjs";
import { CustomError } from "../CustomError.mjs";
import { Cliente } from "../models/Cliente.mjs";

class ClienteService {
  // Registrar un cliente
  createCliente = async (nombreCliente, identificacionCliente) => {
    try {
      console.log("create cliente");
      const newCliente = await new Db().query(
        `INSERT INTO Cliente (nombre, identificacion)
          VALUES ($1, $2)
          RETURNING *;`,
        [nombreCliente, identificacionCliente]
      );
      if (!newCliente.rowCount) throw new CustomError();

      const { Id, nombre, identificacion } = newCliente.rows[0];
      return new Cliente(Id, nombre, identificacion);
    } catch (error) {
      console.log("error in cliente creation", error);
      throw new CustomError(error.code, error.detail);
    }
  };
}

export { ClienteService };
