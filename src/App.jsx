import './App.css'
import React from 'react'
import AddExpanses from './AddExpanses'
import ExpanseHistory from './ExpanseHistory'

const App = () => {
  return (
    <>
       
      <div className='container'>
      <h1>Total Amount</h1>
      <h2>₹</h2>
      <div className='container1'>
      <div className='container11'>
        <AddExpanses />
      </div>
      <div className='container12'>
      <ExpanseHistory />
      </div>
      </div>
      
      </div>

    </>
  )
}

export default App
