import React from 'react';

import NewGoal from './components/NewGoal/NewGoal'
import GoalList from './components/GoalList/GoalList'

import './App.css';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'complete course'},
    {id: 'cg2', text: 'good understanding of couse material'},
    {id: 'cg3', text: 'help people in Q&A'},
    {id: 'cg4', text: 'pat self on back'}
  ]

  return <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal />                          
    <GoalList goals={courseGoals} />                            
  </div>
};


export default App;
