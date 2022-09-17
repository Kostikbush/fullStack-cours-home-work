import { Content } from "./Content"
const Header = (props) => (<h2>{props.title}</h2>);
const Total = (props) => {
    const sum = props.course.parts.reduce((prev, next) => prev + next.exercises, 0)
    return(
    <h4>Number of exercises {sum}</h4>
    )
};
export const Course = ({course}) => {
    return (
        <>
            <Header title={course.name}/>
            <Content course={course}/>
            <Total
                course={course}
            />
        </>
    )
}