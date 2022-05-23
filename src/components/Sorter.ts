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
const currentChallenge: string[] = [];

for(let item of _array) {
    items[item] = {
        less: [],
        equal: [],
        greater: []
    }
}

const notExist = (item: number, dest: number) => {
    return (
        !(items[dest].equal.includes(item))
    )

}

const addResult = (greater: string, less: string) => {
    if (less === greater) { return }

    // less側
    
}

const sortArray = (arr: number[]): string[] =>{

    let result: string[] = [];




    return result
}

export function getItems() {
    return items
}
