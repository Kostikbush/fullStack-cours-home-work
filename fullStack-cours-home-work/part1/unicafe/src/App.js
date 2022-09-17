import { useState } from 'react';
const StatisticLine = ({text, value}) => (
  <tr><th className='th-align'>{text}</th><td>{value}</td></tr>
)
const Btn = ({title, handleClick, value}) => (
  <button onClick={handleClick(value+1)}>{title}</button>
  );
const Statistics = ({good, neutral, bad}) => {
  if(good !== 0 || neutral !==0 || bad !== 0){
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine 
            text='all'
            value={good + neutral + bad}
          />
          <StatisticLine 
            text='average'
            value={(good - bad)/(good  + neutral + bad)}
          />
          <StatisticLine 
            text='positive'
            value={(good / (good  + neutral + bad))*100+'%'}
          />
        </tbody>
      </table>
    );
  };
    return (
      <p>No feedback geven</p>
    );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => () => setGood(good+1);
  const handleNeutral = () => () => setNeutral(neutral+1);
  const handleBad = () => () => setBad(bad+1);
  return (
    <div>
      <h1>give feedback</h1>
      <Btn 
        title='good'
        value={good}
        handleClick={handleGood}/> 

      <Btn 
        title='neutral'
        value={neutral}
        handleClick={handleNeutral}/>

      <Btn 
        title='bad'
        value={bad}
        handleClick={handleBad}/>
        <Statistics 
          good={good}
          bad={bad}
          neutral={neutral}
          />
    </div>
  );
};

export default App;
