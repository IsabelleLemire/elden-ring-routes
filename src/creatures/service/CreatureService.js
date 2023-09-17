// CreatureService.js
import { config } from '../../config';

class CreatureService {
    endpoint = "creatures";
    baseUrl = config.baseUrl;

    async getAllCreatures() {
        const res = await fetch(`${this.baseUrl}/${this.endpoint}`);
        if (!res.ok) {
            throw new Error('Failed to fetch creatures');
        }
        const data = await res.json();
        return data.data;
    }

    async getCreatureByName(name) {
        const encodedName = encodeURIComponent(name);
        const res = await fetch(`${this.baseUrl}/${this.endpoint}/${encodedName}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch creature by name: ${name}`);
        }
        const data = await res.json();
        return data.creature; // Utilisez la propriété correcte ici, si elle est différente
    }
}

export default CreatureService;
