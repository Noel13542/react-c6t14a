import React, { useState } from 'react';
import './style.css';
export default function Todo(props) {
  const {
    todo,
    move,
    length,
    handleDelete,
    handleSelect,
    mySelect,
    handleEdit,
    cancelUpdate,
  } = props;
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const getUpdatedTodo = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo({ ...updatedTodo, [name]: value });
  };
  // console.log(updatedTodo)

  const saveUpdatedTodo = () => {
    props.passSavedTodo(updatedTodo);
  };
  return (
    <>
      {todo.isEditing ? (
        <div
          className={todo == mySelect ? 'selected' : 'not-selected'}
          onClick={() => {
            handleSelect(todo);
          }}
        >
          <input
            name="title"
            value={updatedTodo.title}
            onChange={getUpdatedTodo}
          />
          <br />
          <input name="des" value={updatedTodo.des} onChange={getUpdatedTodo} />
          <button onClick={saveUpdatedTodo}>save</button>
          <button
            onClick={() => {
              cancelUpdate(todo);
            }}
          >
            cancel
          </button>
        </div>
      ) : (
        <div
          onClick={() => {
            handleSelect(todo);
          }}
          className={todo == mySelect ? 'selected' : 'not-selected'}
        >
          {todo.title}
          <br />
          {todo.des}
          {todo.status > 1 && (
            <button onClick={() => move(todo, -1)}>move backward</button>
          )}

          <button
            onClick={() => move(todo, 1)}
            disabled={todo.status === length}
          >
            move forward
          </button>
          <button onClick={() => handleDelete(todo)}>delete</button>
          <button
            onClick={() => {
              handleEdit(todo);
            }}
          >
            edit
          </button>
        </div>
      )}
    </>
  );
}
