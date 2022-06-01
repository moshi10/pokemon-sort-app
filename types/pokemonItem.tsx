// 正直わざわざ分ける必要ないよね
export type PokemonItem = Pick<
    PokemonItemResponse,
    "id" | "name" | "sprites" | "types"

>;

export interface PokemonItemResponse {
    id: number;
    name: string; 
    sprites: PokemonSprites;
    types: PokemonType[];   

}

interface PokemonSprites {
    front_default: string;
}

interface PokemonType {
    slot: number
    type: Type
}

interface Type {
    name: string
    url: string    
}
