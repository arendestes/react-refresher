import React from 'react';

import './NewGoal.css';

const NewGoal = ()=>{

    const newGoalHandler = event =>{
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'new goal added',
        }

        console.log(newGoal);
    }

    return <form className='new-goal' onSubmit={newGoalHandler}>
        <input type="text"/>
        <button type='submit'>New Goal</button>
    </form>
}

export default NewGoal;