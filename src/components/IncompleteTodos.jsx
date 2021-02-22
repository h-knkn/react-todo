import React from "react";

export const IncompleteTodos = (props) => {
  const { inCompleteTodos, onClickComplete, onClickDelete } = props;

  return (
    <div className="complete-area">
      <p className="title">未完了</p>
      <ul>
        {inCompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
