import React, { useState } from 'react';

import './NewGoal.css';

const NewGoal = props => {

    const [textInput, setTextInput] = useState('')

    const newGoalHandler = event =>{
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: textInput
        }
        setTextInput('');
        props.onAddGoal(newGoal);
        
    }

    const textChangeHanler = event =>{
        setTextInput(event.target.value);
    }

    return <form className='new-goal' onSubmit={newGoalHandler}>
        <input type="text" value={textInput} onChange={textChangeHanler}/ >
        <button type='submit'>New Goal</button>
    </form>
}

export default NewGoal;