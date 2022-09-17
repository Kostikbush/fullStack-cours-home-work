const Part = (props) => {
    
    const title = props.title;
    const numberOfExs = props.numberOfExs    
    return(<p>{title} {numberOfExs}</p>)
}
export const Content = (props) => {
    return(<div>
        {props.course.parts.map((item) => (
            <Part key={item.id} title={item.name} numberOfExs={item.exercises}/>
        ))}
        
    </div>) 
}


