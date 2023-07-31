import React, { useState } from 'react';

export default function AddNewTodo(props) {
  const [newTodo, setNewTodo] = useState({});
  const getNewTodo = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value, id: new Date(), status: 1 ,isEditing:false});
  };

  const addNewTodo = ()=>{
    props.passNewTodo(newTodo)
    setNewTodo({})
  }
  return (
    <>
      <input name="title" value={newTodo.title || ''} onChange={getNewTodo} />
      <input name="des" value={newTodo.des || ''} onChange={getNewTodo} />
      <button onClick = {addNewTodo}>add new todo</button>
    </>
  );
}
