const BASE_URL = "https://www.dnd5eapi.co";

interface APIReference {
    index: string;
    name: string;
    url: string;
}

export interface Spell {
    index: string;
    name: string;
    url: string;
    level: number;
    school: {
        name: string;
    };
    casting_time: string;
    range: string;
    components: string[];
    duration: string;
}

export interface Monster {
    url: string;
    index: string;
    name: string;
    challenge_rating: number;
    image?: string;
    size: string;
    type: string;
    alignments: string;
    desc: string;
    charisma: number;
    constitution: number;
    dexterity: number;
    intelligence: number;
    strength: number;
    wisdom: number;
}

async function fetchJson<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
}

export async function getAllSpells(): Promise<Spell[]> {
    const spellIndexes = await fetchJson<{ results: Spell[] }>(`${BASE_URL}/api/spells`);
    return Promise.all(spellIndexes.results.map(index => fetchJson<Spell>(`${BASE_URL}${index.url}`)));
}

export async function getAllMonsters(): Promise<Monster[]> {
    const monsterIndexes = await fetchJson<{ results: Monster[] }>(`${BASE_URL}/api/monsters`);
    return Promise.all(monsterIndexes.results.map(index => fetchJson<Monster>(`${BASE_URL}${index.url}`)));
}
