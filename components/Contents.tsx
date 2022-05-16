import { useEffect } from "react";
import { useState } from "react";
import { PokemonItem } from "../types/pokemonItem";
import { CardComponent } from "./CardComponent";
import contentsStyle from "./contents.module.scss"
import { getItems } from "./Sorter";
import wrapperStyle from "./wrapper.module.scss"

// api呼び出し
const getPokemon = async (id:number):Promise<PokemonItem>=> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

// ランダムな数字を返す
function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export const Contents: React.FC = () => {
    // 状態を🌟
    const [PokemonDataArray, setPokemonDataArray] = useState<PokemonItem[]>([])
    const [LeftPokemonItem, setLeftPokemonItem] = useState<PokemonItem>()
    const [RightPokemonItem,setRightPokemonItem] = useState<PokemonItem>()

    // ランダムなIdを作って
    // 同じIdを配列から探して
    // useStateで更新して返す
    const setPokemonItems = (PokemonItemArray:PokemonItem[]) => {
        const leftId = getRandomInt(151) + 1
        const LeftTempPokemonItem = PokemonItemArray.find(value => value.id === leftId)
        const rightId = getRandomInt(151) + 1
        const RightTempPokemonItem = PokemonItemArray.find(value => value.id === rightId)
        setLeftPokemonItem(LeftTempPokemonItem)
        setRightPokemonItem(RightTempPokemonItem)
    }

    // 🌟初回レンダリング時のみ実行するやつ🌟
    useEffect(() => {
        const getPokemons = async () => {
            const PokemonTempArray:PokemonItem[] = []
            for (let i=1; i<=151; i++){
                const pokemonData = await getPokemon(i);
                PokemonTempArray.push(pokemonData)
            }
            setPokemonDataArray(PokemonTempArray)
            console.log(PokemonTempArray);
            setPokemonItems(PokemonTempArray)
        }
        getPokemons()

    // 🌟🌟ここになにも入ってないから🌟🌟
    }, [])

    // ボタンを押したときの処理
    const handleChoice = () => {
        setPokemonItems(PokemonDataArray)
    }

    return (
        <>
            <div className={contentsStyle.wrapper}>
                <div className={contentsStyle.rule}>
                    <p>好きなポケモンをひたすら選んでね</p>
                </div>
                <div className={contentsStyle.title} onClick={() => {console.log(JSON.stringify(getItems(), null, '  '))}}>
                    <p>現在</p>
                </div>
                <div className={contentsStyle.choiceEvenWrapper}>
                    <div className={contentsStyle.choiceEven} onClick={handleChoice}>
                        <p>どちらでもない</p>
                    </div>
                </div>
                <div className={contentsStyle.choiceWrapper}>
                    <div className={contentsStyle.choice} onClick={handleChoice} >
                        {/* 2 CardComponentにcurrentPokemonItemにLeftPokemonItemを渡してる？ */}
                        { LeftPokemonItem ? <CardComponent currentPokemonItem={LeftPokemonItem}/> : <></> }
                    </div>
                    <div className={contentsStyle.choice} onClick={handleChoice}>
                        { RightPokemonItem ? <CardComponent currentPokemonItem={RightPokemonItem}/> : <></> }
                    </div>
                    
                </div>
            </div>

            {/* <div className={contentsStyle.result}>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>名前</th>
                            <th>gazo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {PokemonDataArray.map((value,index)=> (
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td><img src={value.sprites.front_default} alt="" /></td>
                            </tr>)
                        )
                    }
                    </tbody>
                </table>
            </div> */}

        </>

    )
}
