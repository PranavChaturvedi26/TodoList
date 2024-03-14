import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo() {
  let [todoArray, setTodoArray] = useState([
    { task: "sampletask", id: uuidv4() },
  ]);
  let [newTodo, setNewTodo] = useState("");
  let addNewTask = () => {
    setTodoArray((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodoArray((prevTodo) => {
      return prevTodo.filter((todo) => todo.id != id);
    });
  };
  let upperCase = () => {
    setTodoArray((prevTodo) =>
      prevTodo.map((todo) => {
        return {
          ...prevTodo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperTodo = (id) => {
    setTodoArray((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Submit</button>
      <br></br>
      <br></br>
      <br></br>
      <hr />
      <h4>Todo List</h4>
      <ul>
        {todoArray.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => upperTodo(todo.id)}>Update</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCase}>UpperCase All</button>
    </div>
  );
}
