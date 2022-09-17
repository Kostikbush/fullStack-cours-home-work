import { Content } from "./Components/Content";
import { Header } from "./Components/Header";
import { Total } from "./Components/Total";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        text:'Fundamentals of React',
        exercises: 10,
      },
      {
        text: 'Using props to pass data',
        exercises: 7,
      },
      {
        text: 'State of a component',
        exercises: 14,
      },
    ],
  }; 
  return (
    <div>
      <Header title={course.name}/>
      <Content course={course}/>
      <Total
        course={course}
      />
    </div>
  );
};

export default App;