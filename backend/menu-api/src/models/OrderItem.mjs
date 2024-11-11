class OrderItem {
    constructor(menuItem, cant) {
      this.menuItem = menuItem;
      this.cant = cant;
    }

    getTotalPrice(){
        return this.menuItem.price * this.cant;
    }
  }
  
  export { OrderItem };