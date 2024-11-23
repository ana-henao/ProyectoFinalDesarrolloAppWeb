export default class NuestroMenu{
    constructor () {
        const item_entradas = document.getElementById('platos-entradas');
        item_entradas.addEventListener("click",this.#onClickEntradas);

        const item_fuertes = document.getElementById('platos-fuertes');
        item_fuertes.addEventListener("click",this.#onClickPlatos);

        const item_postres = document.getElementById('platos-postres');
        item_postres.addEventListener("click",this.#onClickPostres);
    }

    #onClickEntradas = async (ev) => {
        ev.preventDefault();
        localStorage.setItem('platos-tipo',1);
        window.location.href = `platos.html?tipo=1`;
    }

    #onClickPlatos = async (ev) => {
        ev.preventDefault();
        localStorage.setItem('platos-tipo',2);
        window.location.href = `platos.html?tipo=2`;
    }

    #onClickPostres = async (ev) => {
        ev.preventDefault();
        localStorage.setItem('platos-tipo',3);
        window.location.href = `platos.html?tipo=3`;
    }
}