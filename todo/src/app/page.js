"use client";

import { useState } from "react";
export default function Home() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addNote = () => {
    if (!input.trim("")) return;
    const userInput = {
      id: todoList.length + 1,
      text: input,
      completed: false,
    };
    setTodoList((prev) => [...prev, userInput]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((list) => {
        if (list.id === id) {
          return {
            ...list,
            completed: !list.completed,
          };
        } else {
          return list;
        }
      }),
    );
  };

  const deleteNote = (id) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Todo MVP</h1>
      <div>
        <div className="input-bar">
          <input
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button type="submit" onClick={addNote} className="button">
            Add
          </button>
        </div>
        <div>
          <ul className="note-list">
            {todoList.map((n) => {
              return (
                <li key={n.id} className="notes">
                  <input
                    type="checkbox"
                    onChange={() => toggleComplete(n.id)}
                  />

                  <span className={n.completed ? "strikethrough" : ""}>
                    {n.text}
                  </span>
                  <button onClick={() => deleteNote(n.id)}>delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
