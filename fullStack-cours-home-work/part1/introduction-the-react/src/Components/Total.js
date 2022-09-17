export const Total = (props) => {
    let exNumbers = 0;
    props.course.parts.map(item => {
        return exNumbers+=item.exercises
    })
    return(
    <p>Number of exercises {exNumbers}</p>
    )
}