import { useEffect, useState } from 'react';
import { Filter } from './Components/Filter';
import { PersonForm } from './Components/PersonForm';
import { Persons } from './Components/Persons';
import phoneService from './services/phones';
import { Messege } from './Components/Messege';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newPersons, setNewPersons] = useState([]);
  const [message, setMessage] = useState('');
  const [style, setStyle] = useState("wrapper-messege")
  useEffect(()=> {
    phoneService
    .getAll()
    .then(initionPhones => {
      setPersons(initionPhones);
      setNewPersons(initionPhones);
    })
  },[])
  const handleInputFilter=(e) => {
    if(e.target.value.trim().length > 0){
      if(persons.find(person => {
        return person.name.toLowerCase().trim().slice(0, e.target.value.length) === e.target.value.toLowerCase().trim();
      })){
        setNewPersons(persons.filter(person =>  person.name.toLowerCase().trim().slice(0, e.target.value.length) === e.target.value.toLowerCase().trim()))
      }else{
        setNewPersons(persons)
      }
    }else{
      setNewPersons(persons)
    }
  };
  const handleNewNameInput = (e) => {
    setNewName(e.target.value);
  };
  const handleNewNumberInput = (e) => {
    setNewNumber(e.target.value);
  }
  const handleAddPerson = (event) => {
    setStyle('wrapper-messege')
    event.preventDefault();
      if(persons.find(item => item.name.trim() === newName.trim())){
        const anser = window.confirm(`${newName} is already added to phonedook, replace the old number 
        with a new one?`);
        if(anser){
          const obj = persons.find(item => item.name === newName)
          const newObj = {...obj, number: newNumber}
          phoneService
          .changeNumber(obj.id, newObj)
          .then(data => {
            setNewPersons(newPersons.map(person => person.id !== obj.id ? person : data))
            setPersons(persons.map(person => person.id !== obj.id ? person : data))
            
            setMessage(`Change number of ${newName}`)
          })
          .catch(error => {
            setStyle('error-messege');
            setMessage(`${obj.name} has already been removed from server`)
            setPersons(persons.filter(p => p.id !== obj.id))
            setNewPersons(newPersons.filter(p => p.id !== obj.id))
          })
          setTimeout(()=> {
            setMessage(null)
          }, 3000)
        }
        setNewName('');
        setNewNumber('');
        setTimeout(()=> {
          setMessage(null)
        },3000)
      }else{
        if(newNumber !== '' && newName.trim() !== ''){
          setMessage(`Added ${newName}`)
          const newObj = {
            id: Math.random()+Date.now(),
            name: newName,
            number: newNumber,
          }
          phoneService
          .addPhone(newObj)
          .then(reternPhone => {
            setPersons(persons.concat(reternPhone));
            setNewPersons(newPersons.concat(reternPhone));
          });
          setNewName('');
          setNewNumber('');
          setTimeout(()=> {
            setMessage(null)
          },3000)
        }else{
          alert('Have no number and Name');
        }
      }
  }
  const deletePersonClick = (id, name) => {
    const anser = window.confirm(`Delete ${name}?`);
    if(anser){
      phoneService
      .deletePhone(id)
      .then(response => {
          setPersons(response);
          setNewPersons(response);
        })
        .catch(error => {
          setStyle('error-messege');
          setMessage(`${name} has already been removed from server`)
          setPersons(persons.filter(p => p.id !== id))
          setNewPersons(newPersons.filter(p => p.id !== id))
        })
        setTimeout(()=> {
          setMessage(null)
        }, 3000)
    }
}
  return (
    <div className='App'>
      <h2>Phonebook</h2>
      <Messege style={style} text={message}/>
      <Filter handleInputFilter={handleInputFilter}/>
      <h3>Add a new</h3>
      <PersonForm 
        handleAddPerson={handleAddPerson}
        newName={newName}
        newNumber={newNumber}
        handleNewNameInput={handleNewNameInput}
        handleNewNumberInput={handleNewNumberInput}
      />
      <h3>Numbers</h3>
      <Persons deletePersonClick={deletePersonClick} persons={newPersons}/>
    </div>
  )
}

export default App
