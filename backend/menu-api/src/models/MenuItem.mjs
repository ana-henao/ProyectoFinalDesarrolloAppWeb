class MenuItem {
  constructor(id, nombre, precio, descripcion, tipo_item_menu_id) {
    this.id = id;
    this.name = nombre;
    this.description = descripcion;
    this.price = precio;
    this.type = tipo_item_menu_id;
  }
}

export { MenuItem };
