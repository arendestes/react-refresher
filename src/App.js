import React from 'react';
import './App.css';
import GoalList from './components/GoalList'

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'complete course'},
    {id: 'cg2', text: 'good understanding of couse material'},
    {id: 'cg3', text: 'help people in Q&A'},
    {id: 'cg4', text: 'pat self on back'}
  ]

  return <div className="course-goals">
    <h2>Course Goals</h2>                          
    <GoalList goals={courseGoals} />                            
  </div>
};

// class App extends React.Component {
//   render(){
//     return <h1 title="This works.">A React App with a class based component!</h1>;
//   }
// }          This is a class based component

export default App;
