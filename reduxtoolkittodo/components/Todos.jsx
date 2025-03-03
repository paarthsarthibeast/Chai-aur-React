import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editTodo, setEditTodo] = useState({ id: null, text: "" });

  const handleUpdate = (todo) => {
    setEditTodo(todo);
  };

  const handleUpdateChange = (e) => {
    setEditTodo({
      ...editTodo,
      text: e.target.value,
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo(editTodo));
    setEditTodo({ id: null, text: "" });
  };

  return (
    <>
      <div className="m-10 p-10 bg-white/30 backdrop-blur-none rounded-xl">
        <div
          style={{
            fontFamily: "'Oxanium','snas-serif'",
            fontSize: 40,
            fontWeight: 700,
            marginTop: 0,
          }}>
          TODOS
        </div>
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}>
              <div className="text-white">{todo.text}</div>

              <div className="flex gap-2">
                {/* Remove Todo */}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md cursor-pointer ...">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.828 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>

                {/* Update Todo */}
                <button
                  onClick={() => handleUpdate(todo)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md cursor-pointer ...">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 3.487a2.25 2.25 0 00-3.182 0l-9 9a2.25 2.25 0 00-.63 1.254L3 18.75a.75.75 0 00.922.922l5.009-1.05a2.25 2.25 0 001.254-.63l9-9a2.25 2.25 0 000-3.182z"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Update field, Showed after click on update button */}
        {editTodo.id && (
          <form onSubmit={handleUpdateSubmit} className="mt-4">
            <input
              type="text"
              value={editTodo.text}
              onChange={handleUpdateChange}
              className="bg-gray-200 px-4 py-2 rounded w-full"
            />
            <button
              type="submit"
              className="text-white bg-green-500 border-0 py-1 px-4 mt-2 focus:outline-none hover:bg-green-600 rounded text-md cursor-pointer ...">
              Update
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default Todos;
