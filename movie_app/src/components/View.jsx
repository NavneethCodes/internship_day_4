import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

const View = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/movies').then((res) => {
      console.log(res);
      setRows(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/removemovie/${id}`)
      .then(() => {
        setRows(rows.filter((row) => row._id !== id));
        console.log(`Movie with ID: ${id} deleted`);
      })
      .catch((error) => {
        console.log('Error deleting movie:', error);
      });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Director</TableCell>
              <TableCell align="right">Release Year</TableCell>
              <TableCell align="left" sx={{ paddingLeft: '80px' }}>Poster</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{ paddingLeft: '20px' }}>{row.category}</TableCell>
                <TableCell align="right" sx={{ paddingLeft: '20px' }}>{row.director}</TableCell>
                <TableCell align="right" sx={{ paddingLeft: '20px' }}>{row.relyear}</TableCell>
                {/* Add some margin/padding to move the poster slightly to the right */}
                <TableCell align="left" sx={{ paddingLeft: '80px' }}>
                  <img src={row.poster} alt="" width="80" height="80" />
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(row._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default View;
