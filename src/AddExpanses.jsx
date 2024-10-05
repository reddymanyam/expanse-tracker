import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const CustomTextField = styled(TextField)({
  width: '85%',
  input: {
    color: 'white', 
  },
  '& label': {
    color: 'white',  
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',  
    },
    '&:hover fieldset': {
      borderColor: 'white',  
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',  
    },
  },
});

const CustomButton = styled(Button)({
    width:'300px', marginTop:'40px', marginLeft:"25px"
})



const AddExpanses = ({ handleAddExpense}) => {

    const [value, setValue] = React.useState({
        expenses:"",
        amount:""
    });


const handleSend = () =>{
    if (value.expenses && value.amount) {
       
        const newExpense = {
          expense: value.expenses,
          amount: value.amount,
        };
        handleAddExpense(newExpense);
        
        setValue({ expenses: '', amount: '' });
      } else {
        alert("Please fill out both fields.");
      }
};

  return (
    <>
      <Box component="form" padding="30px">
        <h1>Add Expenses</h1>

        <CustomTextField
          id="outlined-basic"
          label="Enter Expenses"
          variant="outlined"
          value={value.expenses}
          onChange={(e)=>setValue({...value, expenses: e.target.value})}
        />

        <CustomTextField
          id="outlined-number"
          label="Amount"
          variant="outlined"
          type="number"
          sx={{ marginTop: '20px' }}  
          InputLabelProps={{
            shrink: true, 
          }}
          value={value.amount}
          onChange={(e)=>setValue({...value, amount: e.target.value})}
        />
        <CustomButton variant="contained" onClick={handleSend}>Send <SendIcon /></CustomButton>
      </Box>
     
     
    </>
  );
};

export default AddExpanses;

