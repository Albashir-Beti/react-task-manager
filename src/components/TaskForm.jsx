import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (taskText.trim() === '') {
      return
    }

    onAddTask(taskText)
    setTaskText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm