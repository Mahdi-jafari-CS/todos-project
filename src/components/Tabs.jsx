export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props;
    const tabs = ['All', 'Open', 'Completed'];
    return (
        <nav className="tab-container">
            {
                tabs.map((tab, index) => {
                     const numOfTasks = tab === 'All' ? todos.length : tab === 'Open' ? todos.filter(todo => !todo.complete).length : todos.filter(todo => todo.complete).length
                    return (
                   
                    <button
                        onClick = {()=>setSelectedTab(tab)}
                        key={index}
                        className={"tab-button " + (selectedTab === tab ? 'tab-selected' : '')}
                       
                    >
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
                })
            }
            <hr />
        </nav>
    )
}