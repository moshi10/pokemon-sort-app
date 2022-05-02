import { useState } from "react";
import { useEffect } from "react";
import { PokemonItem } from "../types/pokemonItem";
import cardComponentsStyle from "./cardComponent.module.scss"

const colors = [
    {type:'fire', color:'#FDDFDF'},
    {type:'grass', color:'#DEFDE0'},
    {type:'electric', color:'#FCF7DE'},
    {type:'water', color:'#DEF3FD'},
    {type:'ground', color:'#f4e7da'},
    {type:'rock', color:'#d5d5d4'},
    {type:'fairy', color:'#fceaff'},
    {type:'poison', color:'#98d7a5'},
    {type:'bug', color:'#f8d5a3'},
    {type:'dragon', color:'#97b3e6'},
    {type:'psychic', color:'#eaeda1'},
    {type:'flying', color:'#F5F5F5'},
    {type:'fighting', color:'#E6E0D4'},
    {type:'normal', color:'#F5F5F5'},
    {type:'ghost', color:'#cc66ff'}
]

// API呼び出し
const getPokemon = async (id:number):Promise<PokemonItem>=> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

// ランダムな数字を呼び出し
function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

interface CardComponentsProps {
    currentPokemonItem: PokemonItem
}

export const CardComponent: React.FC<CardComponentsProps> = (Props) => {
    // useState 状態変数　状態変数を更新する関数
    // const [PokemonDataArray, setPokemonDataArray] = useState<PokemonItem[]>([])
    const [RightPokemonItem, setRightPokemonItem] = useState<PokemonItem>()

    const type = Props.currentPokemonItem.types[0].type.name
    const colorObject = colors.find(value => value.type === type)

    // reactのレンダリング後に実行する関数
    // useEffect(() => {
    //     // 
    //     const getPokemons = async () => {
    //         const PokemonTempArray:PokemonItem[] = []
    //         for (let i=1; i<=151; i++){
    //             const pokemonData = await getPokemon(i);
    //             PokemonTempArray.push(pokemonData)
    //         }
    //         setPokemonDataArray(PokemonTempArray)
    //         console.log(PokemonTempArray);
    //     }
    //     getPokemons()

    // }, []) 

    // const handleRightChoice = () => {
    //     const rightId = getRandomInt(151) + 1
    //     const RightTempPokemonItem = Props.pokemonDataArray.find(value => value.id === rightId)
    //     setRightPokemonItem(RightTempPokemonItem)
    // }

    return (
        <div className={cardComponentsStyle.cardContainer} style={{ backgroundColor: colorObject?.color }}>
            <p>{Props.currentPokemonItem.id}</p>
            <div className={cardComponentsStyle.imgContainer}>
                {<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Props.currentPokemonItem.id}.png`} alt="" />}
            </div>
            <p>{Props.currentPokemonItem.name}</p>
        </div>


    )

}
