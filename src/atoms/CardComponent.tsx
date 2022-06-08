import { PokeItem } from "../components/pokemon";
import cardComponentsStyle from "./cardComponent.module.scss"

const typeColors = [
    {type:'ほのお', color:'#FDDFDF'},
    {type:'くさ', color:'#DEFDE0'},
    {type:'でんき', color:'#fffacd'},
    {type:'みず', color:'#DEF3FD'},
    {type:'じめん', color:'#f4e7da'},
    {type:'いわ', color:'#e5d2c5'},
    {type:'フェアリー', color:'#ffdef9'},
    {type:'どく', color:'#f6c0f4'},
    {type:'むし', color:'#d6e9ca'},
    {type:'ドラゴン', color:'#97b3e6'},
    {type:'エスパー', color:'#ffcce5'},
    {type:'ひこう', color:'#F5F5F5'},
    {type:'かくとう', color:'#ffddbc'},
    {type:'ノーマル', color:'#F5F5F5'},
    {type:'ゴースト', color:'#e5cce4'}
]

// 1 ここで受け取るPropの型を定義するんだ？
interface CardComponentsProps {
    currentPokemonItem: PokeItem
}

/**
 * カードコンポーネント
 * 3 関数の名前、ジェネリクスの中に定義したやつ書いてる
 * @param props  -contents.tsxからcurrentPokemonItem(PokeItem(jsonの型))が渡されてる
 * @returns カードjsx
 */
export const CardComponent: React.FC<CardComponentsProps> = (props) => {
    const { id, name, type_name } = props.currentPokemonItem;
    // 今のポケモンのタイプ
    // const type = props.currentPokemonItem.type_name
    // colorの中からtypeを選んで↑のtypeと比べて取り出す
    const colorObject = typeColors.find(v => v.type === type_name)
    console.log(name)

    return (
        <div className={cardComponentsStyle.cardContainer} style={{ backgroundColor: colorObject?.color }}>
            <p>No.{props.currentPokemonItem.id}</p>
            <div className={cardComponentsStyle.imgContainer}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
            </div>
            <p>{name}</p>
        </div>
    )
}
