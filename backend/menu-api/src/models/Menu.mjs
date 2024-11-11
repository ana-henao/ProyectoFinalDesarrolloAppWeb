import { MenuItem } from "./MenuItem.mjs";

class Menu {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.menuItems = new Set();
      }

    addMenuItem(menuItem){
        if (!(menuItem instanceof MenuItem)) {
            throw new Error("Debe ser un Menu Item");
          }
        this.menuItems.add(menuItem);
    }
  }
  
export { Menu };