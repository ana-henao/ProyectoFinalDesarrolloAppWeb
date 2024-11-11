import { OrderItem } from "./OrderItem.mjs";

class Order {
    constructor(id, date, total) {
      this.id = id;
      this.date = date;
      this.total = total;
      this.items = new Set();
    }

    addMenuItem(orderItem){
        if (!(orderItem instanceof OrderItem)) {
            throw new Error("Debe ser un objeto Del Menu");
          }
        this.items.add(orderItem);
    }

    getTotal(){
        this.total=0;
        this.menuItems.forEach(item => this.total = this.total + item.getTotalPrice());
        return this.total;
    }
  }
  
export { Order };