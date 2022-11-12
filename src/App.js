import './App.css';
import TaskForm from './components/TaskForm.jsx';
import Task from './components/Task.jsx';
import { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const local_tasks = JSON.parse(localStorage.getItem('tasks'));
    if (local_tasks) {
      setTasks(local_tasks);
    }
  }, []);

  const addTask = (task) => {

    const updatedTasks = [task, ...tasks];

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {

    const updatedTasks = tasks.filter((task) => {
      return task.id != id;
    });

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const taskCompleted = (id) => {

    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  return (
    <div className='App'>
      <h1 className='title'>Task Application by @Tzzent</h1>

      <div className='container-task-app'>
        <h3>Tasks</h3>
        <TaskForm onSubmit={addTask} />

        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text_task}
              complete={task.complete}
              removeTask={removeTask}
              taskCompleted={taskCompleted} />
          )
        }

      </div>
    </div>
  );
};

export default App;
