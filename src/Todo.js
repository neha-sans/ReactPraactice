import React from "react";

const Todo = (props) => {
  //{ tilte: 'my task', name:'aman'}  ===> props
  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        <span> 🟩 </span>Buy Milk
      </div>
      <div>
        <span> 🟥 </span>Buy Book
      </div>
    </div>
  );
};

export default Todo;
