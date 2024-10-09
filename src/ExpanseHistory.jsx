import { Button } from '@mui/material';
import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const ExpanseHistory = ({ expenses, handleDeleteExpense }) => {
  return (
    <div >
      <h1>Expense History</h1>
      
        {expenses.map((expense, index) => (
            <div className='expenses'>
          <li key={expense.id}>
            <h3> {expense.expense}  - ₹{expense.amount} </h3>
            <Button variant='contained' color='error' onClick={()=>handleDeleteExpense(expense.id)}><DeleteOutlinedIcon /></Button>
          </li>
          </div>
        ))}
      
    </div>
  );
};

export default ExpanseHistory;
