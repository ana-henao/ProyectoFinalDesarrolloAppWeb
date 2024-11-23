import MeseroApi from "./api/MeseroApi.js";

export default class Ingresar {
    /* Modificar el DOM / escuchar eventos*/
    constructor() {
        this.admin = localStorage.getItem('admin');
        const item = document.getElementById('ingresar');
        item.addEventListener("submit",this.#onSubmit);
    }

     #onSubmit = async (ev) => {
        ev.preventDefault();
        const userId = document.getElementById('fdocument').value;
        const mesero = await this.GetMesero(userId); 
        // if (!mesero){
        //         const contenedorPrincipal = document.getElementById('ingresar-inputs');

        //         let nuevoDiv = document.createElement('div'); 
        //         nuevoDiv.className = 'login-item-container'; 
        //         nuevoDiv.style.marginTop = '-30px'; 

        //         nuevoDiv.innerHTML = ` <div class='login-item' style="margin-left: 50px;"> <h2>Contraseña: </h2> </div> <input class='input' type="text"><br><br> `; 

        //         contenedorPrincipal.appendChild(nuevoDiv);
        // }else{
            window.location.href = `nuestro_menu.html`;
        // } 
    }

    async GetMesero(id){
        try{
            let user = await MeseroApi.getOne(id)

            if (user.nombre === 'Admin'){
                console.log(user.name);
                localStorage.setItem('admin','true');
                localStorage.setItem('mesero','false');
            }else{
                localStorage.setItem('admin','false');
                localStorage.setItem('mesero','true');
            }
            localStorage.setItem('cliente','false');
            return true;
        }catch{
            console.log("error");
            localStorage.setItem('mesero','false');
            localStorage.setItem('cliente','true');
            localStorage.setItem('admin','false');
            return false;
        }
      
    }
}