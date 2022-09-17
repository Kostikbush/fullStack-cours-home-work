import { useState } from 'react';

const Btn = ({text, handleClick}) => (
  <button onClick={handleClick}>{text}</button>
  )
const MaxVoteAnecdot = ({obj, anecdots}) => {
  let maxValue = Math.max(...Object.values(obj))
  function getKeyByValue() {
    return Object.keys(obj).find(key => obj[key] === maxValue);
  }
  const anecdot = {
    1: anecdots[getKeyByValue()],
    2: maxValue,
  }
  if(maxValue === 0){
      return (
        <p>Has no votes</p>
      )
  }
  return (
    <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdot[1]}</p>
        <p>has {anecdot[2]} votes</p>
    </div>
  )
}
function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
  let copy = {};
  for(let i =0; i < anecdotes.length; i++){
    copy[i] = 0;
  };
  const [selected, setSelected] = useState(0);
  const [obj, setObj] = useState({...copy});
  const randomSelect = () => {
    let newSelected = selected
    while (newSelected === selected) {
      newSelected = Math.floor(Math.random()*anecdotes.length)
    }
    setSelected(newSelected)
  };
  
  const handleVotes = () => {
    const copy = {...obj}
    copy[selected]+=1;
    setObj({...copy});
  };
  return (
    <div className="App">
      <p className='h-anecdot'>
        {anecdotes[selected]}
      </p>
      <p>has {obj[selected]} votes</p>
      <Btn text='vote' handleClick={handleVotes}/>
      <Btn text='next anecdote' handleClick={randomSelect}/>
      <MaxVoteAnecdot anecdots={anecdotes} obj={obj}/>
    </div>
  );
};

export default App;
