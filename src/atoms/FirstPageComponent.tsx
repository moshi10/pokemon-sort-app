import React, { useState, useEffect, ChangeEvent } from "react"

import wrapperStyle from "./../components/wrapper.module.scss"
import firstPageComponentStyle from "./firstPageComponent.module.scss"

interface CheckBoxProps{
    id: string;
    checked: boolean;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const typeChecklists:string[] = [
    "ほのお",
    "くさ",
    "でんき",
    "みず",
    "じめん",
    "いわ",
    "エスパー",
    "どく",
    "でんき",
    "ドラゴン",
    "ゴースト",
    "ひこう",
    "かくとう",
    "ノーマル"
]

/**
 * React.FCの後ろに付けるジェネリクスはPropsの型を定義する奴
 * @param props checkboxの中身
 * @const { id, checked, onChange, value } = props;
 * @returns 
 */
const CheckBox:React.FC<CheckBoxProps> = (props) => {
    const { id, checked, onChange, value } = props;
    return(
        <input
            id={id}
            type="checkbox"
            name="inputNames"
            checked={checked}
            onChange={onChange}
            value={value}
            />
    )
}

/**
 * むー
 * @returns 
 */
const CheckBoxList:React.FC = () => {
    const [checkedItems,setCheckedItems] = useState<{ [key:string] : boolean }>({})
    const [isBtnHide,setIsBtnHide] = useState(true)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCheckedItems({
            ...checkedItems,
            [e.target.id]: e.target.checked
        })
        console.log('checkedItems:',checkedItems)
    }

    useEffect(() => {
        // checkedItemsの長さが0より大きい(true)だったら
        // (空じゃない)
        // ボタンを表示させる
        // 一つでもtrueがあったら表示
        // すべてfalseだったら非表示
        // オブジェクトが空だったら非表示
        // アロー関数の省略
        if (Object.keys(checkedItems).length > 0 && Object.values(checkedItems).some(v => v)) {
            // 表示させるときの処理
            setIsBtnHide(false);
        } else {
            // 非表示させるときの処理
            setIsBtnHide(true);
        }
    },[checkedItems])
    return(
        <form>
            {typeChecklists.map((item,index) => {
                // idが、id_1,id_2,id_3
                // indexが初期値0
                const id = `id_${index+1}`
                return(
                    <label htmlFor={id} key={index}>
                        <CheckBox
                            id={id}
                            value={item}
                            onChange={handleChange}
                            checked={checkedItems[id]}
                        />
                        {item}
                    </label>
                )
            })}
            {!isBtnHide && <button>ボタン</button>}
        </form>
    )
}

/**
 * CheckBoxListコンポーネントをimport
 * @returns 
 */
export const FirstPageComponent:React.FC = () => {
    return(
        <>
            <div className={wrapperStyle.wrapper}>
                <div className={firstPageComponentStyle.wrapper}>
                    <div>
                        <h2>タイプを選んでね</h2>
                        <CheckBoxList />
                    </div>
                </div>
            </div>
        </>
    )
}
