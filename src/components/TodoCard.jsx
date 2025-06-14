export function TodoCard(props) {
  const { todo, handlDeleteTodo, todoIndex, handlCompleteTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handlCompleteTodo(todoIndex);
          }}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        <button onClick={() => handlDeleteTodo(todoIndex)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
