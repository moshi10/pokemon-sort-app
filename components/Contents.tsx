import { useEffect } from "react";
import { useState } from "react";
import { PokemonItem } from "../types/pokemonItem";
import { CardComponent } from "./CardComponent";
import contentsStyle from "./contents.module.scss"
import wrapperStyle from "./wrapper.module.scss"

// 
const getPokemon = async (id:number):Promise<PokemonItem>=> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export const Contents: React.FC = () => {
    const [PokemonDataArray, setPokemonDataArray] = useState<PokemonItem[]>([])
    const [LeftPokemonItem, setLeftPokemonItem] = useState<PokemonItem>()
    const [RightPokemonItem,setRightPokemonItem] = useState<PokemonItem>()
    useEffect(() => {
        const getPokemons = async () => {
            const PokemonTempArray:PokemonItem[] = []
            for (let i=1; i<=151; i++){
                const pokemonData = await getPokemon(i);
                PokemonTempArray.push(pokemonData)
            }
            setPokemonDataArray(PokemonTempArray)
            console.log(PokemonTempArray);
            const leftId = getRandomInt(151) + 1
            const LeftTempPokemonItem = PokemonTempArray.find(value => value.id === leftId)
            const rightId = getRandomInt(151) + 1
            const RightTempPokemonItem = PokemonTempArray.find(value => value.id === rightId)
            setLeftPokemonItem(LeftTempPokemonItem)
            setRightPokemonItem(RightTempPokemonItem)
        }
        getPokemons()

    }, [])

    const handleChoice = () => {
        const leftId = getRandomInt(151) + 1
        const LeftTempPokemonItem = PokemonDataArray.find(value => value.id === leftId)
        const rightId = getRandomInt(151) + 1
        const RightTempPokemonItem = PokemonDataArray.find(value => value.id === rightId)
        setLeftPokemonItem(LeftTempPokemonItem)
        setRightPokemonItem(RightTempPokemonItem)
    }

    return (
        <>
            <div className={contentsStyle.outer}>
                <div className={contentsStyle.title}>

                </div>
                <div className={contentsStyle.choiceWrapper}>
                    <div className={contentsStyle.choice} onClick={handleChoice} >
                        {/* 2 CardComponentにcurrentPokemonItemにLeftPokemonItemを渡してる？ */}
                        { LeftPokemonItem ? <CardComponent currentPokemonItem={LeftPokemonItem}/> : <></> }
                    </div>
                    <div className={contentsStyle.choiceEven} onClick={handleChoice}>
                        <p>どちらでもない</p>
                    </div>
                    <div className={contentsStyle.choice} onClick={handleChoice}>
                        { RightPokemonItem ? <CardComponent currentPokemonItem={RightPokemonItem}/> : <></> }
                    </div>
                </div>
            </div>

            <div className={contentsStyle.result}>
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
            </div>

        </>

    )
}
