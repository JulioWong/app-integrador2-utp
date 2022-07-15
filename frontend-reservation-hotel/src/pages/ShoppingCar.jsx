import React, { useEffect } from 'react';
import AppFrame from './../components/AppFrame'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './../style.css';
import { Button, Container} from '@mui/material';

import { getListCar } from '../redux/actions/carActions'
import { connect } from 'react-redux';
import RowCar from './components/RowCar'

const ShoppingCar = ({ getListCar, listCar, currentGuest }) => {
  useEffect(() => { getListCar(currentGuest.id); }, [ getListCar ])

  const total = listCar.map(i => i.price).reduce((acc, value) => (acc + value), 0)
  const igv = total * 0.18;
  const subtotal = total - igv;

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
            <TableCell align="right"></TableCell>
            <TableCell align="right">PRECIO</TableCell>
            <TableCell align="right">TOTAL</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {listCar.map((car) => (
            <RowCar car={car}></RowCar>
          ))}
              <TableRow>
                <TableCell rowSpan={5} />
                <TableCell colSpan={4}>Subtotal</TableCell>
                <TableCell align="right">S/ {subtotal.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>Impuesto</TableCell>
                <TableCell align="right">{`18%`}</TableCell>
                <TableCell align="right">S/ {igv.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell align="right">S/ {total.toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <div style={{textAlign:"right", marginTop:30}}>
          <Button variant="contained" href='/reserva/1' size="large">Confirmar reserva</Button>
        </div>
      </Container>
    </AppFrame>
  )
}

const mapStateToProps = state => ({
  listCar: state.car.all,
  currentGuest: state.guest.currentGuest
})

const mapDispachToProps = {
  getListCar
}

export default connect(mapStateToProps, mapDispachToProps)(ShoppingCar)