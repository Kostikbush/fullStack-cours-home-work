export const Part = (props) => {
    const title = props.title;
    const numberOfExs = props.numberOfExs    
    
    return(<p>{title} {numberOfExs}</p>)
}