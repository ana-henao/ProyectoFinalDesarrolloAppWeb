
export default class MeseroApi {
    static async getOne(meseroId) {
        const response = await fetch(`http://localhost:8081/meseros/${meseroId}`);
        if (response.status !== 200) {
            throw new Error(`Hubo un error al obtener el mesero con ID: ${meseroId}`);
        }
        const data = await response.json();
        return data;
    }
}
