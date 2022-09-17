export const Messege = ({text, style}) => {
    if(text === null || text === ''){
        return null
    }
    return (
        <div className={style}><span>{text}</span></div>
    )
}