import React, { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    const newExpense = {
      id: Date.now(),
      title: title,
      amount: parseFloat(amount)
    };

    setExpenses([...expenses, newExpense]);
    setTitle('');
    setAmount('');
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="App">
      <h1>Budget Expense Tracker</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expense List</h2>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            onDelete={deleteExpense}
          />
        ))}
      </div>
      <div className="total">
        <h3>Total Expenses: ₹{totalExpenses}</h3>
      </div>
    </div>
  );
}

function ExpenseItem({ id, title, amount, onDelete }) {
  return (
    <div className="expense-item">
      <span className="item-title">{title}</span>
      <span className="item-amount">₹{amount}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default App;
