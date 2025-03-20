import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import react,{useState} from 'react'
import axios from 'axios';
const Add = () => {

    const [form,setForm]=useState(
      {
        name:"",
        director:"",
        category:"",
        relyear:"",
        poster:""
      }
    )

    function valueFetch(e){
      // console.log(e)
      setForm({...form,[e.target.name]:e.target.value})
    }
    let sendData = () => {
      console.log(form);
      axios.post("http://localhost:4000/newmovie", form).then(() => {
        // Reset form fields after successful submission
        setForm({
          name: "",
          director: "",
          category: "",
          relyear: "",
          poster: ""
        });
      });
    };

    return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', width: '25ch', gap: '16px',paddingLeft:"45%"}}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="name"
        label="Name"
        variant="filled"
        name="name"
        
        value={form.name}
        onChange={valueFetch}
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
       
      />
      <TextField
        id="category"
        label="Category"
        variant="filled"
        name="category"
        value={form.category}
        onChange={valueFetch}
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
        
        
      />
      <TextField
        id="director"
        label="Director"
        variant="filled"
        name="director"
        value={form.director}
        onChange={valueFetch}
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
        
        
      />

    <TextField
        id="relyear"
        label="Release-year"
        variant="filled"
        name="relyear"
        value={form.relyear}
        onChange={valueFetch}
        
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
        
        
      />

    <TextField
        id="poster"
        label="Poster link"
        variant="filled"
        name="poster"
        value={form.poster}
        onChange={valueFetch}
        InputProps={{ sx: { backgroundColor: 'white',color:'grey' } }}
        InputLabelProps={{ sx: { color: 'black' } }}
        
        
      />

      <Stack spacing={2} direction="row">
      <Button 
      onClick={sendData}
      variant="Contained" 
      sx={{backgroundColor:"grey"}}>
        SUBMIT
        </Button>
        {/* <small>count is {count}</small> */}
    </Stack>
    </Box>
            )
}

export default Add;
