import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
// import { useState } from "react";

function ExpenseItem(props) {
  // const [title,setTitle] = useState(props.title)
  // const clickHandler = () =>{
  //  setTitle(props.title)
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>Title:{props.title}</h2>
        <div className="expense-item__price">Amount:${props.amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
