import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import axios from 'axios';
import { useEffect, useState } from 'react';


const View =()=> {
  const[rows,setRows]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/movies').then((res)=>{
      console.log(res);
      setRows(res.data);
    })
  },[])
// }
// const rows = [
//     {
//         name:"abc",
//         category:"cde",
//         director:"efg",
//         relyear:"hij",
//         poster:"https://m.media-amazon.com/images/I/91syHT466TL.jpg"
//     },
//     {
//         name:"abc",
//         category:"cde",
//         director:"efg",
//         relyear:"hij",
//         poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnevr1YHGs2LGg4I5x1yyKiQJhUatBBcczg&s"
//     },
//     {
//         name:"abc",
//         category:"cde",
//         director:"efg",
//         relyear:"hij",
//         poster:"https://m.media-amazon.com/images/I/71GTnYW5ejL._AC_UF1000,1000_QL80_.jpg"
//     }
    
//   ];
  

// const View = () => {
  return (
    <>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Director</TableCell>
            <TableCell align="right">Release year</TableCell>
            <TableCell align="right">Poster</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.director}</TableCell>
              <TableCell align="right">{row.relyear}</TableCell>
              <TableCell align="right">{<img src={row.poster} alt="" width="100" height="100"></img>}</TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default View