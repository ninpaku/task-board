import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    const text = inputValue.trim()
    if (!text) return
    setTasks(prev => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ])
    setInputValue('')
  }

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  const remaining = tasks.filter(t => !t.completed).length

  return (
    <div className="page">
      <div className="board">
        <h1 className="board__title">タスクボード</h1>
        {tasks.length > 0 && (
          <p className="board__counter">
            残り <strong>{remaining}</strong> / {tasks.length} タスク
          </p>
        )}

        <div className="input-row">
          <input
            className="input-row__field"
            type="text"
            placeholder="新しいタスクを入力..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="input-row__btn" onClick={addTask}>
            追加
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="board__empty">タスクがありません。上から追加してください。</p>
        ) : (
          <ul className="task-list">
            {tasks.map(task => (
              <li key={task.id} className={`task-item${task.completed ? ' task-item--done' : ''}`}>
                <input
                  className="task-item__checkbox"
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span className="task-item__text">{task.text}</span>
                <button
                  className="task-item__delete"
                  onClick={() => deleteTask(task.id)}
                  aria-label="削除"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
