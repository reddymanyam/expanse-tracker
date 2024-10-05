import React from 'react';

const ExpanseHistory = ({ expenses }) => {
  return (
    <div >
      <h1>Expense History</h1>
      
        {expenses.map((expense, index) => (
            <div className='expenses'>
          <li key={index}>
            <h3> {expense.expense}  - ₹{expense.amount} </h3>
          </li>
          </div>
        ))}
      
    </div>
  );
};

export default ExpanseHistory;
