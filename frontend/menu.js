import MenuApi from "./api/MenuApi.js";
import Plato from "./plato.js";

export default class Menu {
    constructor() {
       
    }

    async GetPlatosPorTipo(){
        this.tipo = localStorage.getItem('platos-tipo');
        this.mesero = localStorage.getItem('mesero');
        this.admin = localStorage.getItem('admin');
        this.cliente = localStorage.getItem('cliente');

        if (this.tipo){

            let platos = await MenuApi.getPorTipo(this.tipo)

            const contenedorLista = document.getElementById('menu-item-content');
            contenedorLista.innerHTML = '';

            console.log(this.mesero);
            let num = 0;
            platos.forEach(item => 
                { 
                    const itemLista = document.createElement('li'); 
                    itemLista.className = 'menu-item'; 
                    itemLista.innerHTML = ` <div id="plato-buttons${num}" style="display: flex; justify-content: space-between; flex-direction: row; height: 35px; width: 530px; "> 
                    <h3>${item.name}</h3> 
                    <p style="width: 150px;">...............................</p> <h3>${item.price}</h3> 
                    </div> 
                    <p>${item.description}</p> `; 
                    contenedorLista.appendChild(itemLista); 

                    if(this.mesero === 'true'){
                        this.AgregarBotonesDeMesero(num);
                    }else if(this.admin === 'true'){
                        this.AgregarBotonesDeAdmin(num);
                    }
                    num++;
                });

            if (this.admin === 'true'){
                const contenedorMenu = document.getElementById('menu-content');

                const nuevoBoton = document.createElement('button'); 
                nuevoBoton.className = 'boton-imagen'; 
                nuevoBoton.type = 'submit'; 
                nuevoBoton.name = 'button1'; 
                nuevoBoton.style.alignSelf = 'flex-end'; 
                const nuevaImagen = document.createElement('img'); 
                nuevaImagen.className = 'icon'; 
                nuevaImagen.src = './images/square-plus.png';
                nuevaImagen.alt = 'Botón 1';
                nuevoBoton.appendChild(nuevaImagen);
                contenedorMenu.appendChild(nuevoBoton);
            }

        }
    }

    AgregarBotonesDeMesero(num){
        const contenedorBotones = document.getElementById(`plato-buttons${num}`);
        const nuevoDiv = document.createElement('div'); 
        nuevoDiv.innerHTML = ` <button class="boton-imagen" type="submit" name="button1"> 
        <img class="icon" src="./images/square-plus.png" alt="Botón 1"> 
        </button> `; 
        contenedorBotones.appendChild(nuevoDiv);
    }

    AgregarBotonesDeAdmin(num){
        const contenedorBotones = document.getElementById(`plato-buttons${num}`);
        const nuevoDiv = document.createElement('div'); 
        nuevoDiv.innerHTML = ` <button class="boton-imagen" type="submit" name="button2"> 
        <img class="icon" src="./images/square-pen.png" alt="Botón 2"> 
        </button> 
        <button class="boton-imagen" type="submit" name="button3"> 
        <img class="icon" src="./images/trash.png" alt="Botón 3">
         </button> `;  
        contenedorBotones.appendChild(nuevoDiv);
    }
}