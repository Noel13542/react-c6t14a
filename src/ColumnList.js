import React from 'react';
import Todo from './Todo';
export default function ColumnList(props) {
  const { columnList, todoList, length, mySelect } = props;
  // console.log(columnList);

  const move = (todo, num) => {
    const updatedStatus = todo.status + num;
    const updatedTodo = { ...todo, status: updatedStatus };
    props.passUpdatedTodo(updatedTodo);
  };

  const handleDelete = (todo) => {
    props.passDeletedTodo(todo);
  };

  const handleSelect = (todo) => {
    props.passSelectedTodo(todo);
    // console.log(todo)
  };

  const handleEdit = (todo) => {
    const updatedTodo = { ...todo, isEditing: true };
    // console.log(updatedTodo)
    props.passEditingTodo(updatedTodo);
  };
  const getSavedTodo = (updatedTodo) => {
    props.passSavedTodo(updatedTodo);
  };

  const cancelUpdate = (todo) => {
    const updatedTodo = { ...todo, isEditing: false };
    props.passCancelTodo(updatedTodo);
  };
  return (
    <>
      {columnList.map((column, index) => (
        <div key={index}>
          <h2>{column.columnName}</h2>
          {todoList
            .filter((todo) => todo.status == column.status)
            .map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                move={move}
                length={length}
                handleDelete={handleDelete}
                handleSelect={handleSelect}
                mySelect={mySelect}
                handleEdit={handleEdit}
                passSavedTodo={getSavedTodo}
                cancelUpdate={cancelUpdate}
              />
            ))}
        </div>
      ))}
    </>
  );
}
