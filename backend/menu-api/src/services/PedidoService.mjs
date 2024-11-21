import { Db } from "../config/db.mjs";
import { CustomError } from "../CustomError.mjs";
import { Pedido } from "../models/Pedido.mjs";

class PedidoService {
  // Crear un pedido
  createPedido = async (fechaPedido, totalPedido, cliente_id_pedido, mesa_id_pedido) => {
    try {
      console.log("create pedido");
      const newPedido = await new Db().query(
        `INSERT INTO Pedido (fecha, total, cliente_id, mesa_id)
          VALUES ($1, $2, $3, $4)
          RETURNING *;`,
        [fechaPedido, totalPedido, cliente_id_pedido, mesa_id_pedido]
      );
      if (!newPedido.rowCount) throw new CustomError();

      const { Id, fecha, total, cliente_id, mesa_id } = newPedido.rows[0];
      return new Pedido(Id, fecha, total, cliente_id, mesa_id);
    } catch (error) {
      console.log("error in pedido creation", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  // Ver todos los pedidos
  getAll = async () => {
    try {
      console.log("get all pedidos");
      const results = await new Db().query("SELECT * FROM Pedido;");
      return results.rows.map(
        ({ Id, fecha, total, cliente_id, mesa_id }) =>
          new Pedido(Id, fecha, total, cliente_id, mesa_id)
      );
    } catch (error) {
      console.log("error getting all pedidos", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  // Actualizar el total de un pedido
  updateTotal = async (pedidoId, totalPedido) => {
    try {
      console.log("update pedido total");
      const updated = await new Db().query(
        `UPDATE Pedido 
        SET total = $2
          WHERE Id = $1
          RETURNING *;`,
        [pedidoId, totalPedido]
      );
      if (!updated.rowCount) return null;
      const { Id, fecha, total, cliente_id, mesa_id } = updated.rows[0];
      return new Pedido(Id, fecha, total, cliente_id, mesa_id);
    } catch (error) {
      console.log("error updating pedido total", error);
      throw new CustomError(error.code, error.detail);
    }
  };

  // Traer el pedido de una mesa
  getByMesa = async (mesaId) => {
    try {
      console.log("get pedido by mesa");
      const results = await new Db().query(
        "SELECT * FROM Pedido WHERE mesa_id = $1;",
        [mesaId]
      );
      if (results.rows.length === 0) {
        return null;
      }
      const { Id, fecha, total, cliente_id, mesa_id } = results.rows[0];
      return new Pedido(Id, fecha, total, cliente_id, mesa_id);
    } catch (error) {
      console.log("error getting pedido by mesa", error);
      throw new CustomError(error.code, error.detail);
    }
  };
}

export { PedidoService };
