import './App.css'
import React from 'react'
import AddExpanses from './AddExpanses'
import ExpanseHistory from './ExpanseHistory'
import { useState } from 'react'

const App = () => {

  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };


  return (
    <>
       
      <div className='container'>
      <h1>Total Amount</h1>
      <h2>₹</h2>
      <div className='container1'>
      <div className='container11'>
        <AddExpanses handleAddExpense={handleAddExpense} />
      </div>
      <div className='container12'>
      <ExpanseHistory expenses={expenses} />
      </div>
      </div>
      
      </div>

    </>
  )
}

export default App
