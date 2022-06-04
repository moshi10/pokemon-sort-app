import { useEffect } from "react";
import { useState } from "react";
import { CardComponent } from "../atoms/CardComponent";
import { FirstPageComponent } from "../atoms/FirstPageComponent";
import { PokemonArray,PokeItem } from "./pokemon"


import contentsStyle from "./contents.module.scss"
import wrapperStyle from "./wrapper.module.scss"

// api呼び出し
// const getPokemonsfromAPI = async (id:number):Promise<PokemonItem>=> {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// }

interface Pokemon {
    id: number;
    name: string;
}

interface PokemonPair {
    left: PokeItem;
    right: PokeItem;      
}

const createSortData = (PokemonArray:PokeItem[]) => {    
    const pokePairArr:PokemonPair[] = []
    for (let i=0;i<PokemonArray.length-1;i++) {
        const left = PokemonArray[i]
        for (let j=i+1;j<PokemonArray.length;j++) {
            const right = PokemonArray[j]
            const pokePair:PokemonPair = {left,right}
            pokePairArr.push(pokePair)            
        }
    }
    // console.log(pokePairArr)
    return pokePairArr
}


const shuffle = (arr:any[]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    // console.log(arr);
    return arr;
};

export const Contents: React.FC = () => {
    // 状態を🌟
    // const [pokemonDataArray, setPokemonDataArray] = useState<PokemonItem[]>([])
    const [count,setCount] = useState(0)
    const [pokemonPairArray,setPokemonPairArray] = useState<PokemonPair[]>(shuffle(createSortData(PokemonArray)))

    // 🌟初回レンダリング時のみ実行するやつ🌟
    // useEffect(() => {
        
        // fetch('https://pokeapi.co/api/v2/pokemon-species/${id}', { method: 'GET' })
        // .then((res) => res.json())
        // .then((result) => {
        //     console.log(result);
        // });

    //     const getPokemons = async () => {
    //         // PokeTempArrを宣言、PokemonItemの型を代入
    //         const PokeTempArr:PokemonItem[] = []
    //         // PokeAPIから全てのポケモンを取得、PokeTempArr[]に代入
    //         for (let i=1; i<=151; i++){
    //             const pokemonData = await getPokemonsfromAPI(i);
    //             PokeTempArr.push(pokemonData)
    //         }

    //         for (let id=1;id<PokeTempArr.length+1;id++){
    //             fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`, { method: 'GET' })
    //             .then((res) => res.json())
    //             .then((result) => {
    //                 console.log(result.names[0].name);
    //             });
    //         }

    //         console.log(PokeTempArr)
    //         setPokemonDataArray(PokeTempArr)
    //         const tempPairArr= createSortData(PokeTempArr)
    //         const _tempPairArr = shuffle(tempPairArr)
    //         setPokemonPairArray(_tempPairArr)
    //     }
    //     getPokemons()
    // // 🌟🌟ここになにも入ってないから🌟🌟
    // }, [])

    // ボタンを押したときの処理
    const handleChoice = () => {
        setCount(count+1);
    }
    const handleClick = () => {
        // setCount(count+1)
        // console.log(createSortData(pokemonDataArray))
        // console.log(pokemonDataArray)
    }


    return (
        <>
             <FirstPageComponent />
            <div className={contentsStyle.wrapper}>
                <div className={contentsStyle.rule}>
                    <p onClick={handleClick}>好きなポケモンをひたすら選んでね</p>
                </div>
                <div className={contentsStyle.title}
                    onClick={handleClick}>
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
                        { pokemonPairArray[count] ? <CardComponent currentPokemonItem={pokemonPairArray[count].left}/> : <></> }
                    </div>
                    <div className={contentsStyle.choice} onClick={handleChoice}>
                        { pokemonPairArray[count] ? <CardComponent currentPokemonItem={pokemonPairArray[count].right}/> : <></> }
                    </div>
                </div>
            </div>
        </>
    )
}
