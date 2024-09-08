import { useState } from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { FaPlus, FaRegCircle, FaCheckCircle } from 'react-icons/fa'
import './List.css'

interface Task {
  text: string
  isCompleted: boolean
}

export const List = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('') 

 
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, isCompleted: false }]) 
      setNewTask('') 
    }
  }

  const toggleCompleteTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <>
      <div>
        <h1>Lista de Tarefas</h1>

     
        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />
          <button onClick={addTask}>
            <FaPlus /> 
          </button>
        </div>

      
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
              <button onClick={() => toggleCompleteTask(index)} className="circle-btn">
                {task.isCompleted ? <FaCheckCircle /> : <FaRegCircle />} 
              </button>
              {task.text}
            </li>
          ))}
        </ul>
      </div>
      <NavBar /> 
    </>
  )
}
