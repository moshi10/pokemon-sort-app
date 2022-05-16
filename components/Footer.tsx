import footerStyle from "./footer.module.scss"
import wrapperStyle from "./wrapper.module.scss"

export const Footer: React.FC = () => {
    const date = new Date();

    return(
        <>
            <div className={ `${wrapperStyle.wrapper} ${wrapperStyle.wrapperCenter}` }>
                <div className={footerStyle.horizonalLine}>
                    <p>&copy; { date.getFullYear() }, Matcha All rights reserved.</p>  
                </div>
            </div>
            
            
        </>
    )
}
