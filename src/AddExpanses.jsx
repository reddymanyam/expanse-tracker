import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

const AddExpanses = () => {
  return (
    <>
      <Box component="form" padding="30px">
        <h1>Add Expenses</h1>

        <CustomTextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />

        <CustomTextField
          id="outlined-number"
          label="Number"
          type="number"
          sx={{ marginTop: '20px' }}  
          InputLabelProps={{
            shrink: true, 
          }}
        />
      </Box>
    </>
  );
};

export default AddExpanses;

