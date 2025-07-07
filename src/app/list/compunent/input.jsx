import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 5, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic"  label="... جستجو"  variant="standard" sx={{ mr:'50px',
            '& label': {
              color: '#374151',
              transition: 'all 0.3s ease',
              fontSize:'18px'
            },
            '& label.Mui-focused': {
              color: '#6D28D9',
              fontWeight: 600,
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              background: 'red', // بک گراند واضح‌تر
              transition: 'all 0.4s ease',
              '& fieldset': {
                borderColor: 'red',
                borderWidth: '2px',
              },
              '&:hover fieldset': {
                
                boxShadow: '0 0 0 3px red'
              },
              '&.Mui-focused fieldset': {
              
                boxShadow: '0 0 0 4px rgba(124,58,237,0.3)',
              },
              input: {
                color: '#111827',
                fontWeight: 100,
                height:'10px'
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '10px',
            },
          }} />
    </Box>
  );
}