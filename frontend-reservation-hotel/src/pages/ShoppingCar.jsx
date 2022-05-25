import React from 'react';
import AppFrame from './../components/AppFrame'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './../style.css';
import { Container} from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
];


const ShoppingCar = () => {
  return (
    <AppFrame>
      <Container lg sx={{mt:5}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">HABITACIÓN</TableCell>
            <TableCell align="center">CANTIDAD</TableCell>
            <TableCell align="right">PRECIO</TableCell>
            <TableCell align="right">TOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell size='small'>
              <img src="/1.jpg" width="100px" alt=""/>
              </TableCell>
              <TableCell align="left">STANDARD MATRIMONIAL</TableCell>
              <TableCell align="center" style={{fontWeight:500}}>1</TableCell>
              <TableCell align="right" style={{fontWeight:500}}>S/250.00</TableCell>
              <TableCell align="right" style={{fontWeight:500}}>S/250.00</TableCell>
            </TableRow>
          ))}


              <TableRow>
                <TableCell rowSpan={4} />
                <TableCell colSpan={3}>Subtotal</TableCell>
                <TableCell align="right">S/ {610.88}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Impuesto</TableCell>
                <TableCell align="right">{`18%`}</TableCell>
                <TableCell align="right">S/ {42.76}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell align="right">S/ {653.64}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </AppFrame>
  )
}

export default ShoppingCar