import { stringify } from "querystring";
import { Result } from "./Result";

// idがはいるゾ　の巻
interface Pokemon {
    less: number[];
    equal: number[];
    greater: number[];
}

interface PokemonDictionary {
    [id: number]: Pokemon
}

const items: PokemonDictionary = {};
const _array: number[] = [1,2,3];

for(let item of _array) {
    items[item] = {
        less: [],
        equal: [],
        greater: []
    }
}

export function getItems() {
    return items
}
