export type PokemonItem = Pick<
    PokemonItemResponse,
    "id" | "name" | "sprites" | "types"

>;

export interface PokemonItemResponse {
    id: number;
    name: string; 
    // base_experience: number;
    // height: number;
    // is_default: boolean;
    // order: number;
    // weight: number;
    // abilities:[
    //     {
    //         is_hidden: boolean;
    //         slot: number;
    //         ability:{
    //             name: string;
    //             url: string;
    //         }
    //     }
    // ]
    // forms:[
    //     {
    //         name: string;
    //         url: string;
    //     }
    // ]
    // game_indices:[
    //     {
    //         game_index: number;
    //         version:{
    //             name: string;
    //             url: string;
    //         }
    //     }
    // ]
    // held_items: [
    //     {
    //         item:{
    //             name: string;
    //             url: string;
    //         }
    //         version_details:[
    //             {
    //                 rarity: number;
    //                 version:{
    //                     name: string;
    //                     url: string;
    //                 }
    //             }
    //         ]
    //     }
    // ]
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
