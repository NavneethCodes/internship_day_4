import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';  

const Add = () => {
  const [form, setForm] = useState(
    {
      name: "",
      director: "",
      category: "",
      year:"",
      link:""
    }
  ) 

  let valueAdd=() =>{
    console.log(form)
  }

  function valueCap(e){
    setForm({...form, [e.target.name]:e.target.value})
  }

  return (
    <div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
            border: '1px solid black',
            padding: 2,
            borderRadius: 1,
          }}
          noValidate
          autoComplete="off"
        >            
          <div>
            <TextField
              required
              name="name"
              label="Movie name (Required)"
              variant="standard"
              fullWidth
              value={form.name}
              onChange={valueCap}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              name="director"
              label="Movie director (Required)"
              variant="standard"
              fullWidth
              value={form.director}
              onChange={valueCap}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              name="category"
              label="Movie category (Required)"
              variant="standard"
              fullWidth
              value={form.category}
              onChange={valueCap}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              name="year"
              label="Movie Release Year (Required)"
              variant="standard"
              fullWidth
              value={form.year}
              onChange={valueCap}
              sx={{ mb: 2 }}
            />
            <TextField
              name="link"
              label="Link of poster"
              variant="standard"
              fullWidth
              value={form.link}
              onChange={valueCap}
              sx={{ mb: 2 }}
            />
          </div>
          <Button variant="contained" onClick={valueAdd}>Submit</Button>
        </Box>
    </div>
  )
}

export default Add;
