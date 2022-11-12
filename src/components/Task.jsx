import '../stylesheets/Task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ id, text, complete, removeTask, taskCompleted }) {

    return (
        <div className={complete ? 'container-task task-complete' : 'container-task'}>
            <div onClick={() => taskCompleted(id)} className='task-text'>{text}</div>
            <div onClick={() => removeTask(id)} className='container-remove-icon'>
                <AiOutlineCloseCircle className='remove-icon' />
            </div>
        </div>
    );
};

export default Task;