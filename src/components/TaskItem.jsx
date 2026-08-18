function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleTask(task.id)}>
        {task.text}
      </span>

      <button
        type="button"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem