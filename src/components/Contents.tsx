import { useEffect } from "react";
import { useState } from "react";
import { CardComponent } from "../atoms/CardComponent";
import { FirstPageComponent } from "../atoms/FirstPageComponent";
import { PokemonArray,PokeItem } from "./pokemon"

import contentsStyle from "./contents.module.scss"
import wrapperStyle from "./wrapper.module.scss"

interface Pokemon {
    id: number;
    name: string;
}

interface PokemonPair {
    left: PokeItem;
    right: PokeItem;      
}

/** 
 * @param {PokeItem[]} PokemonArray -excelã§ä½ã£ãjson
 */
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
    return pokePairArr
}

const shuffle = (arr:any[]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};

export const Contents: React.FC = () => {
    const [count,setCount] = useState(0)
    const [pokemonPairArray,setPokemonPairArray] = useState<PokemonPair[]>([])

    // ðååã¬ã³ããªã³ã°æã®ã¿å®è¡ãããã¤ð
        useEffect(()=>{
            setPokemonPairArray(shuffle(createSortData(PokemonArray)))
        },[])

    // ãã¿ã³ãæ¼ããã¨ãã®å¦ç
    const handleChoice = () => {
        setCount(count+1);
    }

    return (
        <>
            <FirstPageComponent />
            <div className={contentsStyle.wrapper}>
                <div className={contentsStyle.rule}>
                    <p>å¥½ããªãã±ã¢ã³ãã²ãããé¸ãã§ã­</p>
                </div>
                <div className={contentsStyle.title}>
                    <p>ç¾å¨</p>
                </div>
                <div className={contentsStyle.choiceEvenWrapper}>
                    <div className={contentsStyle.choiceEven} onClick={handleChoice}>
                        <p>ã©ã¡ãã§ããªã</p>
                    </div>
                </div>
                <div className={contentsStyle.choiceWrapper}>
                    <div className={contentsStyle.choice} onClick={handleChoice} >
                        {/* 2 CardComponentã®currentPokemonItemã«LeftPokemonItemãæ¸¡ãã¦ãï¼ */}
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
