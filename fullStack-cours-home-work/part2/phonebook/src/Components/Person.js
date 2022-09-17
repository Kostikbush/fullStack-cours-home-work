export const Person = ({name,number, i,handleClick, id})=> (
    <p className='person-p'>
      <span>{i+1} {name}</span>
      <span>{number}</span>
      <button onClick={()=>handleClick(id, name)}>delete</button>
    </p> )