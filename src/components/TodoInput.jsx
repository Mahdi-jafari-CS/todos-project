import { useState } from "react";

export function TodoInput(props) {
  const { handlAddTodo } = props;
  const [inputValue, setInputValue] = useState("");


  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handlAddTodo(inputValue);
            setInputValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
