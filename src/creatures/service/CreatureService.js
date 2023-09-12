import { config } from '../../config';

class CreatureService {
    endpoint = "creatures";
    baseUrl = config.baseUrl;

    async getAllCreature() {
        const res = await fetch(`${this.baseUrl}/${this.endpoint}`)
        if (!res.ok) throw new Error();
        const data = await res.json();
        return data.data;
    }

    async getCreatureByName(name) {
        const res = await fetch(`${this.baseUrl}/${this.endpoint}/${name}`)
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
		const data = await res.json();
		return data;
    }

    async getCreatureById(id) {
        const res = await fetch(`${this.baseUrl}/${this.endpoint}/${id}`)
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
		const data = await res.json();
		return data;
    }
}

export default CreatureService;