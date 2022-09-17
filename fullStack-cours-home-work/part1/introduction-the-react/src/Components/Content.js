import { Part } from "./Part";

export const Content = (props) => {
        
    return(<div>
        {props.course.parts.map((item, index) => (
            <Part key={index} title={item.text} numberOfExs={item.exercises}/>
        ))}
        
    </div>) 
}


