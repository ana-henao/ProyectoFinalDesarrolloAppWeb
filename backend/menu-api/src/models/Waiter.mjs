import { Table } from "./Table.mjs";

class Waiter {
    constructor(id, name, idNumber) {
        this.id = id;
        this.name = name;
        this.idNumber = idNumber;
        this.tables = new Set();
      }

    addTable(table){
        if (!(table instanceof Table)) {
            throw new Error("Debe ser una mesa");
          }
        this.tables.add(table);
    }
  }
  
export { Waiter };