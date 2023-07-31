import React from 'react';

export default function MySelect(props) {
  const { mySelect } = props;
  return (
    <>
      <h1>my select</h1>
      {mySelect.title}
      {mySelect.des}
    </>
  );
}
