import { config } from '../../config';

class CreatureService {
    endpoint = "creatures";
    baseUrl = config.baseUrl;
    creatureUrl = `${this.baseUrl}/${this.endpoint}`;

    async getAllCreature() {
        const res = await fetch(this.creatureUrl)
        if (!res.ok) throw new Error();
        const data = await res.json();
        return data.data;
    }

    async getCreatureById(id) {
        const res = await fetch(`${this.creatureUrl}/${id}`)
        if (!res.ok) throw new Error();
        return await res.json();
    }
}

export default CreatureService;