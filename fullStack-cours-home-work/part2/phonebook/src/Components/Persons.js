import { Person } from "./Person";
export const Persons = ({persons, deletePersonClick}) => {
    
    return (
        <>
            {persons.map((person, index) => (
                <Person handleClick={deletePersonClick} id={person.id} number={person.number} i={index} key={person.id} name={person.name}/>
            ))}
        </>
    )
}