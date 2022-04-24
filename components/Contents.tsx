import { useEffect } from "react";
import { useState } from "react";
import contentsStyle from "./contents.module.scss"

type Character = {
    id: number;
    name: string;
    img: string;
    sort: number;
};

const characters: Character[] = [
    {
        id: 1,
        name: "taro",
        img: "taro.png",
        sort: 0
    },
    {
        id: 2,
        name: "taro2",
        img: "taro2.png",
        sort: 0,
    },
    {
        id: 3,
        name: "taro3",
        img: "taro3.png",
        sort: 0
    }
]

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export const Contents: React.FC = () => {
    const [leftCharacter, setLeftCharacter] = useState<Character>()
    const [rightCharacter, setRightCharacter] = useState<Character>()
    useEffect(() => {
        const leftId = getRandomInt(3) + 1
        const rightId = getRandomInt(3) + 1
        setLeftCharacter(characters.find(value => value.id === leftId))
        setRightCharacter(characters.find(value => value.id === rightId))
    }, [])
    const handleLeftChoice = () => {
        const leftId = getRandomInt(3) + 1
        const rightId = getRandomInt(3) + 1
        setLeftCharacter(characters.find(value => value.id === leftId))
        setRightCharacter(characters.find(value => value.id === rightId))
    }
    const handleEvenChoice = () => {

    }
    const handleRightChoice = () => {

    }
    return (
        <>
            <div className={contentsStyle.outer}>
                <div className={contentsStyle.title}>

                </div>
                <div className={contentsStyle.choiceWrapper}>
                    <div className={contentsStyle.choice} onClick={handleLeftChoice} >
                        {leftCharacter?.name}
                    </div>
                    <div className={contentsStyle.choiceEven} onClick={handleEvenChoice}></div>
                    <div className={contentsStyle.choice} onClick={handleRightChoice} >
                        {rightCharacter?.name}
                    </div>
                </div>
            </div>
            <div className={contentsStyle.result}>
                <table>
                    <thead>
                        <tr>
                            <th>順位</th>
                            <th>名前</th>
                            <th>Pt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {characters.map(value => (
                            <tr>
                                <td>{value.sort}</td>
                                <td>{value.name}</td>
                                <td>{value.sort}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </div>

        </>

    )
}
