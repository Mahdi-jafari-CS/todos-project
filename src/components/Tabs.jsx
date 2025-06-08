export function Tabs(props) {
    const { todos } = props;
    const tabs = ['All', 'Open', 'Completed'];
    return (
        <nav className="tab-container">
            {
                tabs.map((tab, index) => {
                     const numOfTasks = tab === 'All' ? todos.length : tab === 'Open' ? todos.filter(todo => !todo.complete).length : todos.filter(todo => todo.complete).length
                    return (
                   
                    <button
                        key={index}
                        className="tab-button"
                        onClick={() => console.log(`Switching to ${tab} tab`)}
                    >
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
                })
            }
        </nav>
    )
}