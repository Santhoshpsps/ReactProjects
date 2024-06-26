import React from 'react';
import './ExpenseDate.css';
const ExpenseDate = (props)=>{

const date =props.date.toLocaleString('en-US',{day:'2-digit'});
const month=props.date.toLocaleString('en-US',{month:'long'});
const year =props.date.getFullYear();

return(<div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__day">{date}</div>
    <div className="expense-date__year">{year}</div>
    </div>);
}

export default ExpenseDate;
