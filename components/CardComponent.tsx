import { PokemonItem } from "../types/pokemonItem";
import cardComponentsStyle from "./cardComponent.module.scss"

// タイプ別の色を定義
const colors = [
    {type:'fire', color:'#FDDFDF'},
    {type:'grass', color:'#DEFDE0'},
    {type:'electric', color:'#fffacd'},
    {type:'water', color:'#DEF3FD'},
    {type:'ground', color:'#f4e7da'},
    {type:'rock', color:'#e5d2c5'},
    {type:'fairy', color:'#ffdef9'},
    {type:'poison', color:'#f6c0f4'},
    {type:'bug', color:'#d6e9ca'},
    {type:'dragon', color:'#97b3e6'},
    {type:'psychic', color:'#ffcce5'},
    {type:'flying', color:'#F5F5F5'},
    {type:'fighting', color:'#ffddbc'},
    {type:'normal', color:'#F5F5F5'},
    {type:'ghost', color:'#e5cce4'}
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

// 1 ここで受け取るPropの型を定義するんだ？
interface CardComponentsProps {
    currentPokemonItem: PokemonItem
}

// 3 関数の名前にジェネリクスの中に定義したやつ書いてる
// PropsをPに書き換えてみた！
export const CardComponent: React.FC<CardComponentsProps> = (P) => {
    // 今のポケモンのタイプ
    const type = P.currentPokemonItem.types[0].type.name
    // colorの中からtypeを選んで↑のtypeと比べて取り出す
    const colorObject = colors.find(v => v.type === type)

    return (
        <div className={cardComponentsStyle.cardContainer} style={{ backgroundColor: colorObject?.color }}>
            <p>No.{P.currentPokemonItem.id}</p>
            <div className={cardComponentsStyle.imgContainer}>
                {<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${P.currentPokemonItem.id}.png`} alt="" />}
            </div>
            <p>{P.currentPokemonItem.name}</p>
        </div>


    )

}
