import React, { useState } from 'react';
import './style.css';
import MySelect from './MySelect';
import ColumnList from './ColumnList';
import AddNewTodo from './AddNewTodo';
import AddNewColumn from './AddNewColumn';
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [mySelect, setMySelect] = useState({});
  const [columnList, setColumnList] = useState([
    { columnName: 'todo', status: 1 },
  ]);
  const getNewTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  // console.log(todoList);
  const getNewColumn = (newColumn) => {
    setColumnList([...columnList, newColumn]);
  };
  // console.log(columnList)

  const getUpdatedTodo = (updatedTodo) => {
    const updatedList = [...todoList].map((todo) => {
      if (todo.id === updatedTodo.id) return updatedTodo;
      else return todo;
    });
    setTodoList(updatedList);
  };
  const getDeletedTodo = (deletedTodo) => {
    setTodoList([...todoList].filter((todo) => todo.id !== deletedTodo.id));
  };

  const getSelectedTodo = (selectedTodo) => {
    setMySelect(selectedTodo);
  };

  const getEditingTodo = (editingTodo) => {
    const updatedList = [...todoList].map((todo) => {
      if (todo.id === editingTodo.id) return editingTodo;
      else return todo;
    });
    setTodoList(updatedList);
  };
  const getSavedTodo = (updatedTodo) => {
    const updatedList = [...todoList].map((todo) => {
      if (todo.id == updatedTodo.id) return updatedTodo;
      else return todo;
    });
    setTodoList(updatedList);
  };
  const getCancelTodo = (updatedTodo) => {
    const updatedList = [...todoList].map((todo) => {
      if (todo.id == updatedTodo.id) return updatedTodo;
      else return todo;
    });
    setTodoList(updatedList);
  };
  return (
    <div>
      <MySelect mySelect={mySelect} />
      <ColumnList
        columnList={columnList}
        todoList={todoList}
        passUpdatedTodo={getUpdatedTodo}
        length={columnList.length}
        passDeletedTodo={getDeletedTodo}
        passSelectedTodo={getSelectedTodo}
        mySelect={mySelect}
        passEditingTodo={getEditingTodo}
        passSavedTodo={getSavedTodo}
        passCancelTodo={getCancelTodo}
      />
      <AddNewColumn passNewColumn={getNewColumn} length={columnList.length} />
      <AddNewTodo passNewTodo={getNewTodo} />
    </div>
  );
}
