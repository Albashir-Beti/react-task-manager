import { useEffect, useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import LifecycleDemo from './components/LifecycleDemo'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function handleAddTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  function handleToggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function handleDeleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    )
  }
  function handleClearTasks() {
  setTasks([])
}

  return (
    <div className="app">
      <Header />

      <main>
  <TaskForm onAddTask={handleAddTask} />

  <TaskStats tasks={tasks} />

  <button
    type="button"
    className="clear-button"
    onClick={handleClearTasks}
  >
    Clear All Tasks
  </button>

  <TaskList
    tasks={tasks}
    onToggleTask={handleToggleTask}
    onDeleteTask={handleDeleteTask}
  />

  <LifecycleDemo />
</main>
    </div>
  )
}

export default App