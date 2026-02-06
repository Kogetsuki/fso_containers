const Todo = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => onToggle(todo.id)}>
        {
          todo.done
            ? "undo"
            : "done"
        }
      </button>

      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  )
}


export default Todo