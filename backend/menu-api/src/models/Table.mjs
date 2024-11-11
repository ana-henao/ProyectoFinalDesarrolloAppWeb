import { Client } from "./Client.mjs";
import { Order } from "./Order.mjs";

class Table {
    constructor(id, number) {
      this.id = id;
      this.number = number;
      this.client = null;
      this.order = null;
    }

    setClient(client){
        if (!(client instanceof Client)) {
            throw new Error("Debe ser un objeto tipo Cliente");
          }
        this.client = client;
    }

    setOrder(order){
        if (!(order instanceof Order)) {
            throw new Error("Debe ser un objeto tipo Pedido");
          }
        this.order = order;
    }
  }
  
  export { Table };