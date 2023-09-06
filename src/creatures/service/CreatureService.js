import { config } from '../../config';

class CreatureService {
    endpoint = "creatures";
    baseUrl = config.baseUrl;

    async getAllCreature(limit = 151, offset = 0) {
        const response = await fetch(`${this.baseUrl}/${this.endpoint}?limit=${limit}&offset=${offset}`);
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        const data = await response.json();
		return data.data;
    }

    async getCreatureById(id) {
        const response = await fetch(`${this.baseUrl}/${this.endpoint}/${id}`)
        if (!response.ok) throw new Error();
        return await response.json();
    }
}

export default CreatureService;