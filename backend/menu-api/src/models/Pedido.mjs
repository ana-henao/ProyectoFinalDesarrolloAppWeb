class Pedido {
  constructor(id, fecha, total, cliente_id, mesa_id) {
    this.id = id;
    this.fecha = fecha;
    this.total = total;
    this.cliente_id = cliente_id;
    this.mesa_id = mesa_id;
  }
}

export { Pedido };
