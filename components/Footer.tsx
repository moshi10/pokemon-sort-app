import footerStyle from "./footer.module.scss"
import wrapperStyle from "./wrapper.module.scss"

export const Footer: React.FC = () => {
    const date = new Date();

    return(
        <>
            <div className={ `${wrapperStyle.wrapper} ${wrapperStyle.wrapperCenter}` }>
                <hr className={ footerStyle.horizonalLine } />
            </div>
            <div className={ `${wrapperStyle.wrapper} ${wrapperStyle.wrapperCenter}` }>
                <p>&copy; { date.getFullYear() }, Matcha All rights reserved.</p>
            </div>
            
            
        </>
    )
}
