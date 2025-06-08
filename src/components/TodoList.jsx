import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos } = props;
    const tab = 'All'; 

    return (
        <div>
            <section className="todo-list">
                {todos
                    .filter(todo => {
                        if (tab === 'All') return true;
                        if (tab === 'Open') return !todo.complete;
                        if (tab === 'Completed') return todo.complete;
                        return false;
                    })
                    .map((todo, index) => (
                        <TodoCard key={index} todo={todo} />
                    ))}
            </section>

        </div>
    );
}