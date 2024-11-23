import Plato from "../plato.js"

export default class MenuApi {
    static async getPorTipo(tipo) {
        const response = await fetch(`http://localhost:8081/menuItems?type=${tipo}`);
        if (response.status !== 200) {
            throw new Error(`Hubo un error al obtener los platos tipo: ${tipo}`);
        }
        const data = (await response.json());

        console.log(data);
        const list = [];

        data.forEach(element => {
            list.push(new Plato(element.id, element.name, element.price, element.description, tipo));
        });
        return list;
    }
}
