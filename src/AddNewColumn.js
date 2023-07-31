import React, { useState } from 'react';

export default function AddNewColumn(props) {
  const { length } = props;
  const [newColumn, setNewColumn] = useState({});
  const getNewColumn = (e) => {
    const { name, value } = e.target;
    setNewColumn({ ...newColumn, [name]: value, status: length + 1 });
  };

  const addNewColumn = () => {
    props.passNewColumn(newColumn);
    setNewColumn({});
  };
  // console.log(newColumn);
  return (
    <>
      <input
        name="columnName"
        value={newColumn.columnName || ''}
        onChange={getNewColumn}
      />
      <button onClick={addNewColumn}>add new column</button>
    </>
  );
}
