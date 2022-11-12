import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/TaskForm.css';


function TaskForm(props) {

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleShipping = (e) => {
        e.preventDefault();
        const task = {
            id: uuidv4(),
            text_task: input,
            complete: false
        };
        props.onSubmit(task);
    };

    return (
        <form className='task-form' onSubmit={handleShipping}>
            <input className='task-input' type="text" placeholder='Write a task' onChange={handleChange} />
            <input className='task-submit' type="submit" value='Add task' />
        </form>
    );
};


export default TaskForm;