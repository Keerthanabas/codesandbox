import { useState } from "react";

const Exam = () => {
  const [todo, setTodo] = useState(["Milk", "Tea", "Coffee", "Bread"]);
  const [Add, setAdd] = useState("");
  const onLogin = () => {
    todo.push(Add);
    setTodo(todo);
  };
  return (
    <div>
      <input
        type="text"
        value={Add}
        onChange={(e) => setAdd(e.target.value)}
      ></input>{" "}
      <button onClick={() => onLogin()}>Add Item </button>
      <ol>
        {todo.map((item) => (
          <li>
            {item} <button>Delete</button>{" "}
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Exam;
