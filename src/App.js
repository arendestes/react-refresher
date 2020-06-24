import React from 'react';
import './App.css';
import GoalList from './components/GoalList'

const App = () => {
  // return <h1 title="This works.">A React App!</h1>;
  return <div className="course-goals">
    <h2>Course Goals</h2>
    {/* <ul className="goal-list">
      <li>complete course</li>
      <li>good understanding of couse material</li>
      <li>help people in Q&amp;A</li>
    {/* </ul> */}                           {/* if JSX was not used as seperate component */}
    <GoalList />                            {/*  GoalList imported as component */}
  </div>
};

// class App extends React.Component {
//   render(){
//     return <h1 title="This works.">A React App with a class based component!</h1>;
//   }
// }          This is a class based component

export default App;
