import MeseroApi from "./api/MeseroApi.js";
import Menu from "./menu.js";
import Ingresar from './ingresar.js';
import NuestroMenu from './nuestro_menu.js';

export default class App {
    /* Modificar el DOM / escuchar eventos*/
    constructor() {
        console.log(window.location.pathname);

        if(window.location.pathname === "/frontend/ingresar.html"){
            localStorage.setItem('mesero','false');
            localStorage.setItem('cliente','false');
            localStorage.setItem('admin','false');
            const ingresar = new Ingresar();
        }

        else if(window.location.pathname === "/frontend/nuestro_menu.html"){
            this.mesero = localStorage.getItem('mesero');
            console.log(this.mesero);
            const nuestro_menu = new NuestroMenu();
        }

        else if(window.location.pathname === "/frontend/platos.html"){
            const menu = new Menu();
            menu.GetPlatosPorTipo()
        }
    }
  
  }

