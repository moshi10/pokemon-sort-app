import { useEffect } from "react";
import { useState } from "react";
import { PokemonItem } from "../../types/pokemonItem";
import { CardComponent } from "../atoms/CardComponent";
import { getItems } from "./Sorter";

import contentsStyle from "./contents.module.scss"
import wrapperStyle from "./wrapper.module.scss"
import * as Sorter from './Sorter';

// api呼び出し
const getPokemonsfromAPI = async (id:number):Promise<PokemonItem>=> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export const Contents: React.FC = () => {
    // 状態を🌟
    const [PokemonDataArray, setPokemonDataArray] = useState<PokemonItem[]>([])
    const [count,setCount] = useState(0)

    // 🌟初回レンダリング時のみ実行するやつ🌟
    useEffect(() => {
        const getPokemons = async () => {
            // PokeTempArrを宣言、PokemonItemの型を代入
            const PokeTempArr:PokemonItem[] = []
            // PokeAPIから全てのポケモンを取得、PokeTempArr[]に代入
            for (let i=1; i<=151; i++){
                const pokemonData = await getPokemonsfromAPI(i);
                PokeTempArr.push(pokemonData)
            }
            setPokemonDataArray(PokeTempArr)
            // setPokemonItems(PokeTempArr)

        }
        getPokemons()
    // 🌟🌟ここになにも入ってないから🌟🌟
    }, [])

    // ボタンを押したときの処理
    const handleChoice = () => {
        setCount(count+1);
    }

    
    const handleClick = () => {
        shuffle(PokemonDataArray);
    }

    const shuffle = (arr:PokemonItem[]) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        console.log(arr);
        return arr;
    };

    return (
        <>
            <div className={contentsStyle.wrapper}>
                <div className={contentsStyle.rule}>
                    <p onClick={handleClick}>好きなポケモンをひたすら選んでね</p>
                </div>
                <div className={contentsStyle.title}
                    onClick={() => {console.log(JSON.stringify(getItems(), null, '  '))}}>
                    <p>現在</p>
                </div>
                <div className={contentsStyle.choiceEvenWrapper}>
                    <div className={contentsStyle.choiceEven} onClick={handleChoice}>
                        <p>どちらでもない</p>
                    </div>
                </div>
                <div className={contentsStyle.choiceWrapper}>
                    <div className={contentsStyle.choice} onClick={handleChoice} >
                        {/* 2 CardComponentのcurrentPokemonItemにLeftPokemonItemを渡してる？ */}
                        { PokemonDataArray[count] ? <CardComponent currentPokemonItem={PokemonDataArray[count]}/> : <></> }
                    </div>
                    <div className={contentsStyle.choice} onClick={handleChoice}>
                        { PokemonDataArray[count] ? <CardComponent currentPokemonItem={PokemonDataArray[count]}/> : <></> }
                    </div>
                </div>
            </div>


        </>

    )
}
