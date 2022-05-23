import header from "./header.module.scss"
import wrapper from "./wrapper.module.scss"

export const Header: React.FC = () => {

    return (
        <>
            <header className={ header.header }>
                <div className={ wrapper.wrapper }>
                    <div className={ header.logo }>
                        <p>ポケそーと</p>
                    </div>
                </div>
            </header>
        </>
    )
}
